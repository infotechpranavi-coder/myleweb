"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/cn";
import {
  contentHubItems,
  contentHubTopics,
  contentHubTypes,
  type ContentHubItem,
} from "@/data/installationInstructions";

const PAGE_SIZE = 12;

export function ContentHubBrowser({
  initialContentType = "All",
  items = contentHubItems,
}: {
  initialContentType?: (typeof contentHubTypes)[number];
  items?: ContentHubItem[];
}) {
  const [query, setQuery] = useState("");
  const [topicOpen, setTopicOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [topic, setTopic] = useState<(typeof contentHubTopics)[number]>("All");
  const [contentType, setContentType] =
    useState<(typeof contentHubTypes)[number]>(initialContentType);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesTopic = topic === "All" || item.topic === topic;
      const matchesType =
        contentType === "All" || item.contentType === contentType;
      const matchesQuery =
        !query.trim() ||
        item.title.toLowerCase().includes(query.toLowerCase());
      return matchesTopic && matchesType && matchesQuery;
    });
  }, [items, topic, contentType, query]);

  const shown = filtered.slice(0, visible);
  const activeFilters: { label: string; clear: () => void }[] = [];
  if (contentType !== "All") {
    activeFilters.push({
      label: contentType,
      clear: () => setContentType("All"),
    });
  }
  if (topic !== "All") {
    activeFilters.push({
      label: topic,
      clear: () => setTopic("All"),
    });
  }

  return (
    <div className="mx-auto max-w-[1680px]">
      <div className="border border-[#d9dde3] bg-white">
        <div className="flex flex-col border-b border-[#d9dde3] lg:flex-row">
          <label className="flex flex-1 items-center gap-3 px-5 py-4">
            <span className="sr-only">Search</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-deep-navy"
              fill="none"
              aria-hidden
            >
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="Enter search term"
              className="w-full bg-transparent text-[15px] text-deep-navy outline-none placeholder:text-muted"
            />
          </label>
          <button
            type="button"
            className="border-t border-[#d9dde3] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-deep-navy lg:border-l lg:border-t-0"
          >
            Search
          </button>
        </div>

        <div className="grid border-b border-[#d9dde3] lg:grid-cols-[auto_1fr_1fr]">
          <div className="flex items-center border-b border-[#d9dde3] px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-deep-navy lg:border-b-0 lg:border-r">
            Filter
          </div>

          <div className="relative border-b border-[#d9dde3] lg:border-b-0 lg:border-r">
            <button
              type="button"
              onClick={() => {
                setTopicOpen((o) => !o);
                setTypeOpen(false);
              }}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-[12px] font-semibold uppercase tracking-[0.14em] text-deep-navy"
            >
              Topic{topic !== "All" ? " (1)" : ""}
              <span aria-hidden className="text-[10px]">
                ▾
              </span>
            </button>
            {topicOpen ? (
              <div className="absolute left-0 right-0 z-20 max-h-72 overflow-auto border border-[#d9dde3] bg-white shadow-lg">
                {contentHubTopics.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setTopic(option);
                      setTopicOpen(false);
                      setVisible(PAGE_SIZE);
                    }}
                    className={cn(
                      "block w-full px-5 py-3 text-left text-[14px] hover:bg-off-white",
                      topic === option
                        ? "font-semibold text-deep-navy"
                        : "text-text/80",
                    )}
                  >
                    {option}
                  </button>
                ))}
                <button
                  type="button"
                  className="w-full border-t border-[#d9dde3] bg-deep-navy px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white"
                  onClick={() => setTopicOpen(false)}
                >
                  Apply
                </button>
              </div>
            ) : null}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setTypeOpen((o) => !o);
                setTopicOpen(false);
              }}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-[12px] font-semibold uppercase tracking-[0.14em] text-deep-navy"
            >
              Content type{contentType !== "All" ? " (1)" : ""}
              <span aria-hidden className="text-[10px]">
                ▾
              </span>
            </button>
            {typeOpen ? (
              <div className="absolute left-0 right-0 z-20 max-h-72 overflow-auto border border-[#d9dde3] bg-white shadow-lg">
                {contentHubTypes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setContentType(option);
                      setTypeOpen(false);
                      setVisible(PAGE_SIZE);
                    }}
                    className={cn(
                      "block w-full px-5 py-3 text-left text-[14px] hover:bg-off-white",
                      contentType === option
                        ? "font-semibold text-deep-navy"
                        : "text-text/80",
                    )}
                  >
                    {option}
                  </button>
                ))}
                <button
                  type="button"
                  className="w-full border-t border-[#d9dde3] bg-deep-navy px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white"
                  onClick={() => setTypeOpen(false)}
                >
                  Apply
                </button>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
            View:
            <button
              type="button"
              onClick={() => setView("grid")}
              className={cn(
                "px-1 py-0.5",
                view === "grid"
                  ? "text-deep-navy underline underline-offset-4"
                  : "hover:text-deep-navy",
              )}
              aria-pressed={view === "grid"}
            >
              Grid
            </button>
            <button
              type="button"
              onClick={() => setView("list")}
              className={cn(
                "px-1 py-0.5",
                view === "list"
                  ? "text-deep-navy underline underline-offset-4"
                  : "hover:text-deep-navy",
              )}
              aria-pressed={view === "list"}
            >
              List
            </button>
          </div>
          {activeFilters.length || query ? (
            <button
              type="button"
              className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted hover:text-deep-navy"
              onClick={() => {
                setQuery("");
                setTopic("All");
                setContentType("All");
                setVisible(PAGE_SIZE);
              }}
            >
              Reset filter
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4 border-b border-[#d9dde3] pb-8">
        <p className="font-sans text-[clamp(2rem,3.5vw,3.25rem)] font-normal leading-none tracking-[-0.02em] text-deep-navy">
          {filtered.length} Contents
        </p>
        {activeFilters.map((filter) => (
          <button
            key={filter.label}
            type="button"
            onClick={filter.clear}
            className="inline-flex items-center gap-2 rounded-full bg-deep-navy px-4 py-2 text-[13px] text-white"
          >
            {filter.label}
            <span aria-hidden className="text-[15px] leading-none">
              ×
            </span>
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <div className="mt-12 px-2 py-14 text-center">
          <h2 className="font-sans text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-deep-navy">
            Unfortunately no hit. Time for an inspection?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-muted">
            Sorry, we could not find any matching results for your search. Please
            check your search terms or contact us.
          </p>
        </div>
      ) : view === "grid" ? (
        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((item) => (
            <HubCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="mt-10 divide-y divide-[#d9dde3] border border-[#d9dde3] bg-white">
          {shown.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="grid gap-4 p-5 transition-colors hover:bg-off-white sm:grid-cols-[160px_1fr_auto] sm:items-center"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-deep-navy">
                <SmartImage
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div>
                <p className="text-[13px] text-muted">
                  {item.contentType} · {item.date}
                </p>
                <p className="mt-2 text-[18px] font-semibold text-deep-navy">
                  {item.title}
                </p>
                {item.itemCount != null ? (
                  <p className="mt-1 text-[14px] text-muted">
                    {itemCountLabel(item.itemCount)}
                  </p>
                ) : null}
              </div>
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      )}

      {visible < filtered.length ? (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((n) => n + PAGE_SIZE)}
            className="border border-deep-navy px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-deep-navy transition-colors hover:bg-deep-navy hover:text-white"
          >
            Load more articles
          </button>
        </div>
      ) : null}

      <section className="mt-16 border-t border-[#d9dde3] pt-12">
        <h2 className="font-sans text-[clamp(1.5rem,2.8vw,2.1rem)] font-semibold text-deep-navy">
          IAM:Connect - Working together on the future
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-text/75">
          The platform for open dialog and forward-looking solutions.
        </p>
        <Link
          href="/content"
          className="mt-5 inline-flex text-[13px] font-medium text-deep-navy underline underline-offset-4"
        >
          More on the topic
        </Link>
      </section>
    </div>
  );
}

function itemCountLabel(count: number) {
  return count === 1 ? "1 Item number" : `${count} Item numbers`;
}

function HubCard({ item }: { item: ContentHubItem }) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        href={item.href}
        className="relative block aspect-[16/10] overflow-hidden bg-deep-navy"
      >
        <SmartImage
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1280px) 22vw, (min-width: 640px) 40vw, 100vw"
        />
      </Link>
      <div className="flex flex-1 flex-col pt-4">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex rounded-[6px] border border-deep-navy/40 px-2 py-1 text-[13px] text-deep-navy">
            {item.contentType}
          </span>
          <span className="shrink-0 text-[14px] text-muted">{item.date}</span>
        </div>
        <Link href={item.href}>
          <h3 className="mt-4 text-[20px] font-semibold leading-[1.25] tracking-[-0.01em] text-deep-navy group-hover:underline">
            {item.title}
          </h3>
        </Link>
        {item.itemCount != null ? (
          <p className="mt-3 text-[15px] text-muted">
            {itemCountLabel(item.itemCount)}
          </p>
        ) : null}
        <Link
          href={item.href}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-medium text-deep-navy"
        >
          Learn more
          <span aria-hidden className="text-[18px] leading-none">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
