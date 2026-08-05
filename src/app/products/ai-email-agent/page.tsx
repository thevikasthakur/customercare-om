import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Play, Send, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { CtaBanner } from "@/components/sections";
import ContextContinuity from "@/components/ContextContinuity";

export const metadata: Metadata = {
  title: "AI Email Agent",
  description:
    "Your inbox organised and your replies drafted. VoxCare's AI Email Agent labels, summarises, and drafts customer email in Arabic and English, with data resident in Oman.",
};

const stats = [
  { v: "45m", l: "Saved per day" },
  { v: "10K+", l: "Emails organised daily" },
  { v: "8/10", l: "Drafts sent unedited" },
  { v: "7 days", l: "Free trial" },
];

const silentFeatures = [
  {
    title: "Smart & custom labels",
    desc: "Every incoming email is classified the moment it lands: needs reply, awaiting customer, invoice, complaint. Add your own labels to match how your team actually works.",
  },
  {
    title: "Auto AI drafts",
    desc: "A contextual reply waits inside every customer email before you open it, grounded in your prices and policies. Review, adjust, send.",
  },
  {
    title: "Custom signature",
    desc: "Set your signature once, in Arabic, English, or both, and every draft carries it correctly. Never paste it again.",
  },
  {
    title: "Learns your style",
    desc: "The agent studies how your team writes and drafts in your tone and formality, not a generic one. Your customers should not notice a difference.",
  },
  {
    title: "Works inside your inbox",
    desc: "No new app to learn and no forwarding rules. The mailbox your team already knows, dramatically smarter.",
  },
  {
    title: "Free to try",
    desc: "Seven days on us, no card required. Connect a mailbox and see your first organised morning within minutes.",
  },
];

const steps = [
  {
    n: "01",
    title: "Connect your mailbox",
    desc: "One-click sign-in for Gmail or Outlook. We request only the permissions needed to read, label, and draft. Nothing more.",
  },
  {
    n: "02",
    title: "The agent organises everything",
    desc: "Within minutes your inbox is categorised with smart labels, and the backlog gets sorted too. Every thread in its place.",
  },
  {
    n: "03",
    title: "Review drafts and send",
    desc: "Every needs-reply email has a thoughtful draft waiting, in the customer's language. Edit or send as-is. That simple.",
  },
];

const capabilities = [
  { title: "Auto-label inbox", desc: "Every incoming email tagged as lead, follow-up, urgent, support, or spam, so the inbox sorts itself." },
  { title: "AI-drafted replies", desc: "A contextual draft for every customer email, in Arabic or English, ready in one click." },
  { title: "Lead detection", desc: "New enquiries become CRM contacts automatically. No copy-pasting, no data entry." },
  { title: "Follow-up reminders", desc: "Threads that go quiet get flagged with a suggested date, so nothing slips through Ramadan weeks." },
  { title: "Thread summarisation", desc: "Long chains condensed into a one-paragraph brief, in English or Arabic, whichever your team reads faster." },
  { title: "Sentiment flags", desc: "Frustrated or high-priority senders surface to the top so you respond to them first." },
  { title: "CRM sync", desc: "Every interaction logged to the contact record: who emailed, when, and about what." },
  { title: "Smart routing", desc: "Sales emails to sales, support emails to support, by topic, sender, or keyword." },
  { title: "Unsubscribe handling", desc: "Opt-out requests detected and preferences updated automatically, as the Personal Data Protection Law expects." },
  { title: "Multi-account support", desc: "Sales, support, and finance mailboxes managed from a single VoxCare view." },
  { title: "Custom instructions", desc: "Plain-language rules for how the agent should treat specific senders, topics, or tones." },
  { title: "Data resident in Oman", desc: "Every message processed inside the Sultanate. Nothing routed through overseas servers." },
];

const compareRows: { cap: string; manual: string; other: string }[] = [
  { cap: "Auto-labelling", manual: "none", other: "Limited" },
  { cap: "AI draft replies", manual: "none", other: "none" },
  { cap: "Learns your style", manual: "none", other: "none" },
  { cap: "Works inside your inbox", manual: "yes", other: "none" },
  { cap: "Arabic and English drafting", manual: "Manual", other: "Limited" },
  { cap: "Data resident in Oman", manual: "none", other: "none" },
  { cap: "Free trial", manual: "none", other: "Limited" },
];

