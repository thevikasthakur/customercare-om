import Link from "next/link";
import { PhoneCall, ShieldCheck } from "lucide-react";
import { footerNav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-7">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <PhoneCall className="h-6 w-6 text-lime" aria-hidden />
              <span className="text-lg font-bold tracking-tight">{site.name}</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              {site.tagline}. Customer Service Voice AI Agents that handle
              customer queries in Omani Arabic and eight more languages, across
              phone, web chat, WhatsApp, and email, from data centres inside
              the Sultanate.
            </p>
            <div className="mt-5 flex items-start gap-2 border border-border p-3 max-w-xs bg-ink-2">
              <ShieldCheck className="h-5 w-5 shrink-0 text-lime mt-0.5" aria-hidden />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Compliant with Oman&rsquo;s Personal Data Protection Law (Royal Decree
                6/2022, in force 2023). Zero customer data ever leaves Oman.
              </p>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">{site.address}</p>
          </div>
          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Customer Care Technologies LLC, Muscat, Sultanate
            of Oman. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Proudly hosted in Oman · {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
