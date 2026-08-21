"use client";

import { useMemo, useState } from "react";
import { NewsCard } from "@/components/NewsCard";
import { contentTypes, news, type NewsItem } from "@/data/site";

const extra: NewsItem[] = [
  { id: "install", category: "Installation instructions", title: "Pre-assembled tie rod: installation in three steps", image: "/images/news/zinc.jpg", href: "/content" },
  { id: "video", category: "Videos", title: "HD control arm replacement – no squeaking noises", image: "/images/news/air-suspension.jpg", href: "/content" },
  { id: "whitepaper", category: "Whitepapers", title: "Data quality in the independent aftermarket", image: "/images/news/filters.jpg", href: "/content" },
];

const items = [...news, ...extra];

export function ContentBrowser() {
  const [type, setType] = useState<(typeof contentTypes)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      items.filter((item) => {
        const matchesType = type === "All" || item.category.toLowerCase().includes(type.toLowerCase().replace(/s$/, ""));
        const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
        return matchesType && matchesQuery;
      }),
    [type, query],
  );

  return (
    <div className="mx-auto max-w-[1680px]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {contentTypes.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setType(item)}
              className={`h-11 px-4 text-[11px] font-semibold uppercase tracking-[0.14em] ${
                type === item ? "bg-navy text-white" : "border border-line/20"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search content..."
          className="h-12 w-full border border-line/20 px-4 lg:w-80"
          aria-label="Search content hub"
        />
      </div>
      <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
