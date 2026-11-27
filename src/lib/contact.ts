export const TOPICS = ["ColdChain OS", "Partnership", "Investment", "Something else"] as const;
export type Topic = (typeof TOPICS)[number];

export const LIMITS = {
  name: 100,
  email: 200,
  company: 150,
  messageMin: 10,
  messageMax: 5000,
} as const;

export type ContactMessage = {
  name: string;
  email: string;
  company: string;
  topic: Topic;
  message: string;
};

export type ContactErrorCode = "invalid" | "rate" | "send";

export const ERROR_MESSAGES: Record<ContactErrorCode, string> = {
  invalid:
    "Some details are missing or too long. Check your name, e-mail address and message, then send again.",
  rate: "Too many messages were sent from your connection in a short time. Wait 10 minutes and try again.",
  send: "Your message could not be sent just now. Please e-mail us directly instead.",
};

export function isErrorCode(value: unknown): value is ContactErrorCode {
  return value === "invalid" || value === "rate" || value === "send";
}

// A practical e-mail check: something@something.tld, no spaces.
const EMAIL_RE = /^[^\s@<>()]+@[^\s@<>()]+\.[^\s@<>()]{2,}$/;

function clean(value: FormDataEntryValue | null, max: number): string | null {
  if (typeof value !== "string") return null;
  // Drop control characters except normal line breaks and tabs.
  const text = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
  if (text.length > max) return null;
  return text;
}

export function parseContactForm(form: FormData): ContactMessage | null {
  const name = clean(form.get("name"), LIMITS.name);
  const email = clean(form.get("email"), LIMITS.email);
  const companyName = clean(form.get("company"), LIMITS.company) ?? "";
  const topicRaw = clean(form.get("topic"), 50);
  const message = clean(form.get("message"), LIMITS.messageMax);

  if (!name || !email || !message) return null;
  if (!EMAIL_RE.test(email)) return null;
  if (message.length < LIMITS.messageMin) return null;

  const topic = (TOPICS as readonly string[]).includes(topicRaw ?? "")
    ? (topicRaw as Topic)
    : "Something else";

  return { name, email, company: companyName, topic, message };
}

/** Single-line text for e-mail headers such as the subject. */
export function oneLine(text: string, max = 120): string {
  return text.replace(/[\r\n]+/g, " ").slice(0, max);
}
