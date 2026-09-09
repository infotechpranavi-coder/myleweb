import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import type { NewsItem } from "@/data/news";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group flex h-full flex-col">
      <Link href={item.href} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-off-white">
          <SmartImage
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      </Link>
      <div className="mt-5 flex flex-1 flex-col">
        <span className="inline-flex w-fit border border-line/25 px-2.5 py-1 font-sans text-[11px] font-medium text-text">
          {item.category}
        </span>
        <Link href={item.href} className="mt-4 block">
          <h3 className="font-sans text-[17px] font-medium leading-[1.4] tracking-[-0.01em] text-text transition-colors group-hover:text-navy md:text-[18px]">
            {item.title}
          </h3>
        </Link>
        <Link
          href={item.href}
          className="mt-auto pt-5 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-navy"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
