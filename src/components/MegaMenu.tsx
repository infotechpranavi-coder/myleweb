"use client";

import Link from "next/link";
import { mainNav } from "@/data/site";
import { cn } from "@/lib/cn";

type MegaMenuProps = {
  active: string | null;
};

export function MegaMenu({ active }: MegaMenuProps) {
  const item = mainNav.find((entry) => entry.label === active);

  if (!item) {
    return null;
  }

  const hasFeatured = item.columns.some((column) => column.layout === "featured");

  return (
    <div className="absolute left-0 right-0 top-full z-40 border-t border-line/15 bg-white">
      <div
        className={cn(
          "mx-auto max-w-[1600px] px-8 py-12 xl:px-12",
          hasFeatured
            ? "grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-16"
            : "grid grid-cols-2 gap-16 lg:grid-cols-3",
        )}
      >
        {item.columns.map((column) =>
          column.layout === "featured" ? (
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
              className={hasFeatured ? "lg:border-r lg:border-line/10 lg:pr-12" : ""}
            >
              <p className="eyebrow mb-6 text-muted">{column.title}</p>
              <ul className="space-y-0">
                {column.items.map((child) => (
                  <li key={child.label} className="border-b border-line/10">
                    <Link
                      href={child.href}
                      className="group flex items-center justify-between py-3.5 text-[15px] text-text transition-colors hover:text-navy"
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
          ),
        )}
        {hasFeatured ? null : (
          <div className="hidden bg-deep-navy p-8 text-white lg:block">
            <p className="eyebrow text-turquoise">AUTOPART</p>
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
        )}
      </div>
    </div>
  );
}
