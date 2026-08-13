import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Database,
  Filter,
  Handshake,
  Layers,
  PhoneIncoming,
  ShieldCheck,
  Target,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import { CtaBanner, Faq } from "@/components/sections";
import LeadEnrichment from "@/components/LeadEnrichment";

export const metadata: Metadata = {
  title: "Automated Lead Pipeline",
  description:
    "The enquiry calls your customer care line already takes, turned into enriched leads, placed in a pipeline, and owned by one named person from first question to closed sale. Built for Oman, hosted in Oman.",
};

const steps = [
  {
    icon: Filter,
    title: "Buying intent separated from curiosity",
    desc: "Price, quantity, site, timeline, authority. When enough of those appear in the conversation, the call is a lead. When somebody just wants opening hours, it stays a call and nobody's pipeline is polluted.",
  },
  {
    icon: Database,
    title: "The record filled from what you already hold",
    desc: "The number is matched to your CRM, past orders and payment history come across, the branch and site are resolved, and the campaign that produced the call is stamped on it.",
  },
  {
    icon: UserPlus,
    title: "One salesperson, named on the lead",
    desc: "Territory, language, sector, or current load: you choose the rule. What the rule never produces is an enquiry parked in a team inbox where it belongs to everyone and moves with no one.",
  },
];

const ownership = [
  {
    t: "A name, not a queue",
    d: "The owner is on the record from the minute it is created, and the customer is told who they are. Nobody has to introduce themselves twice.",
  },
  {
    t: "The same owner to the end",
    d: "No round-robin reshuffle at each stage. The person who took the first enquiry carries it through quotation, negotiation, and close.",
  },
  {
    t: "Cover that is deliberate",
    d: "Leave, shift changes, and resignations trigger a handover with the full history attached, rather than a lead quietly going cold in an absent colleague's list.",
  },
  {
    t: "Chased if it stalls",
    d: "A lead with no activity against its stage gets its owner nudged, then their manager. Ageing is visible while it can still be fixed.",
  },
];

const capabilities = [
  "Enquiry detection on calls, chat, WhatsApp, and email",
  "Qualification against the criteria your sales team sets",
  "Automatic match to existing customer and account records",
  "Past orders, invoices, and payment history attached",
  "Campaign and channel attribution on every lead",
  "Lead scoring from what was said, not from guesswork",
  "Pipeline stages that mirror how your team actually sells",
  "Assignment by territory, language, sector, or workload",
  "Named ownership carried from enquiry through to close",
  "Stalled-lead nudges to the owner, then to their manager",
  "Full call recording and transcript on the lead record",
  "Two-way sync with the CRM you already run",
];

const board = [
  {
    stage: "New enquiry",
    tint: "bg-ink-2",
    cards: [
      { ref: "LD-2295", t: "Villa AC replacement, Al Mouj", meta: "Web chat · 2m ago" },
      { ref: "LD-2294", t: "Bulk uniform order, 60 staff", meta: "WhatsApp · 18m ago" },
    ],
  },
  {
    stage: "Qualified",
    tint: "bg-ink-2",
    cards: [
      { ref: "LD-2291", t: "Rooftop solar, Sohar factory", meta: "Maryam · Hot" },
      { ref: "LD-2292", t: "Blackout curtains, 42 rooms", meta: "Yusuf · Hot" },
    ],
  },
  {
    stage: "Quoted",
    tint: "bg-ink-3",
    cards: [{ ref: "LD-2288", t: "Annual AC contract, 3 towers", meta: "Nadia · Follow-up due" }],
  },
  {
    stage: "Won",
    tint: "bg-ink-3",
    cards: [{ ref: "LD-2276", t: "Kitchen fit-out, Ruwi branch", meta: "Salim · OMR 4,200" }],
  },
];

