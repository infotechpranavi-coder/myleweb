import { ArrowButton } from "@/components/ArrowButton";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { news } from "@/data/site";

export function NewsSection() {
  return (
    <section className="border-b border-line/15 bg-white px-5 py-16 lg:px-10 lg:py-24 xl:px-14">
      <div className="mx-auto max-w-[1680px]">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            title={"News\n& Insights"}
            description="Here you will find the latest news, exciting insights and expert knowledge on various topics."
          />
        </div>
        <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <NewsCard item={item} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <ArrowButton href="/content">Discover all content</ArrowButton>
        </div>
      </div>
    </section>
  );
}
