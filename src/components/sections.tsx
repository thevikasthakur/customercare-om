import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import type { FaqItem, Section } from "@/data/types";

export function PageHero({
  badge,
  title,
  sub,
  cta = true,
}: {
  badge?: string;
  title: string;
  sub?: string;
  cta?: boolean;
}) {
  return (
    <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {badge && <span className="eyebrow inline-block mb-6">{badge}</span>}
        <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl leading-[1.06]">{title}</h1>
        {sub && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {sub}
          </p>
        )}
        {cta && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-a-demo/"
              className="inline-flex h-11 items-center gap-2 border border-line-strong px-7 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function ProseSections({ sections }: { sections: Section[] }) {
  return (
    <div className="prose-vox mx-auto">
      {sections.map((s, i) => (
        <div key={i}>
          {s.h && <h2>{s.h}</h2>}
          {s.p.map((para, j) => (
            <p key={j}>{para}</p>
          ))}
          {s.bullets && (
            <ul>
              {s.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Check className="h-5 w-5 text-lime shrink-0 mt-0.5" aria-hidden />
          <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Faq({
  items,
  title = "FAQ",
  sub = "The questions Omani teams ask us most often.",
}: {
  items: FaqItem[];
  title?: string;
  sub?: string;
}) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl">{title}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{sub}</p>
          <div className="mt-10 divide-y divide-[rgba(212,255,79,0.18)] border-t border-b border-[rgba(212,255,79,0.18)]">
            {items.map((f, i) => (
              <details key={f.q} className="group py-5" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between text-base md:text-lg font-medium list-none">
                  {f.q}
                  <span className="ml-4 text-lime transition-transform group-open:rotate-45 text-2xl leading-none shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </p>
                {f.link && (
                  <a
                    href={f.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-lime hover:underline underline-offset-4"
                  >
                    {f.link.label}
                    <span aria-hidden>&#8599;</span>
                  </a>
                )}
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section
      className="border-t border-border py-20 md:py-28"
      style={{
        backgroundImage:
          "radial-gradient(70% 45% at 50% 118%, rgba(212,255,79,0.45) 0%, rgba(212,255,79,0) 60%), linear-gradient(180deg, #0A0B0F 0%, #161C03 55%, #3A4A08 88%, #71900F 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl md:text-6xl">
          Put an end to hold music <span className="accent-italic">and IVR menus</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Your first 100 minutes of customer conversations are free, and your
          customer data stays inside Oman.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/book-a-demo/"
            className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
          >
            Book a Demo <span aria-hidden>+</span>
          </Link>
        </div>
        <p className="mt-7 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-lime" aria-hidden />
          Oman Personal Data Protection Law compliant · Data never leaves the Sultanate
        </p>
      </div>
    </section>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-6 py-8 text-center">
      <h2 className="text-4xl md:text-5xl">{value}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function CardGrid({
  items,
  cols = 3,
}: {
  items: { title: string; desc: string; href?: string }[];
  cols?: 2 | 3 | 4;
}) {
  const colCls =
    cols === 2 ? "sm:grid-cols-2" : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-px border border-border bg-border ${colCls}`}>
      {items.map((it) => {
        const inner = (
          <>
            <h3 className="text-base font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </>
        );
        return it.href ? (
          <Link
            key={it.title}
            href={it.href}
            className="bg-ink-2 p-6 hover:bg-ink-3 transition-colors"
          >
            {inner}
          </Link>
        ) : (
          <div key={it.title} className="bg-ink-2 p-6">
            {inner}
          </div>
        );
      })}
    </div>
  );
}
