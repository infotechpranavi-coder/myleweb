"use client";

import { useMemo, useState } from "react";
import { NewsCard } from "@/components/NewsCard";
import { contentTypes } from "@/data/site";
import { newsArticles, type NewsItem } from "@/data/news";

const extra: NewsItem[] = [
  {
    id: "install",
    slug: "pre-assembled-tie-rod-installation",
    category: "Installation instructions",
    title: "Pre-assembled tie rod: installation in three steps",
    image: "/images/meyle/workshops/highlights/04-tie-rod.webp",
    href: "/content/installation-instructions",
    excerpt: "A practical guide to installing pre-assembled MEYLE tie rods.",
    date: "10.11.2025",
    body: [] as NewsItem["body"],
  },
  {
    id: "video",
    slug: "hd-control-arm-replacement",
    category: "Videos",
    title: "MEYLE HD control arms for Tesla Model 3 and Model Y",
    image: "/images/meyle/workshops/mega-tesla-hd.webp",
    href: "/content/videos",
    excerpt: "Watch how MEYLE HD control arms solve common squeaking issues.",
    date: "02.10.2025",
    body: [] as NewsItem["body"],
  },
  {
    id: "whitepaper",
    slug: "data-quality-in-the-iam",
    category: "Whitepapers",
    title: "Data quality in the independent aftermarket",
    image: "/images/meyle/workshops/data.webp",
    href: "/content/not-all-filters-are-the-same-how-do-you-find-the-right-one",
    excerpt: "Why precise product data reduces returns and downtime.",
    date: "18.09.2025",
    body: [] as NewsItem["body"],
  },
];

const items = [...newsArticles, ...extra];

export function ContentBrowser({
  initialType = "All",
}: {
  initialType?: (typeof contentTypes)[number];
}) {
  const [type, setType] = useState<(typeof contentTypes)[number]>(initialType);
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      items.filter((item) => {
        const matchesType =
          type === "All" ||
          item.category.toLowerCase().includes(
            type.toLowerCase().replace(/s$/, ""),
          );
        const matchesQuery = item.title
          .toLowerCase()
          .includes(query.toLowerCase());
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
      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {filtered.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
