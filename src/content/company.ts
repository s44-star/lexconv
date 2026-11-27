/**
 * Company and legal details shown in the footer, About page and legal pages.
 *
 * ⚠️  Fill in every field marked `null` before going live.
 * UK law requires a company's website to show its registered name, company
 * number, place of registration and registered office address. Razorpay also
 * checks that the business name and address on the site match your KYC.
 *
 * A production build on Vercel stops with an error while any required field is
 * still null, so the live site can never show a blank or "to be added".
 */

export type CompanyDetails = {
  brand: string;
  founder: string;
  email: string;
  website: string;
  uk: {
    /** Exact name as on Companies House, e.g. "LexConv Ltd" */
    legalName: string | null;
    /** 8-character Companies House number */
    companyNumber: string | null;
    /** "England and Wales", "Scotland" or "Northern Ireland" */
    registeredIn: string | null;
    /** Registered office address, one line */
    registeredOffice: string | null;
  };
  india: {
    /** Trade name of the sole proprietorship, as on your registration and Razorpay KYC */
    tradeName: string | null;
    proprietor: string;
    /** Business address in India, one line (must match Razorpay KYC) */
    address: string | null;
    /** City/state whose courts hear disputes with Indian customers, e.g. "Bhubaneswar, Odisha" */
    jurisdiction: string | null;
  };
};

export const company: CompanyDetails = {
  brand: "LexConv",
  founder: "Subham Praharaj",
  email: "ceo@lexconv.com",
  website: "https://lexconv.com",
  uk: {
    legalName: null,
    companyNumber: null,
    registeredIn: null,
    registeredOffice: null,
  },
  india: {
    tradeName: null,
    proprietor: "Subham Praharaj",
    address: null,
    jurisdiction: null,
  },
};

const PENDING = "[to be added]";

/** Returns the value, or a visible placeholder in previews. */
export function show(value: string | null): string {
  return value ?? PENDING;
}

export function missingCompanyFields(): string[] {
  const missing: string[] = [];
  for (const [key, value] of Object.entries(company.uk)) {
    if (value === null) missing.push(`uk.${key}`);
  }
  for (const [key, value] of Object.entries(company.india)) {
    if (value === null) missing.push(`india.${key}`);
  }
  return missing;
}

/** Called from the root layout: blocks a production build with missing details. */
export function assertCompanyDetailsForProduction(): void {
  if (process.env.VERCEL_ENV !== "production") return;
  const missing = missingCompanyFields();
  if (missing.length > 0) {
    throw new Error(
      `Company details missing in src/content/company.ts: ${missing.join(", ")}. ` +
        "Fill them in before deploying to production.",
    );
  }
}
