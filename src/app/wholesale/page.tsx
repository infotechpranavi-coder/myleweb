import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd, SplitSection } from "@/components/ui/SplitSection";

export default function WholesalePage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale"
        title={"A partner\nfor wholesale."}
        description="Range, data quality, availability and consulting – AUTOPART supports wholesalers who want more than a parts list."
        image="/images/pages/wholesale.jpg"
      />
      <SplitSection
        id="advantages"
        eyebrow="Advantages for wholesalers"
        title="Range with a point of view"
        body="Wholesalers around the world have been relying on AUTOPART for decades. With a strong product range, reliable availability and partnership-based cooperation, we help you make your business more successful. With a fill rate of more than 95%, we are a flexible partner in 120 countries."
        image="/images/pages/factory.jpg"
        imageAlt="AUTOPART warehouse and distribution"
      />
      <SplitSection
        id="consulting"
        eyebrow="Consulting"
        title="Market knowledge, not generic sales"
        body="Our wholesale consultants work with assortment planning, training concepts and local market requirements – from Europe to North America."
        image="/images/hero/contact.jpg"
        imageAlt="Consulting meeting with wholesale partners"
        reverse
      />
      <SplitSection
        eyebrow="Global distribution"
        title="Available where your customers are"
        body="With partners in more than 120 countries, AUTOPART combines manufacturer depth with a distribution network built for the independent aftermarket."
        image="/images/pages/global.jpg"
        imageAlt="Global aftermarket distribution"
        href="/contact"
        cta="Talk to wholesale"
      />
      <InnerEnd />
    </>
  );
}
