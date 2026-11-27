import type { Metadata } from "next";
import Link from "next/link";
import { Entities, LegalPage } from "@/components/LegalPage";
import { company } from "@/content/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms and conditions",
  description:
    "The terms that apply when you use lexconv.com or buy a LexConv product such as ColdChain OS, for customers in India and other countries.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and conditions"
      path="/terms"
      intro="These terms apply when you use lexconv.com or buy any LexConv product, including ColdChain OS. Please read them before you buy. They are written in plain English and will be reviewed by a lawyer."
    >
      <h2>1. Who we are</h2>
      <p>&ldquo;LexConv&rdquo;, &ldquo;we&rdquo; and &ldquo;us&rdquo; mean:</p>
      <Entities />
      <p>
        Your contract is with LexConv, whether you are in India or in another country. You can
        contact us at <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>

      <h2>2. Who these terms are for</h2>
      <p>
        Our products are made for businesses. By starting a trial or buying a plan, you confirm that
        you are acting for a business, and that you have the authority to accept these terms for it.
        &ldquo;You&rdquo; means that business.
      </p>
      <p>
        A product may have extra terms of its own, shown on its website or in your order. If they
        conflict with these terms, the product&apos;s terms apply for that product.
      </p>

      <h2>3. Free trials</h2>
      <p>
        Where a product offers a free trial (ColdChain OS offers 14 days), you can use it without
        paying and without giving card details. At the end of the trial, your access stops unless you
        buy a plan. We may end a trial early if it is being misused.
      </p>

      <h2>4. Prices and payment</h2>
      <ul>
        <li>
          Prices are shown on each product&apos;s pricing page, for example{" "}
          <a href="https://coldchain.lexconv.com/pricing">coldchain.lexconv.com/pricing</a>. The price
          you pay is the one shown when you pay.
        </li>
        <li>
          Plans are paid monthly or yearly. Some plans also have a one-time setup fee, which you pay
          once with your first payment.
        </li>
        <li>
          Each payment covers one period only. Nothing renews automatically, and we never charge you
          without you choosing to pay.
        </li>
        <li>
          Customers in India pay in rupees (INR). Everyone else pays in US dollars (USD). Payments are
          processed by Razorpay. We do not see or store your full card details.
        </li>
        <li>Any tax that applies is shown before you pay.</li>
        <li>
          We may change prices for future periods. The new price only applies to payments you make
          after the change.
        </li>
      </ul>

      <h2>5. Cancellation and refunds</h2>
      <p>
        You can stop at any time by not paying for the next period. Your access continues until the
        end of the period you have paid for. Refunds are covered in our{" "}
        <Link href="/refunds">cancellation and refund policy</Link>.
      </p>

      <h2>6. Your account</h2>
      <ul>
        <li>Keep your login details safe and tell us straight away if you think someone else has them.</li>
        <li>You are responsible for what people do under your account.</li>
        <li>Give us accurate details, and keep them up to date.</li>
      </ul>

      <h2>7. How you may use our products</h2>
      <p>You must not:</p>
      <ul>
        <li>break the law, or help anyone else break it, while using our products;</li>
        <li>try to get into parts of our systems you have not been given access to;</li>
        <li>copy, resell or reverse-engineer our software, except where the law allows it;</li>
        <li>upload anything harmful, such as viruses, or overload our systems on purpose.</li>
      </ul>
      <p>We may suspend your access if you break these rules. Where we can, we will warn you first.</p>

      <h2>8. Monitoring products: what they can and cannot do</h2>
      <p>
        ColdChain OS and our other monitoring products help you watch conditions and respond quickly.
        They depend on working sensors, power and an internet connection, so they can miss or delay
        an alert. They do not replace your own checks, procedures or legal duties for storing goods.
        You remain responsible for how your goods are stored and for any decisions you make based on
        our data.
      </p>

      <h2>9. Your data</h2>
      <p>
        You own the data you put into our products. You allow us to store and process it only to run
        the service for you, keep it secure and improve it. Our{" "}
        <Link href="/privacy">privacy policy</Link> explains how we handle personal data.
      </p>
      <p>
        When your plan ends, you can ask us for an export of your data for 30 days. After that, we
        may delete it.
      </p>

      <h2>10. Our intellectual property</h2>
      <p>
        We own our software, designs, brands and content. Paying for a plan gives you the right to
        use the product during the period you paid for. It does not transfer ownership.
      </p>

      <h2>11. Availability and changes to the service</h2>
      <p>
        We work to keep our products running and secure, but we cannot promise they will never be
        interrupted. We may need short breaks for maintenance or urgent fixes. We may improve or
        change features. If we remove something important that you paid for, we will tell you and
        you can ask for a refund for the unused part of your period.
      </p>
      <p>Service levels (SLAs) apply only if they are agreed in writing, for example on an Enterprise plan.</p>

      <h2>12. Our liability to you</h2>
      <ul>
        <li>
          Nothing in these terms limits liability that the law does not allow us to limit, such as
          liability for fraud, or for death or personal injury caused by negligence.
        </li>
        <li>
          We are not liable for indirect or consequential losses, such as lost profits, lost
          business, or loss of goods, that result from using or not being able to use our products.
        </li>
        <li>
          Our total liability to you in any 12-month period is limited to the amount you paid us in
          that period for the product concerned.
        </li>
      </ul>

      <h2>13. Ending the agreement</h2>
      <p>
        You can stop using our products at any time. We may end or suspend your access if you do not
        pay, if you seriously break these terms, or if we stop offering a product. If we stop
        offering a product, we will give you at least 30 days&apos; notice and refund any unused
        part of a period you have paid for.
      </p>

      <h2>14. Changes to these terms</h2>
      <p>
        We may update these terms. The date at the top shows when they last changed. If a change
        matters to paying customers, we will tell you by e-mail before it applies.
      </p>

      <h2>15. Law and disputes</h2>
      <p>
        Please contact us first. Most problems can be solved by e-mail.
      </p>
      <p>
        These terms are governed by the laws of India, and the courts with jurisdiction over our
        business address in India will hear any dispute. If you are a customer outside India, this
        does not take away any protection you have under the laws of your own country that cannot be
        excluded by contract.
      </p>

      <h2>16. Contact</h2>
      <p>
        Questions about these terms? E-mail <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </LegalPage>
  );
}
