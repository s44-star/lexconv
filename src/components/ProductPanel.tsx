import type { Product } from "@/content/products";

/** Product summary used on the Home page. */
export function ProductPanel({ product }: { product: Product }) {
  return (
    <article className="grid gap-8 rounded-lg border border-line bg-surface p-6 sm:p-8 md:grid-cols-[1.5fr_1fr] md:gap-12">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-band px-2.5 py-0.5 text-sm font-medium">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            {product.status}
          </span>
        </div>
        <p className="mt-3 text-lg">{product.summary}</p>
        <p className="mt-3 max-w-[60ch] text-muted">{product.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={product.url} className="btn btn-primary">
            Visit {product.name}
          </a>
          <a href={product.pricingUrl} className="btn btn-secondary">
            See {product.name} pricing
          </a>
        </div>
      </div>

      <dl className="space-y-4 self-start border-t border-line pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
        <div>
          <dt className="text-sm text-muted">In India</dt>
          <dd className="text-lg font-semibold tabular-nums">
            From {product.fromPrice.inr} a month
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted">Everywhere else</dt>
          <dd className="text-lg font-semibold tabular-nums">
            From {product.fromPrice.usd} a month
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted">Setup and trial</dt>
          <dd>
            One-time setup from {product.fromPrice.inrSetup} or {product.fromPrice.usdSetup}.{" "}
            {product.trial}
          </dd>
        </div>
      </dl>
    </article>
  );
}
