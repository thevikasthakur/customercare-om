import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, Send, Sparkles } from "lucide-react";
import { CtaBanner } from "@/components/sections";
import ContextContinuity from "@/components/ContextContinuity";

export const metadata: Metadata = {
  title: "AI Email Agent",
  description:
    "Customer email triaged, labelled, summarised and drafted for Omani support teams in Arabic and English, with every message processed inside the Sultanate.",
};

const stats = [
  { v: "45m", l: "Saved per day" },
  { v: "10K+", l: "Emails organised daily" },
  { v: "8/10", l: "Drafts sent unedited" },
  { v: "7 days", l: "Pilot on one mailbox" },
];

const silentFeatures = [
  {
    title: "Labels for your queues",
    desc: "Every incoming email is classified the moment it lands: needs reply, awaiting customer, invoice, complaint. Add your own labels to match how your team actually works.",
  },
  {
    title: "Drafts written on arrival",
    desc: "A contextual reply waits inside every customer email before you open it, grounded in your prices and policies. Review, adjust, send.",
  },
  {
    title: "Custom signature",
    desc: "Set your signature once, in Arabic, English, or both, and every draft carries it correctly. Never paste it again.",
  },
  {
    title: "Writes in your team's voice",
    desc: "The agent picks up the tone and formality your care team already uses, so a drafted reply reads like the colleague who normally sends it.",
  },
  {
    title: "Works inside your inbox",
    desc: "No new app to learn and no forwarding rules. The mailbox your team already knows, dramatically smarter.",
  },
  {
    title: "Piloted on your own mailbox",
    desc: "Run a seven-day pilot on one live support mailbox, then decide with your own volumes and your own drafts in front of you.",
  },
];

const steps = [
  {
    n: "01",
    title: "Link your support mailboxes",
    desc: "Sign in once with Gmail or Outlook. The agent asks for the narrowest scope that lets it read, label and prepare drafts, and nothing beyond that.",
  },
  {
    n: "02",
    title: "Labels land on every thread",
    desc: "Within minutes the live queue is categorised and the backlog behind it is sorted too, so your agents open a mailbox that already makes sense.",
  },
  {
    n: "03",
    title: "Your team approves and sends",
    desc: "Every needs-reply thread carries a draft in the customer's language. An agent reads it, adjusts a line if needed, and sends.",
  },
];

const capabilities = [
  { title: "Tagging on arrival", desc: "Every incoming email tagged as lead, follow-up, urgent, support, or spam, so the inbox sorts itself." },
  { title: "A draft on every thread", desc: "A contextual draft for every customer email, in Arabic or English, ready in one click." },
  { title: "Lead detection", desc: "A first-time enquiry is recognised as a lead and written to your CRM with its language, intent and source already filled in." },
  { title: "Quiet threads resurfaced", desc: "Threads that go quiet get flagged with a suggested date, so nothing slips through Ramadan weeks." },
  { title: "Thread summarisation", desc: "Long chains condensed into a one-paragraph brief, in English or Arabic, whichever your team reads faster." },
  { title: "Sentiment flags", desc: "Frustrated or high-priority senders surface to the top so you respond to them first." },
  { title: "CRM sync", desc: "Every interaction logged to the contact record: who emailed, when, and about what." },
  { title: "Smart routing", desc: "Sales emails to sales, support emails to support, by topic, sender, or keyword." },
  { title: "Unsubscribe handling", desc: "Opt-out requests detected and preferences updated automatically, as the Personal Data Protection Law expects." },
  { title: "Every mailbox, one view", desc: "Sales, support, and finance mailboxes managed from a single CustomerCare.OM view." },
  { title: "Custom instructions", desc: "Plain-language rules for how the agent should treat specific senders, topics, or tones." },
  { title: "Data resident in Oman", desc: "Every message processed inside the Sultanate. Nothing routed through overseas servers." },
];

const compareRows: { cap: string; manual: string; other: string }[] = [
  { cap: "Auto-labelling", manual: "none", other: "Limited" },
  { cap: "Drafts on every thread", manual: "none", other: "none" },
  { cap: "Writes in your team's voice", manual: "none", other: "none" },
  { cap: "Works inside your inbox", manual: "yes", other: "none" },
  { cap: "Arabic and English drafting", manual: "Manual", other: "Limited" },
  { cap: "Data resident in Oman", manual: "none", other: "none" },
  { cap: "Pilot on a live mailbox", manual: "none", other: "Limited" },
];

const inboxRows = [
  { i: "T", name: "Tariq", chip: "DRAFT", subj: "New delivery window", prev: "Salaam, can we move Thursday's delivery to the morning slot...", time: "2:15 PM", active: true },
  { i: "S", name: "Salim", subj: "Quotation for 12 service visits", prev: "Please send the annual maintenance quote for the Ruwi branch...", time: "1:42 PM" },
  { i: "F", name: "Fatma", subj: "Invoice 3391 still unpaid?", prev: "We transferred on Sunday, kindly confirm receipt before...", time: "12:58 PM" },
  { i: "A", name: "Aisha", subj: "Wrong size delivered to Al Khoudh", prev: "The unit that arrived is the 18,000 BTU, we ordered the...", time: "12:30 PM" },
  { i: "H", name: "Huda", subj: "Ramadan opening hours?", prev: "Will the Seeb showroom stay open after Taraweeh this year...", time: "11:45 AM" },
  { i: "R", name: "Rashid", subj: "Site visit moved to Thursday 3pm", prev: "Confirmed with the foreman, the crew will be on site by...", time: "11:21 AM" },
  { i: "K", name: "Khalid", subj: "Warranty claim, serial OM-4471", prev: "The compressor failed again after the last repair, we need...", time: "10:05 AM" },
];

