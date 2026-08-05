import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Check,
  CircleDollarSign,
  Gauge,
  LineChart,
  PieChart,
  TrendingUp,
} from "lucide-react";
import { site } from "@/data/site";
import { CtaBanner, Faq } from "@/components/sections";

export const metadata: Metadata = {
  title: "Dashboard & Reporting",
  description:
    "Real-time reporting on customer queries, calls, and revenue. VoxCare's dashboards turn every conversation into numbers your leadership can act on.",
};

const analyticsCards = [
  {
    icon: CircleDollarSign,
    title: "Revenue attribution",
    desc: "Every booking, order, and renewal traced back to the conversation that produced it, in OMR.",
  },
  {
    icon: TrendingUp,
    title: "Saved-revenue tracking",
    desc: "Complaints resolved before they became cancellations, counted and valued, so retention work finally shows up in a number.",
  },
  {
    icon: LineChart,
    title: "Graphs and trends",
    desc: "Query volumes, languages, peak hours, and outcomes plotted over time, from one week to one year.",
  },
  {
    icon: PieChart,
    title: "Auto-built CRM insights",
    desc: "Lead sources, industries, and intent categories assembled from conversation data without manual tagging.",
  },
  {
    icon: Gauge,
    title: "Live performance view",
    desc: "Watch queues, answer times, and sentiment move in real time during campaigns and khareef-season peaks.",
  },
  {
    icon: BarChart3,
    title: "Actionable ROI",
    desc: "Minutes used, cost per resolved query, and revenue per campaign side by side, so the investment case writes itself.",
  },
];

const metricDetails = [
  { title: "Lead source breakdown", desc: "See exactly how many enquiries came from phone, chat, WhatsApp, email, and outbound campaigns, in one chart." },
  { title: "Call volume and duration", desc: "Track total queries, average handling time, peak hours, and missed-call rates over any period." },
  { title: "Conversion funnel", desc: "Follow customers from first contact to booked appointment to closed sale, and see where they drop off." },
  { title: "Team performance", desc: "Compare escalation handling, resolution time, and conversion across team members and branches." },
  { title: "Custom date ranges", desc: "Filter every report by today, this week, Ramadan, khareef season, or any range you define." },
  { title: "Revenue attribution", desc: "See which channels and campaigns generate the most pipeline and closed revenue, in OMR." },
  { title: "Voice agent quality", desc: "Answer rate, containment, qualification score, and transfer rate for every AI agent you run." },
  { title: "SMS, WhatsApp and chat analytics", desc: "Message volumes, response times, and conversation outcomes across every text channel." },
  { title: "Outbound campaign reporting", desc: "Attempts, connections, outcomes, and cost per result for every outbound calling campaign." },
  { title: "Custom dashboards", desc: "Finance sees OMR figures, operations sees queues, leadership sees the summary. Each team builds its own view." },
  { title: "Data export and BI", desc: "CSV export on every table and an event API for your own BI stack, with data resident in Oman." },
  { title: "Real-time updates", desc: "No sampling and no nightly batch. Every conversation lands in the dashboard as it ends." },
];

function PhoneIconRow() {
  return <span aria-hidden className="text-base">📞</span>;
}
function ChatIconRow() {
  return <span aria-hidden className="text-base">💬</span>;
}
function MailIconRow() {
  return <span aria-hidden className="text-base">✉️</span>;
}


const dashFaqs = [
  {
    q: "Which numbers do most teams start with?",
    a: "Answered-query rate, average response time, first-contact resolution, and revenue attributed to conversations. Those four tell most Omani businesses whether the phone line is making or losing money.",
  },
  {
    q: "Can I build my own dashboard?",
    a: "Yes. Pick the widgets that matter for each team: finance sees OMR figures, operations sees queues and resolution times, leadership sees the summary.",
  },
  {
    q: "Does it report across languages?",
    a: "Yes. Volumes, sentiment, and outcomes can be sliced by language, so you can see, for example, how Malayalam-speaking customers rate deliveries versus Arabic speakers.",
  },
  {
    q: "Can I export the data?",
    a: "Every table exports to CSV, and the API streams structured events into your own BI stack. Data stays resident in Oman throughout.",
  },
  {
    q: "Is any of this sampled or delayed?",
    a: "No sampling and no nightly batch. Every conversation lands in the dashboard as it ends.",
  },
];

