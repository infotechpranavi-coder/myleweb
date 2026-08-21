import { InfoBanner } from "@/components/home/InfoBanner";
import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd, SplitSection } from "@/components/ui/SplitSection";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title={"Quality\nmanagement"}
        description="Highest standards, tested in Germany – AUTOPART stands for quality that sets standards."
        image="/images/pages/quality.jpg"
      />
      <InfoBanner />
      <SplitSection
        title="Tested, documented, released"
        body="Every product line follows a defined quality process: incoming inspection, dimensional checks, endurance tests and continuous supplier audits. Our quality is not by chance – it is the result of precision work."
        image="/images/hero/workshop.jpg"
        imageAlt="Quality inspection of automotive components"
        href="/contact"
        cta="Questions about quality"
      />
      <InnerEnd />
    </>
  );
}
