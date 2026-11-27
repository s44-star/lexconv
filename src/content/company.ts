/**
 * Business and legal details shown in the footer, About page and legal pages.
 *
 * LexConv is the trade name of a sole proprietorship registered in India.
 * There is no separate company in any other country. If you register one
 * later (for example a Pvt Ltd or OPC), update these details and the legal pages.
 *
 * ⚠️  Fill in every field marked `null` before going live.
 * Razorpay checks that the business name and address on the site match your KYC.
 * A production build on Vercel stops with an error while any required field is
 * still null, so the live site can never show a blank or "to be added".
 */

export type CompanyDetails = {
  brand: string;
  founder: string;
  email: string;
  website: string;
  /** Trade name of the sole proprietorship, as on your registration and Razorpay KYC */
  tradeName: string;
  /** Legal form, shown on the site */
  legalForm: string;
  proprietor: string;
  /** Registered business address in India, one line (must match Razorpay KYC) */
  address: string | null;
};

export const company: CompanyDetails = {
  brand: "LexConv",
  founder: "Subham Praharaj",
  email: "ceo@lexconv.com",
  website: "https://lexconv.com",
  tradeName: "LexConv",
  legalForm: "a sole proprietorship registered in India",
  proprietor: "Subham Praharaj",
  address: null,
};

const PENDING = "[to be added]";

/** Returns the value, or a visible placeholder in previews. */
export function show(value: string | null): string {
  return value ?? PENDING;
}

export function missingCompanyFields(): string[] {
  const missing: string[] = [];
  if (company.address === null) missing.push("address");
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
