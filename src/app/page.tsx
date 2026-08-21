import { AudienceLinks } from "@/components/AudienceLinks";
import { ContactCTA } from "@/components/ContactCTA";
import { EditorialFeature } from "@/components/EditorialFeature";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { NewsSection } from "@/components/NewsSection";
import { Newsletter } from "@/components/Newsletter";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ProductIntro } from "@/components/ProductIntro";
import { Testimonials } from "@/components/Testimonials";
import { TradeFairs } from "@/components/TradeFairs";
import { InfoBanner } from "@/components/home/InfoBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <EditorialFeature />
      <InfoBanner />
      <AudienceLinks />
      <ProductIntro />
      <ProductCarousel />
      <Marquee />
      <NewsSection />
      <Testimonials />
      <TradeFairs />
      <ContactCTA />
      <Newsletter />
    </>
  );
}
