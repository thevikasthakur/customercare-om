import Link from "next/link";
import type { Block, Segment, TableCell } from "@/lib/articles";

/**
 * Renders the block-based article body. Everything is plain React output,
 * so every string the generator produced is escaped by default; there is
 * deliberately no dangerouslySetInnerHTML anywhere in the blog. The visual
 * system lives in globals.css under `.prose-article`.
 */

function SegmentSpan({ segment }: { segment: Segment }) {
  let node: React.ReactNode = segment.text;
  if (segment.strong) node = <strong>{node}</strong>;
  if (segment.emphasis) node = <em>{node}</em>;
  if (segment.href) {
    const external = segment.href.startsWith("http");
    node = external ? (
      <a href={segment.href} target="_blank" rel="noopener noreferrer">
        {node}
      </a>
    ) : (
      <Link href={segment.href}>{node}</Link>
    );
  }
  return <>{node}</>;
}

function Segments({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((s, i) => (
        <SegmentSpan key={i} segment={s} />
      ))}
    </>
  );
}

const CALLOUT_LABEL: Record<string, string> = {
  key: "Key point",
  note: "Note",
  tip: "Try this",
  brand: "Where CustomerCare.OM fits",
};

function cellValue(cell: TableCell): { text: string; note?: string } {
  return typeof cell === "string" ? { text: cell } : cell;
}

function ArticleTable({ block }: { block: Extract<Block, { type: "table" }> }) {
  // Cell notes become numbered footnotes under the table.
  const notes: string[] = [];
  const noteIndex = new Map<string, number>();
  for (const row of block.rows) {
    for (const cell of row) {
      const { note } = cellValue(cell);
      if (note && !noteIndex.has(note)) {
        notes.push(note);
        noteIndex.set(note, notes.length);
      }
    }
  }
  return (
    <figure className="article-table article-breakout">
      <div className="article-table-scroll">
        <table>
          {block.caption && <caption>{block.caption}</caption>}
          <thead>
            <tr>
              {block.headers.map((h) => (
                <th key={h} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => {
                  const { text, note } = cellValue(cell);
                  const marker = note && (
                    <sup className="article-table-note-marker" aria-label={`footnote ${noteIndex.get(note)}`}>
                      {noteIndex.get(note)}
                    </sup>
                  );
                  return c === 0 ? (
                    <th key={c} scope="row">
                      {text}
                      {marker}
                    </th>
                  ) : (
                    <td key={c}>
                      {text}
                      {marker}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {notes.length > 0 && (
        <ol className="article-table-footnotes">
          {notes.map((note) => (
            <li key={note}>
              <span aria-hidden>{noteIndex.get(note)}</span>
              <span>{note}</span>
            </li>
          ))}
        </ol>
      )}
    </figure>
  );
}

function FaqBlock({ block }: { block: Extract<Block, { type: "faq" }> }) {
  return (
    <div className="my-10 divide-y divide-[rgba(212,255,79,0.18)] border-t border-b border-[rgba(212,255,79,0.18)]">
      {block.items.map((item, i) => (
        <details key={item.q} className="group py-4" open={i === 0}>
          <summary className="flex cursor-pointer items-center justify-between text-base font-medium list-none text-foreground">
            {item.q}
            <span className="ml-4 shrink-0 text-2xl leading-none text-lime transition-transform group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="text-[1rem] leading-relaxed text-[rgba(244,244,240,0.85)]">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-article">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "lead":
            return (
              <p key={i} className="article-lead">
                {block.text}
              </p>
            );
          case "heading":
            return block.level === 2 ? (
              <h2 key={i} id={block.id}>
                {block.text}
              </h2>
            ) : (
              <h3 key={i} id={block.id}>
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={i}>
                <Segments segments={block.segments} />
              </p>
            );
          case "list": {
            const items = block.items.map((item, j) => (
              <li key={j}>
                <Segments segments={item} />
              </li>
            ));
            return block.ordered ? <ol key={i}>{items}</ol> : <ul key={i}>{items}</ul>;
          }
          case "quote":
            return (
              <figure key={i} className="article-quote">
                <blockquote>{block.quote}</blockquote>
                <figcaption>
                  {block.sourceUrl ? (
                    <a href={block.sourceUrl} target="_blank" rel="noopener noreferrer">
                      {block.attribution}
                    </a>
                  ) : (
                    <>
                      {block.attribution}
                      {block.persona && <span> · composite voice</span>}
                    </>
                  )}
                </figcaption>
              </figure>
            );
          case "highlight":
            return (
              <p key={i} className="article-highlight">
                {block.text}
              </p>
            );
          case "callout":
            return (
              <aside key={i} className={`article-callout article-callout-${block.tone}`}>
                <span className="article-callout-label">{CALLOUT_LABEL[block.tone] ?? "Note"}</span>
                <h3>{block.title}</h3>
                {block.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </aside>
            );
          case "table":
            return <ArticleTable key={i} block={block} />;
          case "faq":
            return <FaqBlock key={i} block={block} />;
          case "divider":
            return <hr key={i} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
