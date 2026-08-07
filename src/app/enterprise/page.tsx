import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  FileCheck2,
  Landmark,
  Lock,
  Play,
  Rocket,
  Server,
  ShieldCheck,
} from "lucide-react";
import { site } from "@/data/site";
import { CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Enterprise",
  description:
    "Handle every conversation perfectly at national scale, dedicated in-Oman infrastructure, Personal Data Protection Law data-processing agreements, and 99.99% uptime SLAs.",
};

const infraCards = [
  {
    icon: Server,
    title: "Dedicated infrastructure",
    desc: "Single-tenant capacity inside the Sultanate, with optional private connectivity to your data centre and burst headroom for national campaigns.",
  },
  {
    icon: Cpu,
    title: "A model stack built for Oman",
    desc: "Dialect-aware speech and language models tuned on regional speech, serving sub-300ms responses at 10,000+ concurrent calls.",
  },
  {
    icon: Rocket,
    title: "Built and deployed for you",
    desc: "Our Muscat team designs call flows, migrates knowledge bases, and runs hypercare, your agents go live without pulling your engineers.",
  },
];

const workingCards = [
  {
    img: "/media/ent-work-1.avif",
    title: "We connect to your systems",
    desc: "CRM, ticketing, billing, and calendars, wired for real-time read and write during the call. We also coordinate the SIP trunk from Omantel or Ooredoo that your voice channels run on, with residency controls that keep data in Oman.",
  },
  {
    img: "/media/ent-work-2.avif",
    title: "We build your call flows",
    desc: "Your policies, your tone, your escalation rules, captured in flows your team can read, edit, and approve before a single caller hears them.",
  },
  {
    img: "/media/ent-work-3.avif",
    title: "We simulate thousands of conversations",
    desc: "Before launch, agents face simulated callers in all nine languages, measuring accuracy, compliance wording, and edge-case handling.",
  },
  {
    img: "/media/ent-work-4.avif",
    title: "We go live and save you thousands",
    desc: "Phased rollout with live monitoring, weekly optimisation, and quarterly reviews against the metrics your leadership actually tracks.",
  },
];

function WorkingCard({ c }: { c: (typeof workingCards)[number] }) {
  return (
    <div className="overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
      <div className="h-56 md:h-[22.4rem] overflow-clip">
        <Image
          src={c.img}
          alt=""
          width={1200}
          height={720}
          className="h-full w-full object-cover"
          aria-hidden
        />
      </div>
      <div className="flex flex-col items-start gap-2.5 p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-medium text-neutral-900">{c.title}</h3>
        <p className="text-sm leading-[1.4] text-neutral-500">{c.desc}</p>
      </div>
    </div>
  );
}

const exclusiveFeatures = [
  {
    title: "Custom Omani voices",
    desc: "Branded voices recorded with Omani voice talent, exclusive to your organisation, formal register for ministries, warm for retail.",
  },
  {
    title: "Personal Data Protection Law agreements & on-prem archival",
    desc: "Signed data-processing agreements under Royal Decree 6/2022, with optional on-premises transcript archival for regulated entities.",
  },
  {
    title: "Human-in-the-loop QA in Arabic",
    desc: "Native-speaker reviewers continuously grade live conversations across dialects, feeding corrections back into your agents every week.",
  },
];

const protectRows = [
  {
    img: "/media/ent-protect-1.svg",
    title: "Data governance",
    desc: "Role-based access, full audit trails, and retention schedules you control. Every byte of customer data, recordings, transcripts, contact records, stays on infrastructure inside Oman, governed by the Personal Data Protection Law.",
  },
  {
    img: "/media/ent-protect-2.svg",
    title: "External testing",
    desc: "Independent security assessments and penetration tests run annually, with findings and remediation timelines shared with your security team under NDA.",
  },
  {
    img: "/media/ent-protect-3.svg",
    title: "On-premises options",
    desc: "For ministries and banks with strict perimeter requirements, transcript archives and analytics exports can live entirely within your own data centre.",
  },
  {
    img: "/media/ent-protect-4.svg",
    title: "Secure for healthcare & payments",
    desc: "Automatic redaction of names, card numbers, and sensitive details from transcripts, aligned with Ministry of Health privacy expectations and Central Bank of Oman customer-communication rules.",
  },
];

