import { NewsCard } from "@/components/NewsCard";
import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd } from "@/components/ui/SplitSection";
import { news } from "@/data/site";

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Press"
        title={"Newsroom"}
        description="Product launches, trade fair appearances and manufacturer news from AUTOPART."
      />
      <section className="px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto grid max-w-[1680px] gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <NewsCard key={item.id} item={{ ...item, category: "Press release" }} />
          ))}
        </div>
      </section>
      <InnerEnd />
    </>
  );
}
