import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd, SplitSection } from "@/components/ui/SplitSection";

export default function WorldwidePage() {
  return (
    <>
      <PageHero
        eyebrow="AUTOPART worldwide"
        title={"120+ countries.\nOne standard."}
        description="From Hamburg to workshops around the world: AUTOPART partners with wholesalers and technicians who expect manufacturer quality."
        image="/images/pages/global.jpg"
      />
      <SplitSection
        title="A global independent aftermarket"
        body="Local partners, central quality. AUTOPART combines international availability with the same technical standard in every market."
        image="/images/pages/wholesale.jpg"
        imageAlt="International aftermarket logistics"
      />
      <InnerEnd />
    </>
  );
}
