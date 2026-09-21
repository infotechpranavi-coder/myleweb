"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const engineeringLinks = [
  { label: "Product development", href: "/quality/product-development" },
  { label: "Manufacturer expertise", href: "/quality/manufacturer-expertise" },
  { label: "Quality management", href: "/quality/quality-management" },
  { label: "Data management", href: "/quality/data-management" },
] as const;

const latestTopics = [
  {
    tag: "Blog post",
    title: "The MEYLE HD re-engineering process",
    href: "/products/hd",
    image: "/images/meyle/quality/blog-hd-process.webp",
  },
  {
    tag: "Blog post",
    title: "Zinc flake coatings: the anti-corrosion solution?",
    href: "/content/zinc-flake-coatings-the-anti-corrosion-solution",
    image: "/images/meyle/quality/blog-zinc.webp",
  },
] as const;

/** MEYLE-style Quality mega panel + page footer strip: Engineering nav + Latest topics */
export function QualityEngineeringPanel({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const pathname = usePathname();

  return (
    <section
      className={cn(
        "border-b border-line/15 bg-off-white",
        compact ? "px-5 py-10 lg:px-10 xl:px-14" : "px-5 py-14 lg:px-10 lg:py-16 xl:px-14",
        className,
      )}
    >
      <div className="mx-auto grid max-w-[1680px] gap-10 lg:grid-cols-[0.85fr_1.4fr] lg:gap-14">
        <div className="lg:border-r lg:border-line/15 lg:pr-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            MEYLE engineering
          </p>
          <ul className="mt-6 space-y-0">
            {engineeringLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="border-b border-line/10">
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-2 py-3.5 text-[15px] transition-colors",
                      active
                        ? "font-semibold text-deep-navy"
                        : "text-deep-navy/85 hover:text-navy",
                    )}
                  >
                    {active ? (
                      <span className="text-deep-navy" aria-hidden>
                        —
                      </span>
                    ) : null}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Latest topics
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {latestTopics.map((topic) => (
              <Link key={topic.href} href={topic.href} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-line/10">
                  <Image
                    src={topic.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 40vw"
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
    </section>
  );
}
