import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BarChart3,
  BookOpen,
  Database,
  Gauge,
  Globe2,
  Landmark,
  Lock,
  MessageSquare,
  Mic,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CtaBanner, Faq } from "@/components/sections";
import ContextContinuity from "@/components/ContextContinuity";

export const metadata: Metadata = {
  title: "AI Chatbot for Websites",
  description:
    "A website chatbot built and hosted in Oman. It answers in Omani Arabic and English, qualifies buyers, books appointments, and hands hot enquiries to your team, with every chat stored in the Sultanate.",
};

const stats = [
  { v: "<5s", l: "Between question and reply" },
  { v: "9", l: "Languages it can chat in" },
  { v: "81.8%", l: "Chats ending on a positive note" },
  { v: "24/7", l: "Cover, Eid and weekends included" },
];

const jobs = [
  {
    title: "Catches buyers at midnight",
    desc: "The person comparing three suppliers after dinner gets a real answer on the spot. By morning, yours is the company that already replied.",
  },
  {
    title: "Fills the pipeline as it chats",
    desc: "Name, request, channel, and mood go straight onto the lead record. Nobody retypes a conversation into the CRM.",
  },
  {
    title: "Sorts browsers from buyers",
    desc: "Budget, quantity, and timing come up naturally in the flow of the chat. Your team receives a shortlist, not a haystack.",
  },
  {
    title: "Locks in the appointment",
    desc: "It reads the calendar, offers a slot, and confirms it inside the conversation. Nobody promises a callback that never comes.",
  },
  {
    title: "Brings in a human at the right moment",
    desc: "Ask for a person and the thread transfers with its full history, to live chat or to a phone call. The customer never starts over.",
  },
  {
    title: "Remembers to circle back",
    desc: "A visitor who said next month is contacted next month. The reminder writes itself from the conversation.",
  },
];

const knowledge = [
  {
    icon: BookOpen,
    title: "Your website is the first briefing",
    desc: "Hand over your domain and the chatbot studies the pages, catalogues, and policies you already keep up to date. Its answers cite your material, not a model's general impression of your industry.",
  },
  {
    icon: Database,
    title: "Add what customers ask but the site never says",
    desc: "Delivery times to Salalah, warranty small print, which branch holds stock. Type it in once and the very next chat uses it.",
  },
  {
    icon: Lock,
    title: "It admits the limits",
    desc: "A question outside the brief gets an honest offer to bring in a colleague, never a confident guess. You decide which topics always route to staff.",
  },
];

const voiceCards = [
  {
    icon: Mic,
    title: "Understood straight from the recording",
    desc: "No transcription queue and no human playback later. The reply starts the moment the note lands.",
  },
  {
    icon: AudioLines,
    title: "Dialects welcome",
    desc: "Omani and Gulf Arabic, English, and the everyday mix of both in one sentence all parse cleanly.",
  },
  {
    icon: MessageSquare,
    title: "The button they already press",
    desc: "Customers keep using WhatsApp exactly as they do with friends. There is nothing new to learn.",
  },
  {
    icon: Sparkles,
    title: "Audio becomes a record",
    desc: "What was asked and what was promised is captured onto the lead or ticket, the same as any typed chat.",
  },
];

const intel = [
  {
    icon: BarChart3,
    title: "A scorecard per job",
    desc: "Bookings made, tickets raised, handovers to staff, conversations abandoned. You see what the chatbot completed this week and where it needs coaching.",
  },
  {
    icon: Gauge,
    title: "Mood as an early warning",
    desc: "Customer sentiment turns down days before revenue does. The trend line gives you time to ask why while the answer is still cheap.",
  },
  {
    icon: Sparkles,
    title: "The unhappy few, surfaced",
    desc: "An 81.8% positive rate leaves a remainder, and the remainder is the work. Negative chats are flagged and escalated to a person, never averaged away.",
  },
];

const chatbotFaqs = [
  {
    q: "What do we need to prepare before launch?",
    a: "A domain name and ten minutes. The chatbot reads your published site on its own; anything extra, such as price lists or internal policies, can be added after you have watched it answer.",
  },
  {
    q: "Can it answer in Omani Arabic rather than formal Arabic?",
    a: "Yes. It replies in the register the customer writes in, whether that is Omani dialect, Gulf Arabic, formal Arabic, or English, and it keeps up when one message mixes two of them.",
  },
  {
    q: "What stops it from inventing answers?",
    a: "It is restricted to your website, your uploaded documents, and the facts you have typed in. A question outside those sources gets an honest deferral and a handover, and you can list topics that must always reach a person.",
  },
  {
    q: "How does it hand a chat to my team?",
    a: "It transfers the live thread with the full history attached, over chat or by ringing the person on duty through the same platform that runs your phone line. The customer is told who is taking over.",
  },
  {
    q: "Where do the conversations live?",
    a: "On servers inside Oman, under the Personal Data Protection Law (Royal Decree 6/2022). Transcripts, contact details, and analytics all stay in the Sultanate.",
  },
  {
    q: "Is the chatbot separate from the phone and email agents?",
    a: "It is one product in the same suite. A chat can become a call, a call can end with an emailed summary, and all three feed one customer record and one dashboard.",
  },
];

