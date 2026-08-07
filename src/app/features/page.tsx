import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  BarChart3,
  Globe2,
  Mail,
  MessageSquare,
  Mic,
  PhoneCall,
} from "lucide-react";
import { features } from "@/data/features";
import { site } from "@/data/site";
import ContextContinuity from "@/components/ContextContinuity";
import { CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything an enterprise customer-service line needs, ready on day one: nine languages across five channels, escalation, analytics, and Personal Data Protection Law compliance built in.",
};

const stats = [
  { v: "<300ms", l: "To first word" },
  { v: "9", l: "Languages understood" },
  { v: "5", l: "Channels, one memory" },
  { v: "100%", l: "Data resident in Oman" },
];

const channels = [
  { icon: PhoneCall, label: "Phone" },
  { icon: Globe2, label: "Web chat" },
  { icon: Mic, label: "Web voice" },
  { icon: MessageSquare, label: "WhatsApp" },
  { icon: Mail, label: "Email" },
];

const bySlug = Object.fromEntries(features.map((f) => [f.slug, f]));

const pillars: { eyebrow: string; title: string; accent: string; sub: string; slugs: string[]; extra?: { label: string; href: string } }[] = [
  {
    eyebrow: "Build and train",
    title: "An agent that knows",
    accent: "your business.",
    sub: "Ground every answer in your prices, policies, and tone before a single customer hears it.",
    slugs: ["knowledge-base", "ai-talk-block", "ai-workflow-builder", "ai-agent-voices"],
  },
  {
    eyebrow: "Operate",
    title: "Every query handled,",
    accent: "every edge case caught.",
    sub: "Escalation, warm transfers, and full visibility over what your agents said and did.",
    slugs: ["warm-transfers", "smart-call-escalation-with-triggers", "call-history-monitoring"],
  },
  {
    eyebrow: "Reach out",
    title: "Follow-ups that",
    accent: "send themselves.",
    sub: "Confirmations, reminders, and campaigns across SMS, email, and outbound voice.",
    slugs: ["outbound-sms", "outbound-ai-email"],
    extra: { label: "Outbound Calling AI Agents", href: "/products/outbound-calling-ai-agents/" },
  },
  {
    eyebrow: "Measure and integrate",
    title: "Numbers your leadership",
    accent: "can act on.",
    sub: "Analytics on every conversation, wired into the systems your teams already run.",
    slugs: ["call-analytics-dashboard", "rest-apis-and-webhooks"],
    extra: { label: "50+ integrations", href: "/integration/" },
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Features</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
            <span className="text-lime">Everything an enterprise line needs.</span>
            <br />
            Ready on day one.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Customer Service Voice AI Agents with the operations, outreach, and
            reporting around them. Nothing to build, no experts to hire.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-a-demo/"
              className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
            >
              Book a Demo <span aria-hidden>+</span>
            </Link>
            <Link
              href={`${site.appUrl}/sign-up`}
              className="inline-flex h-11 items-center border border-line-strong px-7 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              Start Free
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-[rgba(212,255,79,0.28)] md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="px-6 py-8 text-center">
                <p className="font-display text-3xl md:text-4xl font-medium tracking-tight">{s.v}</p>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Channels row ── */}
      <section className="border-b border-border py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Answer</p>
              <h2 className="mt-3 max-w-xl text-3xl md:text-4xl">
                Five channels. <span className="text-lime">One agent, one memory.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Customers are recognised across channels, agents, and visits, so
              a chat can become a call and finish by email without anyone
              repeating themselves.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {channels.map((c) => (
              <div key={c.label} className="border-t border-line-strong pt-5 text-center">
                <c.icon className="mx-auto h-6 w-6 text-lime" aria-hidden />
                <p className="mt-3 text-sm font-medium">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      {pillars.map((p) => (
        <section key={p.eyebrow} className="border-b border-border py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">{p.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl text-3xl md:text-5xl">
              {p.title} <span className="text-lime">{p.accent}</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">{p.sub}</p>
            <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {p.slugs.map((slug) => {
                const f = bySlug[slug];
                if (!f) return null;
                return (
                  <Link key={slug} href={`/features/${slug}/`} className="group border-t border-line-strong pt-5">
                    <h3 className="text-base font-semibold group-hover:text-lime transition-colors">
                      {f.name}
                    </h3>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {f.short}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-lime">
                      Learn more <ArrowRight className="h-3 w-3" aria-hidden />
                    </span>
                  </Link>
                );
              })}
              {p.extra && (
                <Link href={p.extra.href} className="group border-t border-lime/50 pt-5">
                  <h3 className="text-base font-semibold text-lime">{p.extra.label}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                    Part of the wider AI Customer Care service. See the dedicated page
                    for the full picture.
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-lime">
                    Explore <ArrowRight className="h-3 w-3" aria-hidden />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ── Context continuity ── */}
      <ContextContinuity />

      {/* ── Compliance strip ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <h2 className="max-w-xl text-2xl md:text-4xl">
              And underneath it all:{" "}
              <span className="accent-italic">Omani data residency</span>, audit
              trails, and the Personal Data Protection Law, built in.
            </h2>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/guideline/oman/"
                className="inline-flex h-11 items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                <BarChart3 className="h-4 w-4 text-lime" aria-hidden /> Read the Oman guide
              </Link>
              <Link
                href="/enterprise/"
                className="inline-flex h-11 items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                <AudioLines className="h-4 w-4 text-lime" aria-hidden /> Enterprise security
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
