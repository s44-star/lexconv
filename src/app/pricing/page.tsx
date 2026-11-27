import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { products } from "@/content/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Pricing",
  description:
    "Pricing for LexConv products. ColdChain OS starts at ₹4,999 a month in India and $149 a month elsewhere, with a 14-day free trial.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageIntro title="Pricing">
        <p>
          Each product has its own pricing page with every plan and limit. This page gives you the
          starting price and the link.
        </p>
      </PageIntro>

      <section aria-label="Product prices" className="container-page mt-12">
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.slug} className="rounded-lg border border-line bg-surface p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <dl className="mt-5 grid gap-5 sm:grid-cols-3">
                <div>
                  <dt className="text-sm text-muted">In India (INR)</dt>
                  <dd className="text-lg font-semibold tabular-nums">From {product.fromPrice.inr} a month</dd>
                  <dd className="text-sm text-muted">+ one-time setup from {product.fromPrice.inrSetup}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Everywhere else (USD)</dt>
                  <dd className="text-lg font-semibold tabular-nums">From {product.fromPrice.usd} a month</dd>
                  <dd className="text-sm text-muted">+ one-time setup from {product.fromPrice.usdSetup}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Trial</dt>
                  <dd>{product.trial}</dd>
                </div>
              </dl>
              <div className="mt-6">
                <a href={product.pricingUrl} className="btn btn-primary">
                  See all {product.name} plans
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="billing-heading" className="container-page mt-16">
        <h2 id="billing-heading" className="text-[1.75rem] font-semibold">
          How billing works
        </h2>
        <ul className="mt-6 max-w-[64ch] space-y-4">
          <li>
            <strong className="font-semibold">One payment, one period.</strong>{" "}
            <span className="text-muted">
              Each payment covers one month or one year. Nothing renews on its own. To stop, simply
              don&apos;t pay for the next period.
            </span>
          </li>
          <li>
            <strong className="font-semibold">Pay in your currency.</strong>{" "}
            <span className="text-muted">
              Companies in India pay in rupees by UPI, card or netbanking. Everyone else pays in US
              dollars by international card. Payments are processed by Razorpay.
            </span>
          </li>
          <li>
            <strong className="font-semibold">Setup is charged once.</strong>{" "}
            <span className="text-muted">
              The setup fee covers getting your site, sensors and team connected. You pay it once,
              not every period.
            </span>
          </li>
          <li>
            <strong className="font-semibold">Taxes are shown before you pay.</strong>{" "}
            <span className="text-muted">
              If any tax applies to your purchase, you will see it at checkout.
            </span>
          </li>
        </ul>
        <p className="mt-8 max-w-[64ch] text-muted">
          Read our{" "}
          <Link href="/refunds" className="link">
            cancellation and refund policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="link">
            terms and conditions
          </Link>
          . Questions about a quote or an Enterprise plan?{" "}
          <Link href="/contact" className="link">
            Contact us
          </Link>
          .
        </p>
      </section>
    </>
  );
}