const leadFaqs = [
  {
    q: "How does it tell a real lead from a casual question?",
    a: "By the same signals a good salesperson listens for: quantity, budget, site, deadline, and whether the caller can actually decide. You set the threshold, and calls that fall short stay recorded as plain enquiries instead of entering the pipeline. A clean pipeline is the point.",
  },
  {
    q: "Where does the enrichment information come from?",
    a: "Your own systems. The caller's number is matched against your CRM and order history, so a returning customer arrives with their account, past purchases, and payment record already attached. Nothing is bought from a third-party data broker, and nothing is enriched from outside Oman.",
  },
  {
    q: "Who owns the lead once it is created?",
    a: "One named person on your team, assigned by whatever rule you choose, and they keep it from the first enquiry to the closed sale. The customer is told who is looking after them, and the lead does not get passed around between stages.",
  },
  {
    q: "Does the AI quote prices or close the sale?",
    a: "No. It answers the factual product and availability questions you have approved, and it captures everything your salesperson needs. Pricing, negotiation, and the close stay with your people, which is exactly where your customers want them.",
  },
  {
    q: "What about callers who are not ready to buy yet?",
    a: "They are kept, not discarded. A caller planning a project for next year is logged with the date they mentioned, and the follow-up is scheduled for then instead of chased now. Most teams find this is where their quietest pipeline was hiding.",
  },
  {
    q: "Does this replace our CRM?",
    a: "No. It fills it. Leads are created and updated in the CRM you already run through our integrations and API, with the recording and transcript attached, so your reports keep working exactly as they do today.",
  },
];

