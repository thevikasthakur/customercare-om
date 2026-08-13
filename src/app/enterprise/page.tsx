import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cpu, FileCheck2, Landmark, Lock, Rocket, Server, ShieldCheck } from "lucide-react";
import { CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Enterprise",
  description:
    "Enterprise customer care engineered in Oman, dedicated in-Oman infrastructure, Personal Data Protection Law data-processing agreements, and 99.99% uptime SLAs.",
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
    desc: "Dialect-aware speech and language models tuned on Gulf and Omani audio, serving sub-300ms responses at 10,000+ concurrent calls.",
  },
  {
    icon: Rocket,
    title: "Delivered by our Muscat team",
    desc: "We design the call flows, migrate the knowledge bases, and run hypercare, so your agents go live without pulling your engineers.",
  },
];

const workingCards = [
  {
    img: "/media/ent-work-1.avif",
    title: "Your CRM, billing and telephony, wired in",
    desc: "CRM, ticketing, billing, and calendars, wired for real-time read and write during the call. We also coordinate the SIP trunk from Omantel or Ooredoo that your voice channels run on, with residency controls that keep data in Oman.",
  },
  {
    img: "/media/ent-work-2.avif",
    title: "Service policies your team can approve",
    desc: "Your policies, your tone, your escalation rules, captured in flows your team can read, edit, and approve before a single caller hears them.",
  },
  {
    img: "/media/ent-work-3.avif",
    title: "Rehearsed in all nine languages first",
    desc: "Your agents work through realistic caller scenarios in every language you serve, and we measure accuracy, compliance wording, and edge-case handling before anyone rings in.",
  },
  {
    img: "/media/ent-work-4.avif",
    title: "Rolled out in phases, tuned every week",
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
    desc: "Branded voices recorded with Omani voice talent, exclusive to your organisation: a formal register for ministries, a warmer one for retail.",
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
    desc: "Role-based access, full audit trails, and retention schedules you control. Recordings, transcripts and contact records all stay on infrastructure inside Oman, governed by the Personal Data Protection Law.",
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
    title: "Redaction for health and payment details",
    desc: "Automatic redaction of names, card numbers, and sensitive details from transcripts, aligned with Ministry of Health privacy expectations and Central Bank of Oman customer-communication rules.",
  },
];

export default function EnterprisePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div>
              <h1 className="text-4xl md:text-6xl leading-[1.06]">
                Enterprise customer care,{" "}
                <span className="accent-italic">engineered in Oman</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Banks, ministries, utilities, and national brands run on
                CustomerCare.OM. Scale from one line to a million calls without your
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
          </div>
        </div>
      </section>

      {/* ── Infrastructure cards ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl">
              Capacity, models and people, <span className="accent-italic">all inside Oman</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Single-tenant hardware in the Sultanate, speech models tuned on Gulf
              dialects, and a delivery team in Muscat that owns the rollout with you.
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

      {/* ── Four steps from kickoff to live customer calls ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <h2 className="max-w-md text-3xl md:text-5xl">
              Four steps from kickoff to <span className="accent-italic">live customer calls</span>
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Telephony, integrations, call flows and rehearsal all sit with us, and
              most enterprises are taking live customer calls inside a month.
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

      {/* ── Built for Oman, down to the voice ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <h2 className="max-w-md text-3xl md:text-5xl">
              Built for Oman,{" "}
              <span className="accent-italic">down to the voice</span>
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              Omani voice talent, local legal agreements, and Arabic quality reviews:
              things a product designed for another market cannot offer you.
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
              Every layer of CustomerCare.OM is audited and assessed against{" "}
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

      {/* ── Where your call data lives ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl">
              Where your call data lives, <span className="accent-italic">and who can touch it</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Residency, access control, redaction and independent testing, set out
              plainly so your risk and compliance teams can sign off quickly.
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
