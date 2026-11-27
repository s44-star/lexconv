import { NextResponse, type NextRequest } from "next/server";
import { oneLine, parseContactForm, type ContactErrorCode } from "@/lib/contact";
import { allowRequest, clientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_TO = "ceo@lexconv.com";
const DEFAULT_FROM = "LexConv website <website@lexconv.com>";

/**
 * Plain HTML form POST target. Works without JavaScript:
 * success → 303 to /contact/sent, failure → 303 back to /contact?error=… .
 */
function redirectTo(request: NextRequest, path: string) {
  return NextResponse.redirect(new URL(path, request.url), 303);
}

function fail(request: NextRequest, code: ContactErrorCode) {
  return redirectTo(request, `/contact?error=${code}#form`);
}

function sameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  // Some privacy tools strip Origin on same-site form posts; allow that case.
  if (!origin) return true;
  try {
    return new URL(origin).host === request.nextUrl.host;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) return fail(request, "invalid");

  const ip = clientIp(request.headers);
  if (!(await allowRequest(ip))) return fail(request, "rate");

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail(request, "invalid");
  }

  // Honeypot: real people never see or fill this field.
  const trap = form.get("website");
  if (typeof trap === "string" && trap.trim() !== "") {
    return redirectTo(request, "/contact/sent");
  }

  const message = parseContactForm(form);
  if (!message) return fail(request, "invalid");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return fail(request, "send");
  }

  const text = [
    `Name: ${message.name}`,
    `E-mail: ${message.email}`,
    `Company: ${message.company || "(not given)"}`,
    `Topic: ${message.topic}`,
    "",
    message.message,
    "",
    "Sent from the contact form on lexconv.com",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
        to: [process.env.CONTACT_TO_EMAIL || DEFAULT_TO],
        reply_to: message.email,
        subject: oneLine(`[lexconv.com] ${message.topic}: ${message.name}`),
        text,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error(`[contact] Resend error ${response.status}: ${detail.slice(0, 300)}`);
      return fail(request, "send");
    }
  } catch (error) {
    console.error("[contact] Resend request failed", error);
    return fail(request, "send");
  }

  return redirectTo(request, "/contact/sent");
}

export function GET(request: NextRequest) {
  return redirectTo(request, "/contact");
}
