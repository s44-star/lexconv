import type { Metadata } from "next";
import Link from "next/link";
import { ProductPanel } from "@/components/ProductPanel";
import { ThresholdTrace } from "@/components/ThresholdTrace";
import { company } from "@/content/company";
import { products } from "@/content/products";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "LexConv: we build and run software and hardware businesses",
    description: site.description,
    path: "/",
  }),
  title: { absolute: "LexConv: we build and run software and hardware businesses" },
};

const reasons = [
  {
    title: "We run what we build",
    body: "We don't hand over software and walk away. The team that builds ColdChain OS also runs it, fixes it and answers your questions.",
  },
  {
    title: "Simple, honest billing",
    body: "Pay in rupees in India or US dollars elsewhere. Each payment covers one month or one year, and nothing renews without you choosing to pay again.",
  },
  {
    title: "You speak to the founder",
    body: "Customers, partners and investors deal directly with Subham Praharaj, who founded LexConv and leads every product.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LexConv",
  url: site.url,
  email: company.email,
  founder: { "@type": "Person", name: company.founder },
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="container-page pt-14 sm:pt-20">
        <h1 className="max-w-[17ch] text-[2.375rem] font-semibold leading-[1.05] sm:text-[3.5rem] lg:text-[4.25rem]">
          We build and run software and hardware businesses.
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg text-muted sm:text-xl">
          LexConv is a venture studio. We pick a real operational problem, build the product that
          solves it, and keep running it. Our live product, ColdChain OS, watches temperature and
          humidity in cold storages and in pharma and food warehouses.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Contact us
          </Link>
          <Link href="/products" className="btn btn-secondary">
            See our products
          </Link>
        </div>

        <ThresholdTrace />
      </section>

      <section aria-labelledby="products-heading" className="container-page mt-24">
        <h2 id="products-heading" className="text-[1.75rem] font-semibold leading-tight sm:text-[2.25rem]">
          Our products
        </h2>
        <div className="mt-8 space-y-6">
          {products.map((product) => (
            <ProductPanel key={product.slug} product={product} />
          ))}
        </div>
        <p className="mt-6 max-w-[60ch] text-muted">
          More products are in development. We list a product here only once customers can use it.
        </p>
      </section>

      <section aria-labelledby="why-heading" className="container-page mt-24">
        <h2 id="why-heading" className="text-[1.75rem] font-semibold leading-tight sm:text-[2.25rem]">
          Why work with us
        </h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
          {reasons.map((reason) => (
            <li key={reason.title} className="border-t-4 border-band pt-5">
              <h3 className="text-xl font-semibold">{reason.title}</h3>
              <p className="mt-2 text-muted">{reason.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="cta-heading" className="container-page mt-24">
        <div className="rounded-lg bg-ink px-6 py-10 text-bg sm:px-10 sm:py-14">
          <h2 id="cta-heading" className="max-w-[24ch] text-[1.75rem] font-semibold leading-tight sm:text-[2.25rem]">
            Tell us what you need to monitor, build or fix.
          </h2>
          <p className="mt-4 max-w-[56ch] opacity-85">
            Write to us about ColdChain OS, a partnership or an investment. We reply by e-mail.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href="/contact" className="btn bg-bg text-ink hover:bg-band focus-visible:outline-bg">
              Contact us
            </Link>
            <a href={`mailto:${company.email}`} className="font-medium underline underline-offset-4 focus-visible:outline-bg">
              {company.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
