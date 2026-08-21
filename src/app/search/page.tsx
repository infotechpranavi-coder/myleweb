import { ProductCard } from "@/components/ProductSlide";
import { NewsCard } from "@/components/NewsCard";
import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd } from "@/components/ui/SplitSection";
import { news, products } from "@/data/site";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const productHits = products.filter((product) =>
    `${product.title} ${product.category} ${product.description}`.toLowerCase().includes(query),
  );
  const newsHits = news.filter((item) => item.title.toLowerCase().includes(query));

  return (
    <>
      <PageHero
        eyebrow="Search"
        title={query ? `Results for\n“${q}”` : "Search AUTOPART"}
        description="Find product lines, technical articles and catalog references."
      />
      <section className="px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <form action="/search" className="flex border border-line/15">
            <input
              name="q"
              defaultValue={q}
              placeholder="What are you looking for?"
              className="h-16 flex-1 px-5 outline-none"
            />
            <button className="bg-navy px-8 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Search
            </button>
          </form>
          <h2 className="mt-12 font-display text-4xl font-black italic uppercase">Products</h2>
          <div className="mt-6 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {(query ? productHits : products).map((product) => (
              <ProductCard key={product.number} product={product} />
            ))}
          </div>
          <h2 className="mt-16 font-display text-4xl font-black italic uppercase">Insights</h2>
          <div className="mt-6 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {(query ? newsHits : news).map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <InnerEnd />
    </>
  );
}
