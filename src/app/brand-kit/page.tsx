import type { Metadata } from "next";
import { PhoneCall } from "lucide-react";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Brand Kit",
  description: "AI Customer Care logos, wordmarks, and brand usage guidelines.",
};

export default function BrandKitPage() {
  return (
    <>
      <PageHero
        badge="Brand Kit"
        title="AI Customer Care brand assets"
        sub="Logos, wordmarks, and the rules for using them. When in doubt, keep it monochrome and give it room to breathe."
        cta={false}
      />
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-background p-12 flex items-center justify-center gap-3">
              <PhoneCall className="h-10 w-10" aria-hidden />
              <span className="text-3xl font-bold tracking-tight">AI Customer Care</span>
            </div>
            <div className="rounded-2xl border bg-primary p-12 flex items-center justify-center gap-3 text-primary-foreground">
              <PhoneCall className="h-10 w-10" aria-hidden />
              <span className="text-3xl font-bold tracking-tight">AI Customer Care</span>
            </div>
          </div>
          <div className="prose-vox">
            <h2>Usage guidelines</h2>
            <ul>
              <li>Write the name as three words with initial capitals: AI Customer Care, never AI CustomerCare, AI CUSTOMER CARE, or aicustomercare.</li>
              <li>The wordmark is set in Inter Bold with tight tracking; do not stretch, recolour, or add effects.</li>
              <li>Primary palette is monochrome: near-black on white, or white on near-black in dark contexts.</li>
              <li>Maintain clear space around the mark equal to the height of the phone glyph.</li>
              <li>When mentioning the company in press, the first reference is &ldquo;AI Customer Care, the Omani Customer Service Voice AI provider.&rdquo;</li>
            </ul>
            <h2>Press &amp; partnership enquiries</h2>
            <p>
              Email salaam@customercare.om for vector files, screenshots, founder photos,
              and interview requests.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
