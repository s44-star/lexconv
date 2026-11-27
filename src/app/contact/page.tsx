import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Contact LexConv about ColdChain OS, a partnership or an investment. E-mail ceo@lexconv.com or use the contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactView errorCode={null} />;
}
