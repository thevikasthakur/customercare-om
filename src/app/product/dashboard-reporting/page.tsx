import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BarChart3, CircleDollarSign, Gauge, LineChart, PieChart, TrendingUp } from "lucide-react";
import { CtaBanner, Faq } from "@/components/sections";

export const metadata: Metadata = {
  title: "Dashboard & Reporting",
  description:
    "Real-time reporting on customer queries, calls, and revenue. CustomerCare.OM's dashboards turn every conversation into numbers your leadership can act on.",
};

const analyticsCards = [
  {
    icon: CircleDollarSign,
    title: "Revenue attribution",
    desc: "Every booking, order, and renewal traced back to the conversation that produced it, in OMR.",
  },
  {
    icon: TrendingUp,
    title: "Cancellations prevented",
    desc: "Complaints closed before the customer walked away, each one counted and priced, so retention work reads as a figure and not an anecdote.",
  },
  {
    icon: LineChart,
    title: "Graphs and trends",
    desc: "Query volumes, languages, peak hours, and outcomes plotted over time, from one week to one year.",
  },
  {
    icon: PieChart,
    title: "Segments without tagging",
    desc: "Enquiry origins, industries, and intent categories assembled straight from conversation data, with nobody labelling records by hand.",
  },
  {
    icon: Gauge,
    title: "Live queue and sentiment",
    desc: "Queues, waiting times, and customer sentiment move in front of you during campaigns and khareef-season peaks.",
  },
  {
    icon: BarChart3,
    title: "Cost against return",
    desc: "Minutes used, cost per resolved query, and revenue per campaign side by side, so the investment case rests on figures rather than impressions.",
  },
];

const metricDetails = [
  { title: "Where enquiries come from", desc: "Enquiries counted by origin: phone, chat, WhatsApp, email, and proactive outreach, charted against each other." },
  { title: "Load and handling time", desc: "Total queries, average handling time, busiest hours, and unanswered calls plotted across any period you pick." },
  { title: "Conversion funnel", desc: "Watch a query travel from first contact to booking to paid work, and see exactly which step loses people." },
  { title: "Team performance", desc: "Compare escalation handling, resolution time, and conversion across team members and branches." },
  { title: "Periods you define", desc: "Filter every report by today, this week, Ramadan, khareef season, or a window you set yourself." },
  { title: "Revenue attribution", desc: "Attribute won business back to the conversation and the channel that started it, counted in OMR." },
  { title: "Voice agent quality", desc: "Answer rate, containment, qualification score, and transfer rate for every AI agent you run." },
  { title: "Messaging performance", desc: "Volumes, reply times, and outcomes for SMS, WhatsApp, and web chat, set beside your voice queues." },
  { title: "Proactive contact results", desc: "Attempts, connections, outcomes, and cost per result for every reminder, renewal, and follow-up run." },
  { title: "Custom dashboards", desc: "Finance sees OMR figures, operations sees queues, leadership sees the summary. Each team builds its own view." },
  { title: "Feeds your own BI stack", desc: "CSV export on every table and an event API for the warehouse you already run, with data resident in Oman." },
  { title: "Live, not nightly", desc: "Each conversation reaches the dashboard the moment it closes, counted in full rather than sampled." },
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
    a: "Answered-query rate, average response time, first-contact resolution, and revenue attributed to conversations. Those four tell most Omani enterprises whether their customer care operation is paying for itself.",
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
            Your whole customer care operation, <span className="accent-italic">in one live view.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Real-time reporting on customer queries, calls, and revenue. Every
            conversation CustomerCare.OM handles becomes a number your leadership can
            act on.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-a-demo/"
              className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
            >
              Book a Demo <span aria-hidden>+</span>
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
                  src="/media/dashboard-oman-report.webp"
                  alt="CustomerCare.OM reports screen tracking AI agent sales in Omani Rials across a week, with order totals and average time to order"
                  width={1672}
                  height={941}
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reporting built for Omani support teams ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl md:text-5xl">
            Reporting built for the way <span className="accent-italic">Omani support teams work</span>.
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

      {/* ── What last month was worth: dashboard mock ── */}
      <section
        className="border-b border-border py-16 md:py-24"
        style={{
          backgroundImage: "linear-gradient(180deg, #161C03 0%, #0A0B0F 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-5xl">
            What last month&apos;s conversations <span className="text-lime">were worth</span>.
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
            Every metric your service managers ask for,{" "}
            <span className="text-lime">already on the screen.</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Calls, chats, WhatsApp threads, emails, and conversions land in one
            report set, filterable by channel, language, branch, and date.
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

      {/* ── Quarter-end evidence band ── */}
      <section className="hatch-gutters border-b border-border py-14 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl text-2xl md:text-4xl">
            Bring the dashboard, <span className="accent-italic">not a slide deck.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            At quarter end the evidence is already assembled: queries handled,
            hours returned to your team, revenue attributed, all in Rials Omani.
          </p>
        </div>
      </section>

      <Faq items={dashFaqs} />
      <CtaBanner />
    </>
  );
}