export default function EnterprisePage() {
  return (
    <>
      {/* ── Hero: text left, video card right ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h1 className="text-4xl md:text-6xl leading-[1.06]">
                Handle every conversation{" "}
                <span className="accent-italic">perfectly</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Banks, ministries, utilities, and national brands run on
                AI Customer Care. Scale from one line to a million calls without your
                data ever leaving Omani soil.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/book-a-demo/"
                  className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
                >
                  Book a Demo <span aria-hidden>+</span>
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex h-11 items-center border border-line-strong px-7 text-sm font-medium hover:bg-ink-3 transition-colors"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[1.25rem] border border-line-strong">
              <Image
                src="/media/testimonial-poster.avif"
                alt="Enterprise customer story video (placeholder visual)"
                width={1280}
                height={860}
                className="w-full object-cover opacity-90"
              />
              <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-ink/90 border border-line-strong">
                <Play className="h-5 w-5 text-lime translate-x-0.5" aria-hidden />
              </span>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-5">
                <p className="text-sm font-semibold">Operations Director</p>
                <p className="text-xs text-muted-foreground">
                  National automotive group, Muscat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Infrastructure cards ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl">
              Infrastructure you can <span className="accent-italic">scale with</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              AI Customer Care combines dedicated capacity, a Gulf-tuned model stack, and
              a delivery team in Muscat, built for deployments that cannot fail.
            </p>
          </div>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {infraCards.map((c) => (
              <div key={c.title} className="bg-ink-2 p-8">
                <c.icon className="h-6 w-6 text-lime" aria-hidden />
                <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What working with AI Customer Care looks like ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <h2 className="max-w-md text-3xl md:text-5xl">
              What working with <span className="accent-italic">AI Customer Care</span> looks like
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Our team handles everything from your telephone stack to your
              CRM integration, most enterprises go live inside a month.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-[1fr_1.5fr]">
              <WorkingCard c={workingCards[0]} />
              <WorkingCard c={workingCards[1]} />
            </div>
            <div className="grid gap-4 md:grid-cols-[1.5fr_1fr]">
              <WorkingCard c={workingCards[2]} />
              <WorkingCard c={workingCards[3]} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features you won't find anywhere else ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <h2 className="max-w-md text-3xl md:text-5xl">
              Features you won&rsquo;t find{" "}
              <span className="accent-italic">anywhere else</span>
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              The parts of AI Customer Care that only exist because we build for Oman
              first, not as an afterthought to a US product.
            </p>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {exclusiveFeatures.map((c) => (
              <div key={c.title} className="bg-ink-2 p-8">
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security band ── */}
      <section
        className="hatch-gutters border-b border-border py-14"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #161C03 0%, #10140A 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <h2 className="max-w-xl text-2xl md:text-4xl">
              Scale with security. AI Customer Care is audited and assessed against{" "}
              <span className="accent-italic">the standards that matter in Oman</span>.
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Landmark, label: "Oman Personal Data Protection Law, RD 6/2022" },
                { icon: ShieldCheck, label: "ISO 27001-aligned ISMS" },
                { icon: Lock, label: "Encrypted in transit & at rest" },
                { icon: FileCheck2, label: "Independent annual audits" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2.5 border border-line-strong bg-ink-2 px-4 py-3 text-xs font-mono uppercase tracking-[0.08em] text-muted-foreground"
                >
                  <b.icon className="h-4 w-4 shrink-0 text-lime" aria-hidden />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How we protect your data ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl">
              How we <span className="accent-italic">protect your data</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Learn how AI Customer Care safeguards your data with enterprise-grade
              security and Personal Data Protection Law compliance.
            </p>
          </div>
          <div className="space-y-14">
            {protectRows.map((r, i) => (
              <div
                key={r.title}
                className={`grid items-center gap-8 md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="rounded-[1.25rem] border border-black/10 bg-white p-8 shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
                  <Image
                    src={r.img}
                    alt=""
                    width={640}
                    height={420}
                    className="mx-auto h-56 w-auto"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
