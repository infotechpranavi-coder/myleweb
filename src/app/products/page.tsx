import { ArrowButton } from "@/components/ArrowButton";
import { InfoBanner } from "@/components/home/InfoBanner";
import {
  GroupPhotoCard,
  ProductPhotoHero,
} from "@/components/pages/product-sections";
import { InnerEnd } from "@/components/ui/SplitSection";
import { productCategoryPages } from "@/data/categories";
import { productLines } from "@/data/site";

export default function ProductsPage() {
  return (
    <>
      <ProductPhotoHero
        label="Products"
        title="Four lines. One standard."
        description="AUTOPART HD, ORIGINAL, PD and KITs cover steering, brakes, drive, filtration, thermal management and electromobility – engineered for workshops and wholesale partners."
        image="/images/pages/factory.jpg"
        imageAlt="AUTOPART products"
      />
      <InfoBanner />
      <section className="border-b border-line/15 px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <p className="eyebrow text-muted">Product lines & kits</p>
          <div className="mt-8 grid gap-0 border border-line/15 md:grid-cols-2">
            {productLines.map((line) => (
              <a
                key={line.href}
                href={line.href}
                className="group border-b border-line/15 px-6 py-10 md:border-r md:even:border-r-0"
              >
                <h2 className="font-display text-3xl font-black italic uppercase">
                  {line.label}
                </h2>
                {line.description ? (
                  <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                    {line.description}
                  </p>
                ) : null}
                <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy">
                  Learn more
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pt-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <p className="eyebrow text-muted">Product categories</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.6rem)] font-black italic uppercase">
            Looking for the right parts? Here they are.
          </h2>
        </div>
      </section>
      <section className="mt-10 grid border-y border-line/15 md:grid-cols-2">
        {productCategoryPages.map((category) => (
          <GroupPhotoCard
            key={category.slug}
            href={`/products/${category.slug}`}
            title={category.navLabel}
            text={category.description}
            image={category.image}
            imageAlt={category.navLabel}
          />
        ))}
      </section>
      <section className="px-5 py-12 lg:px-10 xl:px-14">
        <ArrowButton href="/parts-catalog">Visit parts catalog</ArrowButton>
      </section>
      <InnerEnd />
    </>
  );
}
