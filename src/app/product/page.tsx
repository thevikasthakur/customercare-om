import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Omani Arabic AI Customer Care",
  robots: { index: false },
  other: { refresh: "0;url=/products/omani-arabic-ai-customer-care/" },
};

export default function ProductRedirect() {
  return (
    <section className="pt-44 pb-24 text-center">
      <div className="mx-auto max-w-xl px-4">
        <h1 className="text-3xl">This page has moved</h1>
        <p className="mt-4 text-muted-foreground">
          Our voice product now lives at{" "}
          <Link
            href="/products/omani-arabic-ai-customer-care/"
            className="text-lime underline underline-offset-4"
          >
            Omani Arabic AI Customer Care
          </Link>
          . You will be redirected automatically.
        </p>
      </div>
    </section>
  );
}
