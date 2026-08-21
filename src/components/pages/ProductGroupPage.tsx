import Link from "next/link";
import { ArrowButton } from "@/components/ArrowButton";
import { InfoBanner } from "@/components/home/InfoBanner";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductSlide";
import {
  BenefitRow,
  DiscoverMore,
  GroupPhotoCard,
  IntroWithContact,
  JumpNav,
  ProductPhotoHero,
  TrainingStrip,
} from "@/components/pages/product-sections";
import { InnerEnd } from "@/components/ui/SplitSection";
import type { ProductCategory, ProductGroup } from "@/data/categories";
import { products } from "@/data/site";

export function ProductGroupPage({
  category,
  group,
}: {
  category: ProductCategory;
  group: ProductGroup;
}) {
  const related = products.filter(
    (product) =>
      product.groups.includes(category.slug) ||
      product.title.toLowerCase().includes(group.title.toLowerCase().split(" ")[0] ?? ""),
  );
  const otherGroups = category.groups.filter((item) => item.slug !== group.slug);

  return (
    <>
      <ProductPhotoHero
        label={category.navLabel}
        title={group.headline}
        description={group.description}
        image={group.image}
        imageAlt={group.title}
      />
      <InfoBanner />
      <JumpNav
        items={[
          { href: `/products/${category.slug}`, label: category.navLabel },
          { href: "#benefits", label: "Benefits" },
          { href: "#products", label: "Products" },
          { href: "#workshops", label: "Workshops" },
        ]}
      />
      <IntroWithContact
        title={group.introTitle}
        body={group.introBody}
        topic={`AUTOPART ${group.title}`}
      />
      <BenefitRow benefits={group.benefits} />
      <section id="products" className="border-b border-line/15">
        <div className="grid lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.6rem)] font-black italic uppercase leading-[0.95]">
              {group.bodyTitle}
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted">{group.body}</p>
            <div className="mt-8">
              <ArrowButton href="/parts-catalog">Visit parts catalog</ArrowButton>
            </div>
          </div>
          <div className="border-t border-line/15 px-5 py-14 lg:border-t-0 lg:border-l lg:px-10 lg:py-20 xl:px-14">
            <p className="eyebrow text-muted">{category.navLabel}</p>
            <h3 className="mt-4 font-display text-3xl font-black italic uppercase">
              {group.title}
            </h3>
            <p className="mt-5 text-[15px] leading-7 text-muted">{group.cardText}</p>
            <Link
              href={`/products/${category.slug}`}
              className="mt-8 inline-flex text-[12px] font-semibold uppercase tracking-[0.14em] text-navy"
            >
              All {category.navLabel.toLowerCase()} →
            </Link>
          </div>
        </div>
      </section>
      {related.length ? (
        <section className="border-b border-line/15 px-5 py-16 lg:px-10 xl:px-14">
          <div className="mx-auto max-w-[1680px]">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase">
              AUTOPART spare parts: everything you need
            </h2>
            <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((product) => (
                <ProductCard key={product.number} product={product} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <Marquee phrase={group.marquee} />
      {otherGroups.length ? (
        <section className="grid border-b border-line/15 md:grid-cols-2">
          {otherGroups.slice(0, 4).map((item) => (
            <GroupPhotoCard
              key={item.slug}
              href={`/products/${category.slug}/${item.slug}`}
              title={item.title}
              text={item.cardText}
              image={item.image}
              imageAlt={item.title}
            />
          ))}
        </section>
      ) : null}
      <TrainingStrip title={category.training.title} body={category.training.body} />
      <DiscoverMore />
      <InnerEnd />
    </>
  );
}