export default function DashboardReportingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5 inline-block border border-border bg-ink-2 px-3 py-1.5">
            Dashboard &amp; Reporting
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl md:text-6xl leading-[1.06]">
            Stop guessing. <span className="accent-italic">Start knowing.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Real-time reporting on customer queries, calls, and revenue. Every
            conversation VoxCare handles becomes a number your leadership can
            act on.
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

      {/* ── Dashboard visual ── */}
      <section className="border-b border-border py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden border border-line-strong"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 90px), radial-gradient(75% 85% at 50% 118%, rgba(212,255,79,0.55) 0%, rgba(212,255,79,0.14) 50%, rgba(212,255,79,0) 72%), linear-gradient(180deg, #10140A 0%, #1A2004 52%, #3A4A08 88%, #55690C 100%)",
            }}
          >
            <div className="relative p-6 md:p-12">
              <div className="overflow-clip rounded-[1.25rem] border border-line-strong shadow-2xl shadow-black/60">
                <Image
                  src="/media/bento-analytics.avif"
                  alt="VoxCare reporting dashboard with query volumes and outcomes (placeholder visual)"
                  width={2216}
                  height={1385}
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Analytics that drive action ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl md:text-5xl">
            Analytics that <span className="accent-italic">drive action</span>.
          </h2>
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {analyticsCards.map((c) => (
              <div key={c.title} className="bg-ink-2 p-8">
                <c.icon className="h-6 w-6 text-lime" aria-hidden />
                <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Numbers that matter: dashboard mock ── */}
      <section
        className="border-b border-border py-16 md:py-24"
        style={{
          backgroundImage: "linear-gradient(180deg, #161C03 0%, #0A0B0F 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-5xl">
            See the numbers <span className="text-lime">that matter</span>.
          </h2>
          <div className="mx-auto mt-12 max-w-2xl overflow-clip rounded-xl border border-black/10 bg-white p-6 shadow-[0_1px_4px_rgba(12,12,13,0.05)] md:p-8">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                Revenue attributed
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                Last 30 days
              </p>
            </div>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              OMR 16,480
            </p>
            <p className="mt-1.5 text-sm font-medium text-lime-700" style={{ color: "#55690C" }}>
              +18% vs previous month
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { l: "Queries handled", v: "1,240" },
                { l: "Appointments", v: "86" },
              ].map((m) => (
                <div key={m.l} className="rounded-lg border border-black/10 bg-neutral-50 px-4 py-3.5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                    {m.l}
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-neutral-900">{m.v}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 space-y-2.5">
              {[
                { icon: PhoneIconRow, name: "Voice AI", sub: "24 bookings this week", amt: "OMR 4,760" },
                { icon: ChatIconRow, name: "WhatsApp & web chat", sub: "12 bookings this week", amt: "OMR 2,380" },
                { icon: MailIconRow, name: "Email agent", sub: "8 bookings this week", amt: "OMR 1,590" },
              ].map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between rounded-lg border border-black/10 px-4 py-3"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-white">
                      <r.icon />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-neutral-800">{r.name}</span>
                      <span className="block text-xs text-neutral-500">{r.sub}</span>
                    </span>
                  </span>
                  <span className="text-sm font-semibold text-neutral-900">{r.amt}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Illustrative figures. Your dashboard shows your own numbers, live.
          </p>
        </div>
      </section>

      {/* ── Metrics grid ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Features</p>
          <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">
            The metrics your team needs to run a{" "}
            <span className="text-lime">tighter operation.</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Every call, chat, WhatsApp message, and conversion tracked in one
            place, with the filters to drill into what matters.
          </p>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {metricDetails.map((m) => (
              <div key={m.title} className="border-t border-line-strong pt-5">
                <h3 className="text-base font-semibold">{m.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prove it band ── */}
      <section className="hatch-gutters border-b border-border py-14 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl text-2xl md:text-4xl">
            Prove it works. <span className="accent-italic">In Rials Omani.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            When the quarter closes, your VoxCare dashboard is the report:
            queries handled, hours saved, revenue attributed, in Rials Omani.
          </p>
        </div>
      </section>

      <Faq items={dashFaqs} />
      <CtaBanner />
    </>
  );
}
