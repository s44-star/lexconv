import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
// Vercel preview deployments load the Vercel toolbar from vercel.live.
const isPreview = process.env.VERCEL_ENV === "preview";

/**
 * Content Security Policy.
 * Next.js streams page data through small inline <script> tags, so script-src
 * needs 'unsafe-inline' unless every page is rendered per request with a nonce.
 * This site serves no user-generated content and loads no third-party scripts,
 * so we keep pages static (fast) and lock everything else down.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${isPreview ? " https://vercel.live" : ""}`,
  `style-src 'self' 'unsafe-inline'${isPreview ? " https://vercel.live" : ""}`,
  `img-src 'self' data: blob:${isPreview ? " https://vercel.live https://vercel.com" : ""}`,
  `font-src 'self'${isPreview ? " https://vercel.live https://assets.vercel.com" : ""}`,
  `connect-src 'self'${isPreview ? " https://vercel.live wss://ws-us3.pusher.com" : ""}`,
  `frame-src ${isPreview ? "https://vercel.live" : "'none'"}`,
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Two years. Deliberately without includeSubDomains, so other lexconv.com
  // subdomains (ColdChain OS, e-mail tracking) are not affected by this site.
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Old static pages from the previous site
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/refund", destination: "/refunds", permanent: true },
      { source: "/refund-policy", destination: "/refunds", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },
      { source: "/shipping", destination: "/delivery", permanent: true },
    ];
  },
};

export default nextConfig;
