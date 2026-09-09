import Link from "next/link";
import { NewsCard } from "@/components/NewsCard";
import { TurquoiseSlash } from "@/components/ui/Geometry";
import { Reveal } from "@/components/ui/Reveal";
import { newsArticles } from "@/data/news";

export function NewsSection() {
  return (
    <section className="border-b border-line/15 bg-off-white px-5 py-16 lg:px-10 lg:py-24 xl:px-14">
      <div className="mx-auto max-w-[1680px]">
        <Reveal>
          <div className="max-w-3xl">
            <div className="flex items-start gap-4 md:gap-5">
              <TurquoiseSlash className="mt-2 h-10 w-2.5 md:h-12 md:w-3" />
              <h2 className="display-title text-[clamp(2.4rem,5vw,4.6rem)]">
                News & Insights
              </h2>
            </div>
            <p className="mt-5 max-w-xl font-sans text-[15px] leading-7 text-muted md:ml-9 md:text-base">
              Here you will find the latest news, exciting insights and expert
              knowledge on various topics.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {newsArticles.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <NewsCard item={item} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/content"
            className="inline-flex h-12 items-center gap-3 border border-line/30 bg-white px-7 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-text transition-colors hover:border-navy hover:text-navy"
          >
            Show all news and insights
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
