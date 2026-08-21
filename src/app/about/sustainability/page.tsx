import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd, SplitSection } from "@/components/ui/SplitSection";

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title={"Responsibility\nin motion."}
        description="Longer-lasting parts, smarter kits and responsible manufacturing – sustainability at AUTOPART starts with products that do not fail early."
        image="/images/pages/sustainability.jpg"
      />
      <SplitSection
        title="Durability is the first climate strategy"
        body="A part that lasts longer reduces waste, transport and repeat repairs. HD engineering, complete kits and robust coatings are designed to keep vehicles on the road – and materials out of landfills."
        image="/images/pages/factory.jpg"
        imageAlt="Sustainable manufacturing practices"
      />
      <SplitSection
        title="Partnerships that give back"
        body="Donation and funding partnerships extend our responsibility beyond the product. We support initiatives that strengthen education, mobility and the communities we work in."
        image="/images/pages/about.jpg"
        imageAlt="Community and sustainability partnerships"
        reverse
      />
      <InnerEnd />
    </>
  );
}
