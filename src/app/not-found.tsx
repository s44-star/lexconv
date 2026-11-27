import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export default function NotFound() {
  return (
    <>
      <PageIntro title="This page doesn't exist">
        <p>The link may be old or mistyped. Start from the home page or see our products.</p>
      </PageIntro>
      <div className="container-page mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Go to home page
        </Link>
        <Link href="/products" className="btn btn-secondary">
          See our products
        </Link>
      </div>
    </>
  );
}
