export const site = {
  name: "LexConv",
  url: "https://lexconv.com",
  description:
    "LexConv is a venture studio that builds and runs software and hardware businesses. Our live product, ColdChain OS, monitors cold storages and pharma and food warehouses.",
  legalUpdated: "27 November 2026",
};

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/terms", label: "Terms and conditions" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/refunds", label: "Cancellation and refunds" },
  { href: "/delivery", label: "Delivery policy" },
] as const;
