import type { MetadataRoute } from "next";
import { site, footerNav } from "@/data/site";
import { industries } from "@/data/industries";
import { integrations } from "@/data/integrations";
import { templates } from "@/data/templates";
import { features } from "@/data/features";
import { learnArticles } from "@/data/learn";
import { getPublishedArticles, getSeriesList } from "@/lib/articles";

export const dynamic = "force-static";

const productHrefs = footerNav[0].links.map((l) => l.href);

// Utility and orphan routes stay out of the sitemap: they are noindex,
// transactional, or not linked from anywhere in the site.
const excluded = new Set([
  "/product/",
  "/thank-you/",
  "/demo-confirmed/",
  "/book-for-conference/",
  "/book-for-conference-v2/",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const articles = getPublishedArticles();

  const entries: { path: string; priority: number; lastModified?: Date; changeFrequency?: "daily" | "monthly" }[] = [
    { path: "/", priority: 1 },
    ...productHrefs.map((path) => ({ path, priority: 0.9 })),
    { path: "/enterprise/", priority: 0.9 },
    { path: "/industries/", priority: 0.8 },
    { path: "/features/", priority: 0.8 },
    { path: "/template/", priority: 0.7 },
    { path: "/integration/", priority: 0.7 },
    { path: "/guideline/oman/", priority: 0.7 },
    { path: "/comparison/", priority: 0.7 },
    { path: "/blog/", priority: 0.8, changeFrequency: "daily" },
    { path: "/book-a-demo/", priority: 0.8 },
    { path: "/contact/", priority: 0.6 },
    { path: "/about/", priority: 0.6 },
    ...industries.map((i) => ({ path: `/industries/${i.slug}/`, priority: 0.7 })),
    ...features.map((f) => ({ path: `/features/${f.slug}/`, priority: 0.6 })),
    ...templates.map((t) => ({ path: `/template/${t.slug}/`, priority: 0.6 })),
    ...integrations.map((i) => ({ path: `/integration/${i.slug}/`, priority: 0.5 })),
    ...learnArticles.map((a) => ({ path: `/learn/voice-ai/${a.slug}/`, priority: 0.5 })),
    ...getSeriesList().map((s) => ({
      path: `/blog/series/${s.slug}/`,
      priority: 0.6,
      changeFrequency: "daily" as const,
    })),
    ...articles.map((a) => ({
      path: `/blog/${a.slug}/`,
      priority: 0.7,
      lastModified: new Date(`${a.modifiedDate}T00:00:00Z`),
    })),
  ];

  return entries
    .filter((e) => !excluded.has(e.path))
    .map((e) => ({
      url: `${site.url}${e.path}`,
      lastModified: e.lastModified ?? lastModified,
      changeFrequency: e.changeFrequency ?? ("monthly" as const),
      priority: e.priority,
    }));
}
