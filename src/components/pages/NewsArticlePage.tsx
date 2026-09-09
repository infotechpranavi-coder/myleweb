import Link from "next/link";
import { ArrowButton } from "@/components/ArrowButton";
import { NewsCard } from "@/components/NewsCard";
import { PageHero } from "@/components/ui/PageHero";
import { SmartImage } from "@/components/ui/SmartImage";
import { InnerEnd } from "@/components/ui/SplitSection";
import { newsArticles, type NewsItem } from "@/data/news";

export function NewsArticlePage({ article }: { article: NewsItem }) {
  const related = newsArticles
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        image={article.image}
      />
      <section className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[280px] lg:min-h-[560px]">
            <SmartImage
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-12 lg:px-14 lg:py-16">
            <p className="eyebrow text-muted">{article.date}</p>
            <p className="mt-6 max-w-xl font-sans text-[15px] leading-7 text-muted">
              {article.excerpt}
            </p>
            <div className="mt-8">
              <ArrowButton href="/content">All news & insights</ArrowButton>
            </div>
          </div>
        </div>
      </section>
      <article className="px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-muted">{article.category}</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95]">
            {article.title}
          </h2>
          <div className="mt-10 space-y-6">
            {article.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="font-sans text-[16px] leading-8 text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <ArrowButton href="/content">Back to content hub</ArrowButton>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center border border-line/20 px-7 text-[13px] font-semibold uppercase tracking-[0.14em]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </article>
      {related.length ? (
        <section className="border-t border-line/15 bg-off-white px-5 py-16 lg:px-10 xl:px-14">
          <div className="mx-auto max-w-[1680px]">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase">
              More insights
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {related.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <InnerEnd />
    </>
  );
}
