import type { Metadata } from "next";
import Link from "next/link";
import { Entities, LegalPage } from "@/components/LegalPage";
import { company } from "@/content/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Delivery policy",
  description:
    "How LexConv delivers its products. ColdChain OS is an online service delivered by e-mail and login, with no physical shipping.",
  path: "/delivery",
});

export default function DeliveryPage() {
  return (
    <LegalPage
      title="Delivery policy"
      path="/delivery"
      intro="LexConv products such as ColdChain OS are online services. This page explains how and when you get access after you pay."
    >
      <p>This policy applies to purchases from:</p>
      <Entities />

      <h2>1. Online services</h2>
      <ul>
        <li>There is nothing to ship. You use our products in a web browser.</li>
        <li>A free trial starts as soon as you sign up.</li>
        <li>
          After a successful payment, we activate your paid plan within 1 working day and confirm it
          by e-mail to the address on your account.
        </li>
        <li>If your plan includes setup, we agree the setup dates with you by e-mail.</li>
      </ul>

      <h2>2. Hardware</h2>
      <p>
        If you order sensors or other hardware from us, we confirm the delivery address, cost and
        expected delivery date with you in writing before you pay.
      </p>

      <h2>3. If something goes wrong</h2>
      <p>
        If you have paid but cannot access your plan after 1 working day, e-mail{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a> with your payment ID. If we cannot
        give you access within 7 days of your payment, you get a full refund under our{" "}
        <Link href="/refunds">cancellation and refund policy</Link>.
      </p>
    </LegalPage>
  );
}