function Dot() {
  return <span className="mx-auto block h-2.5 w-2.5 rounded-full bg-lime" aria-label="Included" />;
}
function NoneMark() {
  return <span className="text-muted-foreground/50" aria-label="Not available">✕</span>;
}

export default function EmailAgentPage() {
  return (
    <>
      {/* ── Hero with inbox mock ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow">AI Email Agent</p>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
              <span className="text-lime">Customer email, handled.</span>
              <br />
              Arabic and English, at scale.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-lg text-muted-foreground">
              Connects to Gmail and Outlook in one click. Nothing to install.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book-a-demo/"
                className="inline-flex h-11 items-center gap-1 px-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Book a Demo <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          {/* two-panel inbox + draft mock */}
          <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_1fr]">
            {/* inbox list */}
            <div className="overflow-clip rounded-xl border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
              <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5">
                <span className="flex items-center gap-3">
                  <span className="flex gap-1.5" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </span>
                  <span className="text-xs font-semibold text-neutral-700">Inbox</span>
                </span>
                <span className="flex items-center gap-1 text-xs text-neutral-500">
                  <Mail className="h-3.5 w-3.5" aria-hidden /> Mail
                </span>
              </div>
              <ul className="divide-y divide-black/5">
                {inboxRows.map((r) => (
                  <li
                    key={r.name + r.time}
                    className={`flex items-center gap-3 px-4 py-3 ${r.active ? "bg-lime/15" : ""}`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-600">
                      {r.i}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-neutral-800">{r.name}</span>
                        {r.chip && (
                          <span className="rounded bg-lime px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-ink">
                            {r.chip}
                          </span>
                        )}
                      </span>
                      <span className="block truncate text-xs text-neutral-500">
                        <strong className="font-semibold text-neutral-700">{r.subj}</strong>
                        {" "}· {r.prev}
                      </span>
                    </span>
                    <span className="shrink-0 text-[10px] text-neutral-400">{r.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* draft panel */}
            <div className="flex flex-col overflow-clip rounded-xl border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
              <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-lime/25 px-2.5 py-1 text-[10px] font-semibold text-neutral-800">
                  <Sparkles className="h-3 w-3" aria-hidden /> AI Draft
                </span>
                <span className="rounded-full bg-neutral-900 px-2.5 py-1 text-[10px] font-semibold text-lime">
                  Needs Reply
                </span>
              </div>
              <div className="space-y-2 border-b border-black/5 px-5 py-3 text-xs">
                <p><span className="text-neutral-400">To</span> <span className="ml-6 text-neutral-700">tariq@almounah-trading.om</span></p>
                <p><span className="text-neutral-400">Subject</span> <span className="ml-2 font-medium text-neutral-800">Re: New delivery window</span></p>
              </div>
              <div className="flex-1 space-y-3 px-5 py-4 text-sm leading-relaxed text-neutral-700">
                <p>Salaam Tariq,</p>
                <p>
                  Thursday morning works. Your delivery is rebooked for the
                  8 to 11 window and the driver will call thirty minutes
                  before arrival.
                </p>
                <p>Shukran,</p>
                <p className="text-xs">
                  <strong className="block text-neutral-800">Al Mounah Customer Care</strong>
                  <span className="text-neutral-500">Drafted by CustomerCare.OM · care@almounah-trading.om</span>
                </p>
              </div>
              <div className="flex justify-end border-t border-black/5 px-4 py-3">
                <span className="inline-flex h-9 items-center gap-1.5 rounded-full bg-lime px-4 text-xs font-semibold text-ink">
                  <Send className="h-3.5 w-3.5" aria-hidden /> Send
                </span>
              </div>
            </div>
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

      {/* ── Silent features: rule-topped 3x2 ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Inbox work, automated</p>
          <h2 className="mt-4 max-w-4xl text-3xl md:text-5xl">
            Support email keeps moving{" "}
            <span className="text-lime">while your team is on calls.</span>
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {silentFeatures.map((f) => (
              <div key={f.title} className="border-t border-line-strong pt-5">
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works: 3 numbered rule-topped columns ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">
            Three steps from sign-in <span className="text-lime">to a sorted queue.</span>
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-line-strong pt-5">
                <p className="font-mono text-xs text-muted-foreground">{s.n}</p>
                <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Context continuity ── */}
      <ContextContinuity />

      {/* ── Twelve jobs: rule-topped 3x4 ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Core features</p>
          <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">
            Twelve jobs your support inbox <span className="text-lime">stops doing by hand.</span>
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="border-t border-line-strong pt-5">
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Compare</p>
          <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">
            Manual inbox vs others vs <span className="text-lime">CustomerCare.OM</span>
          </h2>
          <div className="mt-12 overflow-x-auto rounded-xl border border-line-strong">
            <table className="w-full min-w-[40rem] text-sm">
              <thead>
                <tr className="border-b border-line-strong bg-ink-2 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <th className="px-5 py-4 font-medium">Capability</th>
                  <th className="px-5 py-4 text-center font-medium">Manual inbox</th>
                  <th className="px-5 py-4 text-center font-medium">Other AI email</th>
                  <th className="bg-ink-3 px-5 py-4 text-center font-medium text-lime">CustomerCare.OM</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r) => (
                  <tr key={r.cap} className="border-b border-border last:border-0">
                    <td className="px-5 py-4">{r.cap}</td>
                    <td className="px-5 py-4 text-center text-muted-foreground">
                      {r.manual === "none" ? <NoneMark /> : r.manual === "yes" ? <Dot /> : r.manual}
                    </td>
                    <td className="px-5 py-4 text-center text-muted-foreground">
                      {r.other === "none" ? <NoneMark /> : r.other}
                    </td>
                    <td className="bg-ink-2 px-5 py-4 text-center">
                      <Dot />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
