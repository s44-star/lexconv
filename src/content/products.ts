/**
 * Products shown on the Home, Products and Pricing pages.
 * Add a new product by adding an object to this list. Only list products
 * customers can actually use today.
 *
 * Prices must match the product's own pricing page.
 * ColdChain OS source: https://coldchain.lexconv.com/pricing (checked 27 Nov 2026)
 */

export type Plan = {
  name: string;
  inr: { monthly: string; yearly: string; setup: string };
  usd: { monthly: string; yearly: string; setup: string };
  limits: string;
};

export type Product = {
  slug: string;
  name: string;
  status: "Live";
  summary: string;
  description: string;
  audience: string[];
  features: string[];
  fromPrice: { inr: string; usd: string; inrSetup: string; usdSetup: string };
  trial: string;
  plans: Plan[];
  url: string;
  pricingUrl: string;
};

export const products: Product[] = [
  {
    slug: "coldchain-os",
    name: "ColdChain OS",
    status: "Live",
    summary:
      "Temperature and humidity monitoring for cold storages, and for pharma and food warehouses.",
    description:
      "Sensors in your rooms send readings to ColdChain OS. When a reading goes outside the range you set, your team gets an alert straight away. Every incident, inspection and maintenance job is recorded, so you have a clean report ready when an auditor asks.",
    audience: [
      "Cold storage operators",
      "Pharma warehouses and distributors",
      "Food warehouses and processors",
    ],
    features: [
      "Live temperature and humidity readings from sensors",
      "Instant alerts when a reading leaves the range you set",
      "Incident records with photos",
      "Maintenance schedules and inspections",
      "Audit-ready CSV and PDF reports, with a full audit trail",
    ],
    fromPrice: { inr: "₹4,999", usd: "$149", inrSetup: "₹9,999", usdSetup: "$299" },
    trial: "14-day free trial. No card needed.",
    plans: [
      {
        name: "Starter",
        inr: { monthly: "₹4,999", yearly: "₹49,990", setup: "₹9,999" },
        usd: { monthly: "$149", yearly: "$1,490", setup: "$299" },
        limits: "1 warehouse, 25 sensors, 5 users",
      },
      {
        name: "Professional",
        inr: { monthly: "₹14,999", yearly: "₹1,49,990", setup: "₹24,999" },
        usd: { monthly: "$449", yearly: "$4,490", setup: "$799" },
        limits: "5 warehouses, 150 sensors, 25 users",
      },
    ],
    url: "https://coldchain.lexconv.com",
    pricingUrl: "https://coldchain.lexconv.com/pricing",
  },
];
