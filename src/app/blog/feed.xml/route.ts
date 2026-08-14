import { site } from "@/data/site";
import { articlePlainText, getPublishedArticles } from "@/lib/articles";

export const dynamic = "force-static";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(dateStr: string): string {
  return new Date(`${dateStr}T05:00:00Z`).toUTCString();
}

export async function GET() {
  const articles = getPublishedArticles();
  const newest = articles[0];

  const items = articles
    .slice(0, 30)
    .map((a) => {
      const url = `${site.url}/blog/${a.slug}/`;
      const description = `${a.excerpt} ${articlePlainText(a).slice(0, 400)}`.trim();
      return [
        "    <item>",
        `      <title>${escapeXml(a.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${rfc822(a.publishDate)}</pubDate>`,
        `      <category>${escapeXml(a.series)}</category>`,
        `      <description>${escapeXml(description)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${site.name} Blog`)}</title>
    <link>${site.url}/blog/</link>
    <atom:link href="${site.url}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <description>${escapeXml(
      "Customer service in Oman, explained simply: rules, seasons and AI, one new read every day."
    )}</description>
    <language>en-om</language>
    ${newest ? `<lastBuildDate>${rfc822(newest.modifiedDate)}</lastBuildDate>` : ""}
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
