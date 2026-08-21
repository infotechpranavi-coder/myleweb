import { SmartImage } from "@/components/ui/SmartImage";
import type { NewsItem } from "@/data/site";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.href}
      className="group block border border-line/15 bg-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        <span className="absolute left-4 top-4 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
          {item.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-[1.55rem] font-black italic uppercase leading-[0.95] transition-colors group-hover:text-navy">
          {item.title}
        </h3>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Read article →
        </p>
      </div>
    </a>
  );
}
