import { site } from "@/data/site";

/**
 * Shared brand signature for customercare.om and chatbot.om: the name in
 * the Fraunces display face, and the ".OM" domain set as a lime keycap
 * chip in mono caps. Both sites render the identical treatment.
 */
export default function Wordmark({ className = "" }: { className?: string }) {
  const name = site.name.replace(/\.om$/i, "");
  return (
    <span className={`inline-flex items-baseline gap-1 ${className}`}>
      <span className="font-display text-xl font-semibold tracking-tight leading-none text-foreground">
        {name}
      </span>
      <span
        className="bg-lime px-[5px] py-[3px] font-mono text-[10px] font-bold leading-none tracking-[0.14em] text-ink"
        aria-hidden="false"
      >
        .OM
      </span>
    </span>
  );
}
