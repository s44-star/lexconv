import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactView } from "@/components/ContactView";
import { isErrorCode } from "@/lib/contact";

// Shown after a failed form submission. Pre-rendered for each error type.
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ code: "invalid" }, { code: "rate" }, { code: "send" }];
}

export const metadata: Metadata = {
  title: "Message not sent",
  robots: { index: false, follow: true },
};

export default async function ContactErrorPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  if (!isErrorCode(code)) notFound();
  return <ContactView errorCode={code} />;
}
