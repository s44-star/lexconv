import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { products } from "@/content/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Products",
  description:
    "ColdChain OS monitors temperature and humidity in cold storages and in pharma and food warehouses, with sensors, instant alerts, incident records and audit-ready reports.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageIntro title="Products">
        <p>
          Each LexConv product is run as its own business, with its own website and pricing. Here is
          what each one does and who it is for.
        </p>
      </PageIntro>

      {products.map((product) => (
        <section
          key={product.slug}
          id={product.slug}
          aria-labelledby={`${product.slug}-heading`}
          className="container-page mt-14 scroll-mt-6"
        >
          <div className="rounded-lg border border-line bg-surface p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <h2 id={`${product.slug}-heading`} className="text-[1.75rem] font-semibold sm:text-[2.25rem]">
                {product.name}
              </h2>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-band px-2.5 py-0.5 text-sm font-medium">
                <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
                {product.status}
              </span>
            </div>
            <p className="mt-3 max-w-[60ch] text-lg">{product.summary}</p>
            <p className="mt-3 max-w-[60ch] text-muted">{product.description}</p>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold">What it does</h3>
                <ul className="mt-3 space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.6em] h-0.5 w-3 shrink-0 bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Who it is for</h3>
                <ul className="mt-3 space-y-2">
                  {product.audience.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.6em] h-0.5 w-3 shrink-0 bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold">Plans</h3>
              <p className="mt-1 text-muted">
                Monthly prices. {product.trial} Larger sites can ask for an Enterprise plan.
              </p>
              <div className="mt-4 overflow-x-auto rounded-md border border-line">
                <table className="w-full text-left text-[0.9375rem]">
                  <caption className="sr-only">{product.name} plans and monthly prices</caption>
                  <thead className="bg-bg">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">Plan</th>
                      <th scope="col" className="px-4 py-3 font-semibold">India</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Elsewhere</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.plans.map((plan) => (
                      <tr key={plan.name} className="border-t border-line align-top">
                        <th scope="row" className="px-4 py-3 font-semibold">
                          {plan.name}
                          <span className="block text-sm font-normal text-muted">{plan.limits}</span>
                        </th>
                        <td className="px-4 py-3 tabular-nums">
                          {plan.inr.monthly}
                          <span className="block text-sm text-muted">+ {plan.inr.setup} setup</span>
                        </td>
                        <td className="px-4 py-3 tabular-nums">
                          {plan.usd.monthly}
                          <span className="block text-sm text-muted">+ {plan.usd.setup} setup</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={product.url} className="btn btn-primary">
                Visit {product.name}
              </a>
              <a href={product.pricingUrl} className="btn btn-secondary">
                Full pricing and yearly plans
              </a>
            </div>
          </div>
        </section>
      ))}

      <section aria-labelledby="next-heading" className="container-page mt-16">
        <h2 id="next-heading" className="text-xl font-semibold">
          In development
        </h2>
        <p className="mt-2 max-w-[60ch] text-muted">
          We are building more products in logistics, compliance and agritech. We list a product here
          only once customers can use it. If you want to talk about an early pilot,{" "}
          <Link href="/contact" className="link">
            contact us
          </Link>
          .
        </p>
      </section>
    </>
  );
}
