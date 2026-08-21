import { InfoBanner } from "@/components/home/InfoBanner";
import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd, SplitSection } from "@/components/ui/SplitSection";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title={"Data\nmanagement"}
        description="Optimal product data, smooth flow of goods."
        image="/images/hero/contact.jpg"
      />
      <InfoBanner />
      <SplitSection
        title="The right part, first time"
        body="As a certified data supplier for TecDoc with premium status, AUTOPART ensures that spare parts are listed in the catalogs with maximum precision. Thanks to detailed article information and vehicle links, you always get exactly the part you need – without detours and without unnecessary returns."
        image="/images/pages/quality.jpg"
        imageAlt="AUTOPART product data management"
        href="/parts-catalog"
        cta="Open catalog"
      />
      <InnerEnd />
    </>
  );
}
