import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { PageHero, CardGrid, CheckList, CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "Build voice into your applications with VoxCare's REST APIs, webhooks, and SDKs, with data residency in Oman by default.",
};

export default function DeveloperPage() {
  return (
    <>
      <PageHero
        badge="Developers"
        title="Build voice into your applications"
        sub="REST APIs, webhooks, and SDKs for every part of the call lifecycle, from placing outbound calls to streaming live transcripts. All requests served from Oman."
      />
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Build your way</h2>
          <CardGrid
            items={[
              {
                title: "REST API",
                desc: "Create agents, provision numbers, start calls, and fetch transcripts with a clean, versioned JSON API.",
              },
              {
                title: "Webhooks",
                desc: "Receive real-time events for call started, ended, booked, escalated, and more, signed and replayable.",
              },
              {
                title: "Streaming transcripts",
                desc: "Subscribe to live word-by-word transcripts over WebSocket for supervision dashboards and compliance tooling.",
              },
              {
                title: "SDKs",
                desc: "Official TypeScript and Python SDKs with typed models, retries, and pagination handled for you.",
              },
              {
                title: "Sandbox environment",
                desc: "A full test environment with simulated callers in all nine languages, so CI never touches production lines.",
              },
              {
                title: "Data-residency guarantees",
                desc: "Every API region is inside Oman. Latency from Muscat averages under 15ms, and Personal Data Protection Law compliance is inherited by your app.",
              },
            ]}
          />
        </div>
      </section>
      <section className="py-16 bg-muted/40 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Industry-specific fine-tuned models
          </h2>
          <CheckList
            items={[
              "Banking & finance: IBAN, card, and Central Bank of Oman terminology",
              "Healthcare: appointment triage aligned with MoH clinic workflows",
              "Logistics: Omani address and wilayat comprehension",
              "Real estate: rental and Mulkiya vocabulary in Arabic and English",
              "Government services: formal register for ministry helplines",
              "Retail: OMR pricing, baisa amounts, and khareef-season promotions",
            ]}
          />
          <div className="mt-10 text-center">
            <Link
              href={site.docsUrl}
              className="inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
