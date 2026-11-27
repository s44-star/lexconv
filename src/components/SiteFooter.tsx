import Link from "next/link";
import { company, show } from "@/content/company";
import { legalNav, nav } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-12 text-[0.9375rem] md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-semibold">LexConv</p>
          <p className="max-w-md text-muted">
            {show(company.uk.legalName)} is registered in {show(company.uk.registeredIn)}, company
            number {show(company.uk.companyNumber)}. Registered office: {show(company.uk.registeredOffice)}.
          </p>
          <p className="max-w-md text-muted">
            In India, LexConv trades through {show(company.india.tradeName)}, a sole proprietorship
            owned by {company.india.proprietor}. Address: {show(company.india.address)}.
          </p>
          <p>
            <a className="link" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 font-semibold">Company</p>
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-9 items-center text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <p className="mb-3 font-semibold">Legal</p>
          <ul className="space-y-1">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-9 items-center text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="container-page py-5 text-sm text-muted">© {year} LexConv. All rights reserved.</p>
      </div>
    </footer>
  );
}
