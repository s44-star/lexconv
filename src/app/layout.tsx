import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { assertCompanyDetailsForProduction } from "@/content/company";
import { site } from "@/content/site";
import "./globals.css";

assertCompanyDetailsForProduction();

const instrument = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "LexConv: we build and run software and hardware businesses",
    template: "%s | LexConv",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Subham Praharaj" }],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1a22" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={instrument.variable}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only rounded-sm bg-surface px-4 py-2 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
