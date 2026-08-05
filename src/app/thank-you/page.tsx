import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <section className="pt-44 pb-24 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden />
        <h1 className="mt-6 text-4xl font-bold tracking-tight">Thank you</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We&rsquo;ve received your message and will get back to you within one
          business day, Sunday to Thursday.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-md border border-input px-8 text-sm font-medium hover:bg-accent transition-colors"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
