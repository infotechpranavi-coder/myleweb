import { InfoBanner } from "@/components/home/InfoBanner";
import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd, SplitSection } from "@/components/ui/SplitSection";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title={"Manufacturer\nexpertise"}
        description="ENGINEERED AND QUALITY APPROVED IN GERMANY."
        image="/images/pages/factory.jpg"
      />
      <InfoBanner />
      <SplitSection
        title="A manufacturer – not a trading brand"
        body="Development, specification and quality release happen under one roof. AUTOPART stays a manufacturer – responsible for every part that carries our name. From Hamburg, we supply partners in more than 120 countries."
        image="/images/pages/quality.jpg"
        imageAlt="AUTOPART manufacturer expertise"
        href="/parts-catalog"
        cta="Find parts"
      />
      <InnerEnd />
    </>
  );
}
