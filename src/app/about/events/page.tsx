import { TradeFairs } from "@/components/TradeFairs";
import { InfoBanner } from "@/components/home/InfoBanner";
import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd } from "@/components/ui/SplitSection";

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={"Events"}
        description="Whether trade fairs or events – meet AUTOPART in person and discover our highlights."
        image="/images/pages/global.jpg"
      />
      <InfoBanner />
      <TradeFairs />
      <InnerEnd />
    </>
  );
}
