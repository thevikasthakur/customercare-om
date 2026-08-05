import { Mail, MessageSquare, Phone } from "lucide-react";

/**
 * Shared band highlighting cross-channel context continuity:
 * one customer, one memory, across channels, agents, and visits.
 * Used on all four product pages.
 */
export default function ContextContinuity() {
  const hops = [
    {
      icon: MessageSquare,
      channel: "WhatsApp · Tuesday",
      text: "Amal asks about the grey majlis sofa and its delivery cost to Al Khoudh.",
    },
    {
      icon: Phone,
      channel: "Phone · Wednesday",
      text: "“Salaam Amal, continuing from your WhatsApp chat: the grey sofa is reserved. Shall I book Thursday delivery?”",
    },
    {
      icon: Mail,
      channel: "Email · Thursday",
      text: "Confirmation arrives with the same order, the same history, and nothing asked twice.",
    },
  ];

  return (
    <section
      className="hatch-gutters border-b border-border py-16 md:py-24"
      style={{
        backgroundImage:
          "radial-gradient(70% 45% at 50% 112%, rgba(212,255,79,0.3) 0%, rgba(212,255,79,0) 60%), linear-gradient(180deg, #0A0B0F 0%, #161C03 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow">One customer, one memory</p>
        <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">
          Context follows your customer,{" "}
          <span className="accent-italic">not the channel</span>.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
          A customer who chats today, calls tomorrow, and emails next week is
          recognised as the same person every time. Context is preserved across
          channels, across agents, and across visits, so nobody repeats their
          story and the conversation always moves forward.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {hops.map((h, i) => (
            <div key={h.channel} className="relative border border-border bg-ink-2/95 p-7">
              <span className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime">
                  <h.icon className="h-4 w-4 text-ink" aria-hidden />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-lime">
                  {h.channel}
                </span>
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              {i < hops.length - 1 && (
                <span
                  className="absolute -right-4 top-1/2 hidden h-px w-4 bg-lime md:block"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Recognised across channels",
            "Recognised across visits",
            "Recognised across agents",
            "One profile, one history",
          ].map((b) => (
            <span
              key={b}
              className="border border-line-strong bg-ink-2 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
