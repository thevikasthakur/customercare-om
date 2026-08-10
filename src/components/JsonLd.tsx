/**
 * Emits a schema.org JSON-LD block. Kept as a component so every page that
 * needs structured data produces identically shaped, minified output.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
