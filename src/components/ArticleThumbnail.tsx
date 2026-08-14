import type { Article } from "@/lib/articles";

/**
 * Card artwork for an article. Each generated SVG is kept in its own image
 * document: injecting model-authored SVGs inline would make their fragment
 * IDs (gradients are commonly all named "bg") global to the page, so one
 * card's gradient could repaint every other card, and inline SVG is a script
 * surface. A data: URI inside an <img> isolates the IDs and cannot execute
 * anything. Articles without artwork get a typographic tile in site colors.
 */
function svgToDataUri(svg: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function ArticleThumbnail({
  article,
  className = "",
}: {
  article: Pick<Article, "thumbnail" | "title" | "series">;
  className?: string;
}) {
  if (article.thumbnail) {
    return (
      <div className={`aspect-video overflow-hidden border-b border-border bg-ink-3 ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={svgToDataUri(article.thumbnail)}
          alt=""
          aria-hidden
          className="block h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className={`aspect-video overflow-hidden border-b border-border p-5 flex flex-col justify-end ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(90% 70% at 15% 110%, rgba(212,255,79,0.22) 0%, rgba(212,255,79,0) 60%), linear-gradient(160deg, #1a1d24 0%, #0a0b0f 80%)",
      }}
      aria-hidden
    >
      <p className="eyebrow !text-[0.6rem]">{article.series}</p>
      <p className="mt-2 font-display text-lg leading-snug text-foreground line-clamp-3">{article.title}</p>
    </div>
  );
}
