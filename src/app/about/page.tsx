import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { company, show } from "@/content/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About us",
  description:
    "LexConv is a venture studio founded by Subham Praharaj. We build and run software and hardware businesses, through a UK company and an Indian sole proprietorship.",
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
          Our companies
        </h2>
        <p className="mt-3 max-w-[60ch] text-muted">
          LexConv operates through two entities. Which one you deal with depends on where your
          business is.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border border-line bg-surface p-6 sm:p-8">
            <h3 className="text-xl font-semibold">United Kingdom</h3>
            <p className="mt-2 text-muted">For customers outside India. Prices in US dollars.</p>
            <dl className="mt-5 space-y-3 text-[0.9375rem]">
              <div>
                <dt className="text-muted">Company name</dt>
                <dd className="font-medium">{show(company.uk.legalName)}</dd>
              </div>
              <div>
                <dt className="text-muted">Registered in</dt>
                <dd className="font-medium">{show(company.uk.registeredIn)}</dd>
              </div>
              <div>
                <dt className="text-muted">Company number</dt>
                <dd className="font-medium tabular-nums">{show(company.uk.companyNumber)}</dd>
              </div>
              <div>
                <dt className="text-muted">Registered office</dt>
                <dd className="font-medium">{show(company.uk.registeredOffice)}</dd>
              </div>
            </dl>
          </article>
          <article className="rounded-lg border border-line bg-surface p-6 sm:p-8">
            <h3 className="text-xl font-semibold">India</h3>
            <p className="mt-2 text-muted">For customers in India. Prices in rupees.</p>
            <dl className="mt-5 space-y-3 text-[0.9375rem]">
              <div>
                <dt className="text-muted">Trade name</dt>
                <dd className="font-medium">{show(company.india.tradeName)}</dd>
              </div>
              <div>
                <dt className="text-muted">Type</dt>
                <dd className="font-medium">Sole proprietorship</dd>
              </div>
              <div>
                <dt className="text-muted">Proprietor</dt>
                <dd className="font-medium">{company.india.proprietor}</dd>
              </div>
              <div>
                <dt className="text-muted">Address</dt>
                <dd className="font-medium">{show(company.india.address)}</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>
    </>
  );
}
