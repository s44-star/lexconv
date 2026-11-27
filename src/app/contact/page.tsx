import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { company } from "@/content/company";
import { ERROR_MESSAGES, LIMITS, TOPICS, isErrorCode } from "@/lib/contact";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Contact LexConv about ColdChain OS, a partnership or an investment. E-mail ceo@lexconv.com or use the contact form.",
  path: "/contact",
});

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const fieldClass =
  "mt-1.5 block w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-base text-ink placeholder:text-muted/70 focus-visible:border-accent";

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const errorCode = isErrorCode(params.error) ? params.error : null;

  return (
    <>
      <PageIntro title="Contact us">
        <p>
          Tell us about your warehouse, your project or your idea. We read every message and reply
          by e-mail.
        </p>
      </PageIntro>

      <div className="container-page mt-12 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <section aria-labelledby="email-heading">
          <h2 id="email-heading" className="text-xl font-semibold">
            E-mail
          </h2>
          <p className="mt-2">
            <a className="link text-lg" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
          <p className="mt-6 max-w-[48ch] text-muted">
            Already a ColdChain OS customer and need help? E-mail us from the address on your account
            so we can find it quickly.
          </p>
        </section>

        <section aria-labelledby="form-heading" id="form" className="scroll-mt-6">
          <h2 id="form-heading" className="text-xl font-semibold">
            Send a message
          </h2>

          {errorCode ? (
            <div
              role="alert"
              className="mt-4 rounded-md border border-signal bg-surface px-4 py-3 text-[0.9375rem]"
            >
              <p className="font-semibold text-signal">Message not sent</p>
              <p className="mt-1">
                {ERROR_MESSAGES[errorCode]}{" "}
                {errorCode !== "invalid" ? (
                  <a className="link" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                ) : null}
              </p>
            </div>
          ) : null}

          <form method="post" action="/api/contact" className="mt-6 space-y-5">
            <div>
              <label htmlFor="name" className="font-medium">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={LIMITS.name}
                autoComplete="name"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="font-medium">
                E-mail address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={LIMITS.email}
                autoComplete="email"
                inputMode="email"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="company" className="font-medium">
                Company <span className="font-normal text-muted">(optional)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                maxLength={LIMITS.company}
                autoComplete="organization"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="topic" className="font-medium">
                What is it about?
              </label>
              <select id="topic" name="topic" defaultValue={TOPICS[0]} className={fieldClass}>
                {TOPICS.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                minLength={LIMITS.messageMin}
                maxLength={LIMITS.messageMax}
                aria-describedby="message-hint"
                className={fieldClass}
              />
              <p id="message-hint" className="mt-1.5 text-sm text-muted">
                For ColdChain OS, it helps to know how many rooms or warehouses you want to monitor.
              </p>
            </div>

            {/* Honeypot for bots. Hidden from people and screen readers. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="website">Leave this field empty</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
              <button type="submit" className="btn btn-primary cursor-pointer">
                Send message
              </button>
              <p className="text-sm text-muted">
                We use your details only to reply. See our{" "}
                <Link href="/privacy" className="link">
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
