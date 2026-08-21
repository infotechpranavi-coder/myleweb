import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd, SplitSection } from "@/components/ui/SplitSection";

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title={"AUTOPART\nas an employer."}
        description="Engineers, product managers, logistics specialists and partnership people – we look for colleagues who take the independent aftermarket seriously."
        image="/images/pages/about.jpg"
      />
      <SplitSection
        title="Work where parts are thought through"
        body="From Hamburg headquarters to international markets: AUTOPART offers roles across development, quality, sales and digital. Precision is a culture, not a slogan."
        image="/images/pages/quality.jpg"
        imageAlt="AUTOPART teams at work"
        href="/contact"
        cta="Jobs & careers"
      />
      <InnerEnd />
    </>
  );
}
