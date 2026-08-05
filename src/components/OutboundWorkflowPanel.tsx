import {
  Braces,
  CalendarCheck,
  Clock,
  GitBranch,
  Mail,
  PhoneCall,
  Sparkles,
  Ticket,
  User,
  Workflow,
  Zap,
} from "lucide-react";

const steps = [
  { icon: Zap, label: "Trigger" },
  { icon: Sparkles, label: "AI Step" },
  { icon: GitBranch, label: "Condition" },
  { icon: PhoneCall, label: "AI Call" },
  { icon: Mail, label: "Email" },
  { icon: Braces, label: "Code" },
  { icon: Ticket, label: "Ticket" },
  { icon: Clock, label: "Delay" },
];

function Node({
  icon: Icon,
  title,
  sub,
  chip,
  chipTone = "lime",
}: {
  icon: React.ElementType;
  title: string;
  sub: React.ReactNode;
  chip?: string;
  chipTone?: "lime" | "amber" | "neutral";
}) {
  const tones = {
    lime: "bg-lime/20 text-neutral-800",
    amber: "bg-amber-100 text-amber-800",
    neutral: "bg-neutral-100 text-neutral-600",
  } as const;
  return (
    <div className="w-full rounded-lg border border-black/10 bg-white p-3 text-left shadow-sm">
      <p className="flex items-center gap-1.5 text-[13px] font-semibold text-neutral-800">
        <Icon className="h-3.5 w-3.5 text-neutral-500" aria-hidden />
        {title}
      </p>
      <p className="mt-1 text-[11px] text-neutral-500">{sub}</p>
      {chip && (
        <span className={`mt-2 inline-block rounded px-1.5 py-0.5 text-[10px] font-medium ${tones[chipTone]}`}>
          {chip}
        </span>
      )}
    </div>
  );
}

function Connector() {
  return <span className="mx-auto block h-4 w-px bg-neutral-300" aria-hidden />;
}

