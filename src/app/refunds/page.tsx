import type { Metadata } from "next";
import Link from "next/link";
import { Entities, LegalPage } from "@/components/LegalPage";
import { company } from "@/content/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Cancellation and refund policy",
  description:
    "How to cancel a LexConv plan such as ColdChain OS, when you can get a refund, and how long refunds take.",
  path: "/refunds",
});

export default function RefundsPage() {
  return (
    <LegalPage
      title="Cancellation and refund policy"
      path="/refunds"
      intro="This policy explains how to cancel a LexConv plan, such as ColdChain OS, when you can get your money back, and how long it takes."
    >
      <p>This policy applies to purchases from:</p>
      <Entities />

      <h2>1. Try before you pay</h2>
      <p>
        ColdChain OS comes with a 14-day free trial, with no card needed. We encourage you to use the
        trial to check the product fits your needs before you pay.
      </p>

      <h2>2. How to cancel</h2>
      <ul>
        <li>
          Each payment covers one month or one year. Nothing renews automatically, so you are never
          charged again unless you choose to pay.
        </li>
        <li>
          To cancel, simply don&apos;t pay for the next period. If you want us to close your account
          as well, e-mail <a href={`mailto:${company.email}`}>{company.email}</a>.
        </li>
        <li>Your access continues until the end of the period you have already paid for.</li>
      </ul>

      <h2>3. When we give a full refund</h2>
      <p>We refund the full amount if:</p>
      <ul>
        <li>you were charged twice for the same thing;</li>
        <li>you were charged the wrong amount;</li>
        <li>
          we could not give you access to the plan you paid for within 7 days of your payment;
        </li>
        <li>
          we stop offering the product, in which case we refund the unused part of your period.
        </li>
      </ul>

      <h2>4. Setup fees</h2>
      <p>
        If you ask to cancel before we have started setting up your account, we refund the setup fee
        in full. Once setup work has started, the setup fee is not refundable.
      </p>

      <h2>5. When we don&apos;t give refunds</h2>
      <p>
        Once a paid period has started, we do not refund the unused part of it. This applies to
        monthly and yearly plans. You keep access until the period ends.
      </p>

      <h2>6. How to ask for a refund</h2>
      <ol>
        <li>
          E-mail <a href={`mailto:${company.email}`}>{company.email}</a> within 30 days of the payment.
        </li>
        <li>
          Include your company name, the e-mail address on your account, the payment date and the
          payment ID from your receipt.
        </li>
        <li>We will reply within 5 working days to confirm whether the refund is approved.</li>
      </ol>

      <h2>7. How long refunds take</h2>
      <p>
        Approved refunds go back to the original payment method through Razorpay. Once we approve a
        refund, it usually reaches your account within 5 to 7 working days, depending on your bank or
        card provider. International card refunds can take longer.
      </p>

      <h2>8. Your legal rights</h2>
      <p>
        Our products are sold to businesses. Nothing in this policy takes away any right you have
        under the law that cannot be excluded. See also our{" "}
        <Link href="/terms">terms and conditions</Link>.
      </p>
    </LegalPage>
  );
}