export default function LeadPipelinePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <p className="eyebrow mb-5 inline-block border border-border bg-ink-2 px-3 py-1.5">
                Automated Lead Pipeline
              </p>
              <h1 className="max-w-xl text-4xl md:text-[3.4rem] leading-[1.08]">
                <span className="text-lime">Most of your calls are people asking to buy.</span>{" "}
                Almost none of them become leads.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                CustomerCare.OM listens for buying intent on the enquiries your
                line already takes, builds the lead with your own records
                attached, and hands it to one salesperson who owns it.{" "}
                <strong className="text-foreground">
                  From the first question to the signed order.
                </strong>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/book-a-demo/"
                  className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
                >
                  Book a Demo <span aria-hidden>+</span>
                </Link>
                <Link
                  href="/product/smart-follow-ups/"
                  className="inline-flex h-11 items-center gap-2 border border-line-strong px-7 text-sm font-medium hover:bg-ink-3 transition-colors"
                >
                  See how follow-ups run <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
                {[
                  { v: "4", l: "Channels feeding one pipeline" },
                  { v: "1", l: "Named owner per lead" },
                  { v: "0", l: "Enquiries left as a note" },
                ].map((m) => (
                  <div key={m.l}>
                    <p className="font-display text-2xl md:text-3xl font-medium tracking-tight">
                      {m.v}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {m.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* pipeline board */}
            <div className="overflow-hidden border border-line-strong p-4 md:p-6">
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {board.map((col) => (
                  <div key={col.stage} className="flex flex-col gap-2">
                    <p className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {col.stage}
                      <span className="text-lime">{col.cards.length}</span>
                    </p>
                    {col.cards.map((c) => (
                      <div
                        key={c.ref}
                        className={`border border-border ${col.tint} p-3`}
                      >
                        <p className="font-mono text-[10px] text-muted-foreground">{c.ref}</p>
                        <p className="mt-1 text-xs font-semibold leading-snug">{c.t}</p>
                        <p className="mt-1.5 text-[11px] text-muted-foreground">{c.meta}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p className="mt-4 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Every card here started as a customer service call
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="border-b border-border py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">The revenue hiding in support</p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            Half of customer care is{" "}
            <span className="accent-italic">customers trying to buy</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Do you supply this? Can you deliver to Sohar? What would forty of them
            cost? Those calls land on the customer care number all day, get
            answered helpfully, and end as a line in a notebook or nothing at all.
            The customer, meanwhile, has already rung two competitors.
          </p>
          <p className="mt-5 font-semibold">
            An agent that is on every one of those conversations can turn the
            serious ones into leads while they are still warm.
          </p>
        </div>
      </section>

      {/* ── Enquiry to owned lead ── */}
      <section
        className="border-b border-border py-16 md:py-24"
        style={{
          backgroundImage:
            "radial-gradient(70% 45% at 50% 112%, rgba(212,255,79,0.35) 0%, rgba(212,255,79,0) 60%), linear-gradient(180deg, #0A0B0F 0%, #161C03 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl md:text-5xl">
            One enquiry in,{" "}
            <span className="accent-italic">one owned lead out.</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative border border-border bg-ink-2/95 p-8">
                <s.icon className="h-6 w-6 text-lime" aria-hidden />
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-lime md:block"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-lime">
            Qualified on the call. Enriched from your records. Owned by a person.
          </p>

          <figure className="mt-12">
            <Image
              src="/media/chatbot-to-human-transfer.webp"
              alt="A customer's bulk enquiry moving from the AI agent to Ahmed, a named salesperson in Muscat, inside one continuous thread"
              width={1672}
              height={941}
              className="w-full"
              sizes="(max-width: 1024px) 92vw, 1152px"
            />
            <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              The moment of ownership: the customer is introduced to the person
              now carrying their enquiry, with nothing repeated
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Enrichment walkthrough ── */}
      <LeadEnrichment />

      {/* ── Ownership ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <span className="inline-block h-1.5 w-6 bg-lime" aria-hidden />
                Ownership
              </p>
              <h2 className="mt-4 max-w-lg text-3xl md:text-5xl">
                Leads do not close themselves.{" "}
                <span className="accent-italic">People do</span>.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">
                The agent qualifies, enriches, and hands over. Everything after
                that is your salesperson's judgement, their relationship, and
                their commission. What changes is that they start the conversation
                already knowing what the customer wants, what they have bought
                before, and how long they have been waiting.
              </p>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                In Oman that matters more than most markets. Deals here are closed
                between people who know each other, and no AI is going to sit in a
                majlis on your behalf.
              </p>
            </div>
            <div className="grid gap-3">
              {ownership.map((o) => (
                <div key={o.t} className="flex gap-4 border border-border bg-ink-2 p-6">
                  <Handshake className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden />
                  <div>
                    <h3 className="text-base font-semibold">{o.t}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{o.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Shared follow-up engine ── */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="max-w-xl text-2xl md:text-4xl">
                Deals stall for the same reason tickets do:{" "}
                <span className="accent-italic">nobody chased</span>.
              </h2>
              <p className="mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed">
                Smart Follow-Ups keeps a support ticket moving between the
                assignee and the customer. Point it at a lead instead and it does
                the same job: the owner is nudged when a stage goes quiet, the
                quotation gets a reminder before it expires, and the customer
                hears from you on the day you said they would.
              </p>
              <Link
                href="/product/smart-follow-ups/"
                className="mt-6 inline-flex h-10 items-center gap-2 border border-line-strong px-5 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                Smart Follow-Ups <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3">
              {[
                { icon: PhoneIncoming, t: "Tickets", d: "Chased to a confirmed fix" },
                { icon: TrendingUp, t: "Leads", d: "Chased to a decision, won or lost" },
              ].map((r) => (
                <div key={r.t} className="flex items-center gap-4 border border-line-strong bg-ink-2 p-5">
                  <r.icon className="h-5 w-5 shrink-0 text-lime" aria-hidden />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {r.t}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold">{r.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <h2 className="max-w-2xl text-3xl md:text-5xl">
              Everything the pipeline fills in{" "}
              <span className="accent-italic">before your rep calls back</span>.
            </h2>
            <Layers className="h-10 w-10 text-lime" aria-hidden />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2.5 border border-border bg-ink-2 px-4 py-3.5 text-sm text-muted-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Oman band ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="max-w-xl text-2xl md:text-4xl">
                Built for how Omani buyers{" "}
                <span className="accent-italic">actually start a purchase</span>.
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                They ring. Often in Omani Arabic, often after hours, often to a
                number printed on a van or a shopfront rather than filled into a
                web form. Every one of those calls is qualified, priced in OMR
                where you allow it, and stored on infrastructure inside the
                Sultanate under the Personal Data Protection Law.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Target, label: "Intent, not just volume" },
                { icon: Database, label: "Enriched from your CRM" },
                { icon: Handshake, label: "Owned by one person" },
                { icon: ShieldCheck, label: "Data resident in Oman" },
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

      <Faq items={leadFaqs} />
      <CtaBanner />
    </>
  );
}
