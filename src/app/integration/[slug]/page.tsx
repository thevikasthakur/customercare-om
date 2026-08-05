import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { integrations } from "@/data/integrations";
import { integrationLogos } from "@/data/media";
import { site } from "@/data/site";

export function generateStaticParams() {
  return integrations.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const i = integrations.find((x) => x.slug === slug);
  if (!i) return {};
  return { title: `${i.name} Integration`, description: i.short };
}

export default async function IntegrationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = integrations.find((x) => x.slug === slug);
  if (!item) notFound();
  const more = integrations.filter((x) => x.slug !== slug).slice(0, 4);

  return (
    <>
      {/* ── Breadcrumb band ── */}
      <div className="border-b border-border pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/integration/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> Integrations
          </Link>
          <Link
            href={`${site.appUrl}/sign-up`}
            className="inline-flex h-9 items-center bg-lime px-4 text-xs font-medium text-ink hover:brightness-110 transition-[filter]"
          >
            Add to Agent
          </Link>
        </div>
      </div>

      {/* ── Title band ── */}
      <section
        className="border-b border-border py-12 md:py-16"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 72px), linear-gradient(180deg, #10140A 0%, #0A0B0F 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl">{item.name}</h1>
        </div>
      </section>

      {/* ── Body: prose left, sidebar right ── */}
      <section className="border-b border-border py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
            <article>
              {item.sections.map((s, i) => (
                <div key={i} className="mb-8">
                  {s.h && (
                    <h2 className="mb-3 text-lg font-semibold text-foreground">{s.h}</h2>
                  )}
                  {s.p.map((para, j) => (
                    <p
                      key={j}
                      className="mb-4 text-sm md:text-base leading-relaxed text-muted-foreground"
                    >
                      {para}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="mb-4 space-y-2">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <h2 className="mb-3 text-lg font-semibold">
                What you can do with VoxCare + {item.name}
              </h2>
              <ul className="space-y-2.5">
                {item.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </article>

            <aside className="lg:sticky lg:top-28 h-fit space-y-5">
              <div className="rounded-[1.25rem] border border-black/10 bg-white p-6 text-center shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
                <span className="mx-auto flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-white">
                  {integrationLogos[item.slug] ? (
                    <Image
                      src={`/media/${integrationLogos[item.slug]}`}
                      alt=""
                      width={56}
                      height={56}
                      className="h-10 w-10 object-contain"
                      aria-hidden
                    />
                  ) : (
                    <span className="text-lg font-bold text-neutral-700">{item.name[0]}</span>
                  )}
                </span>
                <p className="mt-3 text-base font-semibold text-neutral-900">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.08em] text-neutral-500">
                  {item.category}
                </p>
                <Link
                  href={`${site.appUrl}/sign-up`}
                  className="mt-5 inline-flex h-10 w-full items-center justify-center bg-ink text-sm font-medium text-white hover:bg-ink-3 transition-colors"
                >
                  Connect
                </Link>
                <Link
                  href="/integration/"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900"
                >
                  Browse integrations <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
              <div className="border border-border bg-ink-2 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Links
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <Link href={site.docsUrl} className="text-lime hover:underline underline-offset-4">
                      How to configure
                    </Link>
                  </li>
                  <li>
                    <Link href={site.docsUrl} className="text-lime hover:underline underline-offset-4">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/guideline/oman/" className="text-lime hover:underline underline-offset-4">
                      Data residency in Oman
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/" className="text-lime hover:underline underline-offset-4">
                      Industry solutions
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── More integrations ── */}
      <section className="border-b border-border py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl">More integrations</h2>
            <Link
              href="/integration/"
              className="inline-flex h-10 items-center gap-2 bg-ink border border-line-strong px-5 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              View All <ArrowRight className="h-4 w-4 text-lime" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {more.map((i) => (
              <div
                key={i.slug}
                className="flex flex-col rounded-[1.25rem] border border-black/10 bg-white p-5 shadow-[0_1px_4px_rgba(12,12,13,0.05)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg border border-black/10 bg-white">
                    {integrationLogos[i.slug] ? (
                      <Image
                        src={`/media/${integrationLogos[i.slug]}`}
                        alt=""
                        width={44}
                        height={44}
                        className="h-8 w-8 object-contain"
                        aria-hidden
                      />
                    ) : (
                      <span className="text-sm font-bold text-neutral-700">{i.name[0]}</span>
                    )}
                  </span>
                  <span className="rounded-full border border-black/10 bg-neutral-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-neutral-500">
                    {i.category}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-neutral-900">{i.name}</h3>
                <Link
                  href={`/integration/${i.slug}/`}
                  className="mt-4 inline-flex h-9 w-fit items-center gap-2 bg-ink px-4 text-xs font-medium text-white hover:bg-ink-3 transition-colors"
                >
                  Learn More <ArrowRight className="h-3.5 w-3.5 text-lime" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
