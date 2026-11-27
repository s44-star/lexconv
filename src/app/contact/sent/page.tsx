import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Message sent",
  robots: { index: false, follow: true },
};

export default function ContactSentPage() {
  return (
    <>
      <PageIntro title="Message sent">
        <p>Thank you. We have your message and will reply to the e-mail address you gave us.</p>
      </PageIntro>
      <div className="container-page mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
        <Link href="/products" className="btn btn-secondary">
          See our products
        </Link>
      </div>
    </>
  );
}
