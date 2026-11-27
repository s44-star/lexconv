import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes: Array<{ path: string; priority: number }> = [
  { path: "", priority: 1 },
  { path: "/products", priority: 0.9 },
  { path: "/pricing", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/terms", priority: 0.3 },
  { path: "/privacy", priority: 0.3 },
  { path: "/refunds", priority: 0.3 },
  { path: "/delivery", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
