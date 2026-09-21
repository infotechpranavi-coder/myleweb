import { ArrowButton } from "@/components/ArrowButton";
import { InfoBanner } from "@/components/home/InfoBanner";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductSlide";
import {
  BenefitRow,
  CategoryOpener,
  ClosingColumns,
  DiscoverMore,
  FeaturedKits,
  GroupZigzag,
  IntroWithContact,
  JumpNav,
  TrainingStrip,
  UpgradeSplit,
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
      <CategoryOpener
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
          { href: "#iam", label: "IAM" },
          { href: "#workshops", label: "Workshops" },
        ]}
      />
      <IntroWithContact
        title={category.introTitle}
        body={category.introBody}
        standFor={category.standFor}
        topic={`MEYLE ${category.navLabel.toLowerCase()}`}
      />
      <BenefitRow benefits={category.benefits} />
      <UpgradeSplit
        title={category.upgradeTitle}
        body={category.upgradeBody}
        image={category.upgradeImage ?? category.image}
        imageAlt={category.upgradeTitle}
        tips={category.benefits.slice(0, 1).concat(category.benefits.slice(2, 3))}
      />
      <GroupZigzag groups={category.groups} categorySlug={category.slug} />
      {category.featuredKits?.length ? (
        <FeaturedKits kits={category.featuredKits} />
      ) : related.length ? (
        <section
          id="iam"
          className="border-b border-line/15 px-5 py-16 lg:px-10 xl:px-14"
        >
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
      ) : (
        <div id="iam" />
      )}
      <Marquee phrase={category.marquee} />
      <ClosingColumns left={category.closing[0]} right={category.closing[1]} />
      <TrainingStrip
        title={category.training.title}
        body={category.training.body}
      />
      <DiscoverMore />
      <section className="px-5 py-12 lg:px-10 xl:px-14">
        <ArrowButton href="/parts-catalog">Visit parts catalog</ArrowButton>
      </section>
      <InnerEnd />
    </>
  );
}
