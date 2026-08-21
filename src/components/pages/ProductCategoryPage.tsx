import { ArrowButton } from "@/components/ArrowButton";
import { InfoBanner } from "@/components/home/InfoBanner";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductSlide";
import {
  BenefitRow,
  ClosingColumns,
  DiscoverMore,
  GroupPhotoCard,
  IntroWithContact,
  JumpNav,
  ProductPhotoHero,
  TrainingStrip,
} from "@/components/pages/product-sections";
import { InnerEnd } from "@/components/ui/SplitSection";
import type { ProductCategory } from "@/data/categories";
import { products } from "@/data/site";

export function ProductCategoryPage({
  category,
}: {
  category: ProductCategory;
}) {
  const related = products.filter((product) =>
    product.groups.includes(category.slug),
  );

  return (
    <>
      <ProductPhotoHero
        label={category.navLabel}
        title={category.headline}
        description={category.description}
        image={category.image}
        imageAlt={category.navLabel}
      />
      <InfoBanner />
      <JumpNav
        items={[
          { href: "#benefits", label: "Benefits" },
          { href: "#products", label: "Products" },
          { href: "#workshops", label: "Workshops" },
        ]}
      />
      <IntroWithContact
        title={category.introTitle}
        body={category.introBody}
        standFor={category.standFor}
        topic={`AUTOPART ${category.navLabel.toLowerCase()}`}
      />
      <BenefitRow benefits={category.benefits} />
      <section id="products" className="border-b border-line/15 px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <h2 className="font-display text-[clamp(2rem,4.2vw,3.8rem)] font-black italic uppercase leading-[0.95]">
            {category.upgradeTitle}
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted">
            {category.upgradeBody}
          </p>
        </div>
      </section>
      <section className="grid border-b border-line/15 md:grid-cols-2">
        {category.groups.map((group) => (
          <GroupPhotoCard
            key={group.slug}
            href={`/products/${category.slug}/${group.slug}`}
            title={group.title}
            text={group.cardText}
            image={group.image}
            imageAlt={group.title}
          />
        ))}
      </section>
      {related.length ? (
        <section className="border-b border-line/15 px-5 py-16 lg:px-10 xl:px-14">
          <div className="mx-auto max-w-[1680px]">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase">
              Highlights
            </h2>
            <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((product) => (
                <ProductCard key={product.number} product={product} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <Marquee phrase={category.marquee} />
      <ClosingColumns left={category.closing[0]} right={category.closing[1]} />
      <TrainingStrip title={category.training.title} body={category.training.body} />
      <DiscoverMore />
      <section className="px-5 py-12 lg:px-10 xl:px-14">
        <ArrowButton href="/parts-catalog">Visit parts catalog</ArrowButton>
      </section>
      <InnerEnd />
    </>
  );
}
