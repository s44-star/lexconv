import Link from "next/link";
import { nav } from "@/content/site";
import { Logo } from "./Logo";

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4">
        <Link href="/" className="rounded-sm text-ink" aria-label="LexConv home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="-mx-2 w-full sm:mx-0 sm:w-auto">
          <ul className="flex flex-wrap items-center gap-x-1 gap-y-1 text-[0.9375rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-sm px-2 font-medium text-muted hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
