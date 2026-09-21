import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd, SplitSection } from "@/components/ui/SplitSection";

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title={"Quality that\nmoves."}
        description="From development to data: MEYLE quality is engineered in Hamburg and proven in workshops worldwide."
        image="/images/meyle/quality/hero.webp"
      />
      <SplitSection
        id="product-development"
        eyebrow="Product development"
        title="Our path to perfection"
        body="This is where progress is made – part by part. Our engineers analyse failure patterns, materials and installation conditions before a part goes into production. The result: components that last longer and fit first time."
        image="/images/meyle/about/building.webp"
        imageAlt="MEYLE engineers reviewing technical drawings"
        href="/quality/product-development"
        cta="Learn more"
      />
      <SplitSection
        id="manufacturer-expertise"
        eyebrow="Manufacturer expertise"
        title="Made in-house. Made for you."
        body="MEYLE develops, specifies and validates spare parts with manufacturer responsibility. That is why workshops can rely on consistent quality across more than 24,000 references."
        image="/images/meyle/about/factory.webp"
        imageAlt="MEYLE manufacturing expertise"
        reverse
        href="/quality/manufacturer-expertise"
        cta="Learn more"
      />
      <SplitSection
        id="quality-management"
        eyebrow="Quality management"
        title="Tested, documented, released"
        body="Every product line follows a defined quality process: incoming inspection, dimensional checks, endurance tests and continuous supplier audits."
        image="/images/meyle/quality/hero.webp"
        imageAlt="Quality inspection of automotive components"
        href="/quality/quality-management"
        cta="Learn more"
      />
      <SplitSection
        id="data-management"
        eyebrow="Data management"
        title="The right part, first time"
        body="Reliable catalog data is part of the product. MEYLE maintains vehicle links, OE numbers and installation information so wholesale and workshops find the correct part immediately."
        image="/images/meyle/about/factory.webp"
        imageAlt="Technical product data at a specialist workstation"
        reverse
        href="/quality/data-management"
        cta="Learn more"
      />
      <InnerEnd />
    </>
  );
}