export default function OutboundWorkflowPanel() {
  return (
    <section className="border-b border-border py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden border border-line-strong p-6 md:p-12"
          style={{
            backgroundImage:
              "radial-gradient(75% 85% at 50% 118%, rgba(212,255,79,0.5) 0%, rgba(212,255,79,0.12) 50%, rgba(212,255,79,0) 72%), linear-gradient(180deg, #10140A 0%, #1A2004 55%, #3A4A08 100%)",
          }}
        >
          <div className="overflow-clip rounded-[1.25rem] border border-black/10 bg-white shadow-2xl shadow-black/60">
            {/* breadcrumb header */}
            <div className="flex items-center gap-2 border-b border-black/10 px-5 py-3 text-[13px]">
              <Workflow className="h-4 w-4 text-neutral-400" aria-hidden />
              <span className="text-neutral-400">Workflows</span>
              <span className="text-neutral-300">/</span>
              <span className="font-semibold text-neutral-800">Outbound Calling Campaign</span>
            </div>
            <div className="grid md:grid-cols-[11rem_1fr]">
              {/* steps sidebar */}
              <aside className="hidden border-r border-black/10 p-4 md:block">
                <p className="px-1 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-400">
                  Steps
                </p>
                <ul className="mt-3 space-y-2">
                  {steps.map((s) => (
                    <li
                      key={s.label}
                      className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-[12px] font-medium text-neutral-700 shadow-sm"
                    >
                      <s.icon className="h-3.5 w-3.5 text-lime" aria-hidden />
                      {s.label}
                    </li>
                  ))}
                </ul>
              </aside>
              {/* canvas */}
              <div
                className="relative p-6 md:p-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              >
                {/* floating context chips */}
                <div className="absolute right-6 top-8 hidden flex-col gap-3 lg:flex">
                  {[
                    { icon: User, label: "Amal Al Busaidi · Muscat" },
                    { icon: Sparkles, label: "Score 87 · High intent" },
                    { icon: GitBranch, label: "3 paths evaluated" },
                  ].map((c) => (
                    <span
                      key={c.label}
                      className="flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-3 py-2 text-[11px] font-medium text-neutral-700 shadow-sm"
                    >
                      <c.icon className="h-3.5 w-3.5 text-neutral-500" aria-hidden />
                      {c.label}
                    </span>
                  ))}
                </div>

                <div className="mx-auto flex max-w-3xl flex-col items-center lg:max-w-2xl lg:-translate-x-8">
                  <div className="w-64">
                    <span className="mb-1 inline-block rounded bg-lime px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-ink">
                      Trigger
                    </span>
                    <Node
                      icon={Zap}
                      title="New lead created"
                      sub={
                        <>
                          Source <code className="rounded bg-neutral-100 px-1">CRM</code>
                        </>
                      }
                    />
                  </div>
                  <Connector />
                  <div className="w-64">
                    <Node
                      icon={Sparkles}
                      title="AI lead scoring"
                      sub={
                        <>
                          Update <code className="rounded bg-neutral-100 px-1">contact.lead_score</code>
                        </>
                      }
                    />
                  </div>
                  <Connector />
                  <div className="w-64">
                    <Node
                      icon={GitBranch}
                      title="Field branch"
                      sub={
                        <>
                          Branch on <code className="rounded bg-neutral-100 px-1">lead_score</code>
                        </>
                      }
                    />
                  </div>
                  <Connector />
                  {/* branches */}
                  <div className="grid w-full gap-4 md:grid-cols-3">
                    <div>
                      <p className="mb-1.5 text-center">
                        <span className="rounded-full border border-lime bg-lime/15 px-2 py-0.5 text-[10px] font-medium text-neutral-700">
                          Score 80 and above
                        </span>
                      </p>
                      <Node
                        icon={PhoneCall}
                        title="AI outbound call"
                        sub="Personalised, live context"
                        chip="Connected · 3m 40s"
                        chipTone="lime"
                      />
                    </div>
                    <div>
                      <p className="mb-1.5 text-center">
                        <span className="rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-800">
                          Score 40 to 79
                        </span>
                      </p>
                      <Node
                        icon={Mail}
                        title="Send email"
                        sub={
                          <>
                            Template <code className="rounded bg-neutral-100 px-1">warm_intro</code>
                          </>
                        }
                        chip="Opened · clicked"
                        chipTone="neutral"
                      />
                    </div>
                    <div>
                      <p className="mb-1.5 text-center">
                        <span className="rounded-full border border-neutral-300 bg-neutral-50 px-2 py-0.5 text-[10px] font-medium text-neutral-600">
                          Score below 40
                        </span>
                      </p>
                      <Node
                        icon={Ticket}
                        title="Create ticket"
                        sub="Assign to nurture queue"
                        chip="Ticket #4821 · open"
                        chipTone="amber"
                      />
                    </div>
                  </div>
                  {/* second row */}
                  <div className="mt-4 grid w-full gap-4 md:max-w-[68%] md:grid-cols-2 md:self-start">
                    <Node
                      icon={CalendarCheck}
                      title="Book appointment"
                      sub="Warm transfer plus calendar"
                      chip="Thu · 10:30 AM"
                      chipTone="lime"
                    />
                    <Node
                      icon={Braces}
                      title="Run code"
                      sub={
                        <>
                          Call <code className="rounded bg-neutral-100 px-1">enrich_contact()</code>
                        </>
                      }
                      chip="200 OK · 142ms"
                      chipTone="neutral"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="mt-10 grid grid-cols-2 divide-x divide-[rgba(212,255,79,0.28)] border-y border-[rgba(212,255,79,0.28)] md:grid-cols-4">
          {[
            { v: "68%", l: "Average answer rate" },
            { v: "3x", l: "Higher than generic scripts" },
            { v: "1,000s", l: "Calls per hour at campaign scale" },
            { v: "24/7", l: "Always available" },
          ].map((s) => (
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
  );
}
