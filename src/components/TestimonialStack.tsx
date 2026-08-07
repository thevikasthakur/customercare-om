import Image from "next/image";

const testimonials = [
  {
    pre: "We compared every AI voice platform we could reach from Muscat. Across Omani Arabic comprehension, integrations, workflows, and reporting, ",
    bold: "nothing else came close.",
    initials: "SD",
    role: "Service Delivery Director",
    org: "Gulf BPO group",
    tint: "linear-gradient(180deg, #F7FBE8 0%, #E9F5C2 55%, #D6EC8F 100%)",
    img: "/media/testimonial-1.webp",
  },
  {
    pre: "Our agents used to lose evenings to routine bookings and directions. AI Customer Care now clears ",
    bold: "hundreds of calls a day",
    post: " and hands our team only the conversations that need a human.",
    initials: "GE",
    role: "Head of Guest Experience",
    org: "Hospitality group, Muscat",
    tint: "linear-gradient(180deg, #FBFDF2 0%, #EFF7D3 55%, #DFF0A6 100%)",
    img: "/media/testimonial-2.webp",
  },
  {
    pre: "We were skeptical AI could carry a khareef-season surge in Salalah. It answered every single call, in five languages, and ",
    bold: "booked more than our best week on record.",
    initials: "OD",
    role: "Operations Director",
    org: "National automotive group",
    tint: "linear-gradient(180deg, #F4FAE4 0%, #E4F2B5 55%, #CFE97D 100%)",
    img: "/media/testimonial-3.webp",
  },
];

export default function TestimonialStack({ limit = 3 }: { limit?: number }) {
  return (
    <div className="space-y-6">
      {testimonials.slice(0, limit).map((t, i) => (
        <figure
          key={i}
          className="grid overflow-clip rounded-[1.25rem] border border-black/10 shadow-[0_1px_4px_rgba(12,12,13,0.05)] md:grid-cols-[1.5fr_1fr]"
          style={{ background: t.tint }}
        >
          <div className="flex flex-col justify-between gap-10 p-8 md:p-10">
            <blockquote className="max-w-md text-2xl md:text-[1.75rem] leading-[1.3] tracking-tight text-neutral-900">
              &ldquo;{t.pre}
              <strong className="font-semibold">{t.bold}</strong>
              {t.post ?? ""}&rdquo;
            </blockquote>
            <figcaption>
              <span className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[11px] font-semibold text-lime">
                  {t.initials}
                </span>
                <span className="text-sm font-semibold text-neutral-900">{t.role}</span>
              </span>
              <span className="mt-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
                {t.org}
              </span>
            </figcaption>
          </div>
          <div className="hidden p-5 md:block">
            <Image
              src={t.img}
              alt="Customer portrait (placeholder visual)"
              width={640}
              height={640}
              className="h-full max-h-[26rem] w-full rounded-xl object-cover"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
