import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Demo Confirmed",
  robots: { index: false },
};

export default function DemoConfirmedPage() {
  return (
    <section className="pt-44 pb-24 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl">
        <CalendarCheck className="mx-auto h-12 w-12 text-primary" aria-hidden />
        <h1 className="mt-6 text-4xl font-bold tracking-tight">Your demo is confirmed</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Shukran! A calendar invitation is on its way to your inbox. In the
          meantime, feel free to call our own line, it&rsquo;s answered by the same
          AI you&rsquo;re about to meet.
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
