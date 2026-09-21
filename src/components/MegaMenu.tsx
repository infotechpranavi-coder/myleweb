"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/site";
import { cn } from "@/lib/cn";

type MegaMenuProps = {
  active: string | null;
};

export function MegaMenu({ active }: MegaMenuProps) {
  const pathname = usePathname();
  const item = mainNav.find((entry) => entry.label === active);

  if (!item) {
    return null;
  }

  const hasFeatured = item.columns.some((column) => column.layout === "featured");
  const hasTopics = item.columns.some((column) => column.layout === "topics");
  const listColumns = item.columns.filter(
    (column) => column.layout !== "featured" && column.layout !== "topics",
  );
  const isHub = hasTopics && listColumns.length >= 1 && item.columns.length > 1;
  const isListHub = !hasFeatured && !hasTopics && item.columns.length >= 2;
  const showPromo = !hasFeatured && !hasTopics && item.columns.length === 1;

  function isActiveHref(href: string) {
    const path = href.split("#")[0] || href;
    return path === pathname;
  }

  return (
    <div className="absolute left-0 right-0 top-full z-40 border-t border-line/15 bg-off-white">
      <div
        className={cn(
          "mx-auto max-w-[1600px] px-8 py-12 xl:px-12",
          isHub
            ? "grid gap-10 lg:grid-cols-[0.55fr_0.55fr_1.5fr] lg:gap-12"
            : hasTopics
              ? "grid gap-10 lg:grid-cols-[0.85fr_1.4fr] lg:gap-14"
              : hasFeatured
                ? "grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-16"
                : isListHub
                  ? "grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
                  : "grid grid-cols-2 gap-16 lg:grid-cols-3",
        )}
      >
        {item.columns.map((column, columnIndex) =>
          column.layout === "topics" ? (
            isHub ? (
              <div key={column.title} className="min-w-0">
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  {column.topicsTitle ?? column.title}
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  {(column.topics ?? []).map((topic) => (
                    <Link key={topic.href + topic.title} href={topic.href} className="group block">
                      <div className="relative aspect-[16/10] overflow-hidden bg-line/10">
                        <Image
                          src={topic.image}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 22vw"
                        />
                      </div>
                      <span className="mt-4 inline-flex border border-line/40 bg-white px-2.5 py-1 text-[11px] text-deep-navy">
                        {topic.tag}
                      </span>
                      <p className="mt-3 text-[15px] font-medium leading-snug text-deep-navy group-hover:underline">
                        {topic.title}
                      </p>
                    </Link>
                  ))}
                </div>
                {column.footerLink ? (
                  <Link
                    href={column.footerLink.href}
                    className="mt-8 inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-navy"
                  >
                    {column.footerLink.label}
                    <span aria-hidden>→</span>
                  </Link>
                ) : null}
              </div>
            ) : (
              <div key={column.title} className="contents">
                <div className="lg:border-r lg:border-line/15 lg:pr-10">
                  <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {column.title}
                  </p>
                  <ul className="space-y-0">
                    {column.items.map((child) => (
                      <li key={child.label} className="border-b border-line/10">
                        <Link
                          href={child.href}
                          className="group flex items-center justify-between py-3.5 text-[15px] text-deep-navy transition-colors hover:text-navy"
                        >
                          {child.label}
                          <span className="translate-x-0 text-turquoise opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {column.topicsTitle ?? "Latest topics"}
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {(column.topics ?? []).map((topic) => (
                      <Link key={topic.href} href={topic.href} className="group block">
                        <div className="relative aspect-[16/10] overflow-hidden bg-line/10">
                          <Image
                            src={topic.image}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, 28vw"
                          />
                        </div>
                        <span className="mt-4 inline-flex border border-line/40 bg-white px-2.5 py-1 text-[11px] text-deep-navy">
                          {topic.tag}
                        </span>
                        <p className="mt-3 text-[15px] font-medium leading-snug text-deep-navy group-hover:underline">
                          {topic.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          ) : column.layout === "featured" ? (
            <div key={column.title}>
              <p className="eyebrow mb-8 text-muted">{column.title}</p>
              <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
                {column.items.map((child) => (
                  <Link key={child.label} href={child.href} className="group block max-w-sm">
                    <p className="text-[16px] font-medium text-text transition-colors group-hover:text-navy">
                      {child.label}
                    </p>
                    {child.description ? (
                      <p className="mt-2 text-[13px] leading-5 text-muted">
                        {child.description}
                      </p>
                    ) : null}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div
              key={column.title}
              className={cn(
                (hasFeatured || isHub || isListHub) &&
                  columnIndex < item.columns.length - 1
                  ? "lg:border-r lg:border-line/10 lg:pr-10"
                  : "",
              )}
            >
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                {column.title}
              </p>
              {column.items.length > 0 ? (
                <ul className="space-y-0">
                  {column.items.map((child) => {
                    const activeLink = isActiveHref(child.href);
                    return (
                      <li key={child.label} className="border-b border-line/10">
                        <Link
                          href={child.href}
                          className={cn(
                            "group flex items-center gap-2 py-3.5 text-[17px] transition-colors hover:text-navy",
                            activeLink
                              ? "font-semibold text-deep-navy"
                              : "font-medium text-deep-navy",
                          )}
                        >
                          {activeLink ? (
                            <span className="text-deep-navy" aria-hidden>
                              —
                            </span>
                          ) : null}
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
              {column.footerLink ? (
                <Link
                  href={column.footerLink.href}
                  className={cn(
                    "inline-flex text-[13px] text-muted transition-colors hover:text-navy",
                    column.items.length > 0 ? "mt-6" : "mt-0",
                  )}
                >
                  {column.footerLink.label}
                </Link>
              ) : null}
            </div>
          ),
        )}
        {showPromo ? (
          <div className="hidden bg-deep-navy p-8 text-white lg:block">
            <p className="eyebrow text-turquoise">MEYLE</p>
            <p className="display-title mt-4 text-4xl">
              Precision that makes a difference.
            </p>
            <Link
              href={item.href}
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-turquoise"
            >
              Explore {item.label}
              <span aria-hidden>→</span>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
