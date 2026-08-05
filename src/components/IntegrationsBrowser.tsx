"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";

export type IntegrationCard = {
  slug: string;
  name: string;
  category: string;
  logo?: string;
};

export default function IntegrationsBrowser({ items }: { items: IntegrationCard[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  );
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"az" | "za">("az");

  const shown = useMemo(() => {
    let list = items.filter(
      (i) =>
        (cat === "All" || i.category === cat) &&
        i.name.toLowerCase().includes(q.trim().toLowerCase())
    );
    list = [...list].sort((a, b) =>
      sort === "az" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    return list;
  }, [items, cat, q, sort]);

  return (
    <>
      {/* search / sort bar */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <label className="flex flex-1 min-w-56 max-w-md items-center gap-2 border border-border bg-ink-2 px-3 h-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              Search
            </span>
            <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search all integrations..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
            />
          </label>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em]">Sort by</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as "az" | "za")}
              className="h-10 border border-border bg-ink-2 px-3 text-sm text-foreground outline-none"
            >
              <option value="az">A → Z</option>
              <option value="za">Z → A</option>
            </select>
          </label>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-10 lg:grid-cols-[13rem_1fr]">
          {/* filters */}
          <aside>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Filters
            </p>
            <ul className="mt-4 space-y-1 border-l border-border">
              {categories.map((c) => (
                <li key={c}>
                  <button
                    onClick={() => setCat(c)}
                    className={`block w-full border-l-2 px-4 py-1.5 text-left text-sm transition-colors ${
                      cat === c
                        ? "border-lime text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                    aria-pressed={cat === c}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* grid */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((i) => (
                <div
                  key={i.slug}
                  className="flex flex-col rounded-[1.25rem] border border-black/10 bg-white p-5 shadow-[0_1px_4px_rgba(12,12,13,0.05)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg border border-black/10 bg-white">
                      {i.logo ? (
                        <Image
                          src={`/media/${i.logo}`}
                          alt=""
                          width={44}
                          height={44}
                          className="h-8 w-8 object-contain"
                          aria-hidden
                        />
                      ) : (
                        <span className="text-sm font-bold text-neutral-700">
                          {i.name[0]}
                        </span>
                      )}
                    </span>
                    <span className="rounded-full border border-black/10 bg-neutral-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-neutral-500">
                      {i.category}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-neutral-900">{i.name}</h3>
                  <Link
                    href={`/integration/${i.slug}/`}
                    className="mt-4 inline-flex h-9 w-fit items-center gap-2 bg-ink px-4 text-xs font-medium text-white hover:bg-ink-3 transition-colors"
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5 text-lime" aria-hidden />
                  </Link>
                </div>
              ))}
            </div>
            {shown.length === 0 && (
              <p className="py-16 text-center text-sm text-muted-foreground">
                No integrations match &ldquo;{q}&rdquo; in {cat}.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
