import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

/** Per-page metadata with canonical URL and Open Graph tags. */
export function pageMeta({ title, description, path }: PageMetaInput): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_GB",
      url,
      title,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
