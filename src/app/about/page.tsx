import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { company, show } from "@/content/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About us",
  description:
    "LexConv is a venture studio founded by Subham Praharaj. We build and run software and hardware businesses for customers in India, the UK, the EU and beyond.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro title="About LexConv">
        <p>
          LexConv is a venture studio. We build software and hardware businesses, and we keep running
          them once they are live.
        </p>
      </PageIntro>

      <div className="container-page mt-14 grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <section aria-labelledby="studio-heading">
          <h2 id="studio-heading" className="text-[1.75rem] font-semibold">
            The studio
          </h2>
          <div className="mt-4 max-w-[60ch] space-y-4">
            <p>
              We start with a problem that costs a business real money, like stock spoiling in a cold
              room because no one noticed the temperature rise overnight. Then we build the product
              that fixes it, sell it, and support it ourselves.
            </p>
            <p>
              Our work spans compliance software, cold-chain monitoring, agritech, logistics and
              social-impact ventures. Each product gets its own name, website and pricing, so
              customers always know exactly what they are buying.
            </p>
            <p>
              Our first live product is{" "}
              <Link href="/products#coldchain-os" className="link">
                ColdChain OS
              </Link>
              , which monitors cold storages and pharma and food warehouses.
            </p>
          </div>
        </section>

        <section aria-labelledby="founder-heading">
          <h2 id="founder-heading" className="text-[1.75rem] font-semibold">
            The founder
          </h2>
          <div className="mt-4 max-w-[60ch] space-y-4">
            <p>
              {company.founder} founded LexConv and leads product, sales and partnerships. He works
              directly with every customer, partner and investor.
            </p>
            <p>
              To reach him, e-mail{" "}
              <a className="link" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              .
            </p>
          </div>
        </section>
      </div>

      <section aria-labelledby="entities-heading" className="container-page mt-20">
        <h2 id="entities-heading" className="text-[1.75rem] font-semibold">
          Our business
        </h2>
        <p className="mt-3 max-w-[60ch] text-muted">
          LexConv is {company.legalForm}. We serve customers in India in rupees, and customers in
          other countries in US dollars.
        </p>
        <article className="mt-8 max-w-xl rounded-lg border border-line bg-surface p-6 sm:p-8">
          <dl className="space-y-3 text-[0.9375rem]">
            <div>
              <dt className="text-muted">Trade name</dt>
              <dd className="font-medium">{company.tradeName}</dd>
            </div>
            <div>
              <dt className="text-muted">Type</dt>
              <dd className="font-medium">Sole proprietorship, registered in India</dd>
            </div>
            <div>
              <dt className="text-muted">Proprietor</dt>
              <dd className="font-medium">{company.proprietor}</dd>
            </div>
            <div>
              <dt className="text-muted">Address</dt>
              <dd className="font-medium">{show(company.address)}</dd>
            </div>
            <div>
              <dt className="text-muted">E-mail</dt>
              <dd className="font-medium">
                <a className="link" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </dd>
            </div>
          </dl>
        </article>
      </section>
    </>
  );
}