const inboxRows = [
  { i: "T", name: "Tariq", chip: "DRAFT", subj: "New delivery window", prev: "Salaam, can we move Thursday's delivery to the morning slot...", time: "2:15 PM", active: true },
  { i: "P", name: "Priya", subj: "Partnership proposal next steps", prev: "Thanks for sending the proposal. I shared it with...", time: "1:42 PM" },
  { i: "F", name: "Fatma", subj: "Re: Website copy feedback", prev: "Looks great, thanks for making those changes. Nothing el...", time: "12:58 PM" },
  { i: "O", name: "Omantel", subj: "Your bill for March is ready", prev: "Your account statement for services ending in 4821 is...", time: "12:30 PM" },
  { i: "N", name: "Noor", subj: "Spring sale: 50% off annual plans", prev: "Don't miss out. Upgrade to annual and save 50%...", time: "11:45 AM" },
  { i: "R", name: "Rashid", subj: "Site visit moved to Thursday 3pm", prev: "Accepted: Site visit @ Thu Apr 10, 202...", time: "11:21 AM" },
  { i: "M", name: "Maryam", subj: "New office wifi password", prev: "Hey all, the new wifi password is on the noticeboard. Guest...", time: "10:05 AM" },
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
              <span className="text-lime">Your inbox, organised.</span>
              <br />
              Your replies, drafted.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-lg text-muted-foreground">
              Connects to Gmail and Outlook in one click. Nothing to install.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={`${site.appUrl}/sign-up`}
                className="inline-flex h-11 items-center gap-2 bg-lime px-6 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
              >
                <Mail className="h-4 w-4" aria-hidden /> Connect Gmail, Start Free
              </Link>
              <Link
                href={`${site.appUrl}/sign-up`}
                className="inline-flex h-11 items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                <Mail className="h-4 w-4 text-lime" aria-hidden /> Connect Outlook, Start Free
              </Link>
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
                  <span className="text-neutral-500">Drafted by VoxCare · care@almounah-trading.om</span>
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
          <p className="eyebrow">Everything your inbox needs</p>
          <h2 className="mt-4 max-w-4xl text-3xl md:text-5xl">
            Powerful AI features that work{" "}
            <span className="text-lime">silently in the background.</span>
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
            Up and running in <span className="text-lime">30 seconds.</span>
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

      {/* ── Twelve capabilities: rule-topped 3x4 ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Core features</p>
          <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">
            Twelve capabilities, <span className="text-lime">one email agent.</span>
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
            Manual inbox vs others vs <span className="text-lime">VoxCare.</span>
          </h2>
          <div className="mt-12 overflow-x-auto rounded-xl border border-line-strong">
            <table className="w-full min-w-[40rem] text-sm">
              <thead>
                <tr className="border-b border-line-strong bg-ink-2 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  <th className="px-5 py-4 font-medium">Capability</th>
                  <th className="px-5 py-4 text-center font-medium">Manual inbox</th>
                  <th className="px-5 py-4 text-center font-medium">Other AI email</th>
                  <th className="bg-ink-3 px-5 py-4 text-center font-medium text-lime">VoxCare</th>
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

      {/* ── Customer stories carousel ── */}
      <section className="border-b border-border py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-xl text-3xl md:text-5xl">
            Businesses across Oman grow with VoxCare
          </h2>
        </div>
        <div className="mt-12 flex gap-6 px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2))]">
          <figure className="grid w-full shrink-0 overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-[0_1px_4px_rgba(12,12,13,0.05)] md:max-w-4xl md:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-64">
              <Image
                src="/media/story-2.jpg"
                alt="Customer story (placeholder visual)"
                fill
                sizes="(min-width: 768px) 40rem, 100vw"
                className="object-cover"
              />
              <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-lime">
                <Play className="h-5 w-5 translate-x-0.5 text-ink" aria-hidden />
              </span>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-4xl font-semibold text-white">~65%</p>
                <p className="text-sm text-white/80">Lower email handling cost</p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                  Trading company · Muscat
                </p>
                <blockquote className="mt-4 text-xl font-medium leading-snug text-neutral-900">
                  &ldquo;The inbox used to eat our mornings. Now the drafts are
                  waiting before we sit down, and the backlog is simply gone.&rdquo;
                </blockquote>
                <p className="mt-4 text-sm text-neutral-500">Operations Manager</p>
              </div>
              <Link
                href="/industries/"
                className="mt-8 inline-flex h-10 w-fit items-center gap-2 rounded-full bg-lime px-5 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
              >
                Read the story <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </figure>
          <div className="relative hidden w-72 shrink-0 overflow-clip rounded-[1.25rem] border border-black/10 md:block">
            <Image
              src="/media/story-4.jpg"
              alt=""
              fill
              sizes="18rem"
              className="object-cover"
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="text-3xl font-semibold text-white">1,600+</p>
              <p className="text-sm text-white/80">Queries handled monthly</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/industries/"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-lime transition-colors"
          >
            View all stories <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <span className="flex items-center gap-2" aria-hidden>
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className={`rounded-full ${i === 1 ? "h-2 w-5 bg-lime" : "h-2 w-2 bg-line-strong"}`}
              />
            ))}
          </span>
        </div>
      </section>

      {/* ── Broke the internet band ── */}
      <section className="border-b border-border py-16 md:py-24 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-5xl">Oman
            The AI customer care <span className="accent-italic">Oman talks about</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Don&rsquo;t take our word for it. See why operators across the Gulf
            keep sharing their VoxCare agents.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["story-1.jpg", "story-2.jpg", "story-3.jpg", "story-4.jpg"].map((img) => (
              <div key={img} className="relative aspect-[4/5] overflow-clip rounded-xl border border-border">
                <Image
                  src={`/media/${img}`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 18rem, 45vw"
                  className="object-cover opacity-60"
                  aria-hidden
                />
                <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink/90 border border-line-strong">
                  <Play className="h-4 w-4 translate-x-0.5 text-lime" aria-hidden />
                </span>
              </div>
            ))}
          </div>
          <blockquote className="mx-auto mt-14 max-w-xl border border-border bg-ink-2 p-8 text-left">
            <p className="text-lg leading-relaxed text-muted-foreground">
              &ldquo;Something that usually took us about 3 hours of inbox
              triage a day now happens before the first coffee.&rdquo;
            </p>
            <footer className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-lime">
              E-commerce founder, Muscat
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── Trial CTA ── */}
      <section className="border-b border-border py-16 md:py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-5xl">
            Start your free trial. <span className="text-lime">No catch.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Seven days, full features, no card. Cancel in one click if it is
            not for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`${site.appUrl}/sign-up`}
              className="inline-flex h-11 items-center gap-2 bg-lime px-6 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
            >
              <Mail className="h-4 w-4" aria-hidden /> Connect Gmail, Start Free
            </Link>
            <Link
              href={`${site.appUrl}/sign-up`}
              className="inline-flex h-11 items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              Connect Outlook, Start Free
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
