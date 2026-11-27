import Link from "next/link";
import { company, show } from "@/content/company";
import { legalNav, site } from "@/content/site";

type Props = {
  title: string;
  intro: string;
  path: string;
  children: React.ReactNode;
};

export function LegalPage({ title, intro, path, children }: Props) {
  return (
    <div className="container-page pt-14 sm:pt-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_16rem] lg:gap-16">
        <article>
          <h1 className="text-[2.25rem] font-semibold leading-[1.08] sm:text-[3rem]">{title}</h1>
          <p className="mt-4 max-w-[64ch] text-lg text-muted">{intro}</p>
          <p className="mt-4 text-sm text-muted">Last updated: {site.legalUpdated}</p>
          <div className="legal mt-8 max-w-[68ch]">{children}</div>
        </article>

        <nav aria-label="Legal pages" className="lg:pt-24">
          <p className="mb-3 font-semibold">Legal pages</p>
          <ul className="space-y-1 text-[0.9375rem]">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.href === path ? "page" : undefined}
                  className="inline-flex min-h-9 items-center text-muted hover:text-ink aria-[current=page]:font-semibold aria-[current=page]:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

/** Says who "we" are. Used near the top of each legal page. */
export function Entities() {
  return (
    <p>
      <strong>{company.tradeName}</strong>, {company.legalForm} and owned by {company.proprietor},
      with its address at {show(company.address)}. We serve customers in India and in other
      countries.
    </p>
  );
}