export default function ChatbotPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow">AI Chatbot for Websites</p>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
              <span className="text-lime">The salesperson on your website</span>
              <br />
              that never clocks off.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground">
              It answers product questions in Omani Arabic or English, qualifies
              who deserves a callback, and files every conversation into your
              pipeline.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book-a-demo/"
                className="inline-flex h-11 items-center gap-2 bg-lime px-6 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
              >
                <Globe2 className="h-4 w-4" aria-hidden /> Put it on my site
              </Link>
              <Link
                href="/book-a-demo/"
                className="inline-flex h-11 items-center gap-1 px-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Book a Demo <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {["Runs on servers in Oman", "Answering at 2am", "Omani Arabic + English", "One suite with calls and email"].map((b) => (
                <span key={b} className="eyebrow border border-border bg-ink-2 px-3 py-1.5">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* hero video panel */}
          <div className="mx-auto mt-14 max-w-5xl overflow-clip rounded-xl border border-black/10 bg-white p-2 shadow-[0_1px_4px_rgba(12,12,13,0.05)]">
            <video
              className="w-full rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              poster="/media/chat-om-poster.webp"
              aria-label="CustomerCare.OM chatbot answering a customer conversation (product demo video)"
            >
              <source src="/media/chat-om-hero.mp4" type="video/mp4; codecs=av01.0.05M.08" />
              <source src="/media/chat-om-hero-h264.mp4" type="video/mp4" />
            </video>
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

      {/* ── Jobs: rule-topped 3x2 ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Its job description</p>
          <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">
            You set the goal.{" "}
            <span className="text-lime">It carries the conversation.</span>
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((j) => (
              <div key={j.title} className="border-t border-line-strong pt-5">
                <h3 className="text-base font-semibold">{j.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Knowledge ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Trained on your material</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">
            It answers from your shelf,{" "}
            <span className="text-lime">not from thin air.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Generic chatbots improvise, and improvising in front of customers is
            expensive. This one is briefed the way you would brief a new hire:
            on your documents, your prices, and your rules.
          </p>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {knowledge.map((k) => (
              <div key={k.title} className="border-t border-line-strong pt-5">
                <k.icon className="h-5 w-5 text-lime" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{k.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All channels ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow">Met on their channel</p>
              <h2 className="mt-4 text-3xl md:text-5xl">
                Web, WhatsApp, email.{" "}
                <span className="text-lime">The same conversation.</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                A thread that starts in the chat widget can continue on WhatsApp
                and finish over email. The chatbot recognises the customer at
                each step and carries the history along, so switching channels
                never means starting again.
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-lime">
                Same customer. Same thread. Any channel.
              </p>
            </div>
            <Image
              src="/media/multi-channel-support.webp"
              alt="Four customers in Oman asking about orders, delivery times, and support, matched to WhatsApp, email, and web chat"
              width={1448}
              height={1086}
              className="w-full"
              sizes="(max-width: 768px) 92vw, 560px"
            />
          </div>
        </div>
      </section>

      {/* ── Context continuity ── */}
      <ContextContinuity />

      {/* ── Voice-first ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Built for a talking market</p>
          <h2 className="mt-4 max-w-xl text-3xl md:text-5xl">
            Half the messages here <span className="text-lime">arrive as audio.</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            In Oman the microphone button gets more use than the keyboard. The
            chatbot listens to voice notes the same way it reads text, and
            answers just as fast.
          </p>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {voiceCards.map((c) => (
              <div key={c.title} className="border-t border-line-strong pt-5">
                <c.icon className="h-5 w-5 text-lime" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{c.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reporting ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">The numbers behind the chat</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">
            Every chat files <span className="text-lime">its own report.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Who wrote in, on which channel, what they wanted, and how it ended.
            The dashboard turns that into figures a Monday meeting can act on,
            with your phone and email queues counted in the same view.
          </p>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {intel.map((c) => (
              <div key={c.title} className="border-t border-line-strong pt-5">
                <c.icon className="h-5 w-5 text-lime" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{c.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/product/dashboard-reporting/"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-lime hover:underline underline-offset-4"
          >
            More on Dashboard &amp; Reporting
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* ── Data residency ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow">Sovereign by default</p>
              <h2 className="mt-4 max-w-xl text-2xl md:text-4xl">
                Conversations that never <span className="accent-italic">leave the Sultanate</span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Chats are processed and stored on infrastructure inside Oman,
                end to end. No mirroring abroad, no offshore analytics, and full
                alignment with the Personal Data Protection Law.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Landmark, label: "Kept on Omani soil" },
                { icon: Lock, label: "Encrypted in transit and at rest" },
                { icon: ShieldCheck, label: "PDPL, Royal Decree 6/2022" },
                { icon: Database, label: "No offshore copies" },
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

      {/* ── Install CTA ── */}
      <section className="border-b border-border py-16 md:py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-5xl">
            Visitors are on your site right now, <span className="text-lime">asking nobody.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Give us the domain and we do the rest: review the site, connect the
            material you approve, and switch the chatbot on. Setup takes minutes,
            not a project plan.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-a-demo/"
              className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
            >
              Put it on my site <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Faq items={chatbotFaqs} sub="What Omani teams ask before switching it on." />

      <CtaBanner />
    </>
  );
}
