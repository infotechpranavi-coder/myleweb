import { InfoBanner } from "@/components/home/InfoBanner";
import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd, SplitSection } from "@/components/ui/SplitSection";

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={"Donation &\nfunding partnerships"}
        description="We take responsibility for people, education and the communities we work in."
        image="/images/pages/about.jpg"
      />
      <InfoBanner />
      <SplitSection
        title="Partnerships that give back"
        body="Donation and funding partnerships extend our responsibility beyond the product. We support initiatives that strengthen education, mobility and the communities around our partners worldwide."
        image="/images/pages/sustainability.jpg"
        imageAlt="AUTOPART community partnerships"
        href="/contact"
        cta="Contact partnerships"
      />
      <InnerEnd />
    </>
  );
}
