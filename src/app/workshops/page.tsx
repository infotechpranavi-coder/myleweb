import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd, SplitSection } from "@/components/ui/SplitSection";

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Workshops"
        title={"Built for\nworkshops."}
        description="Parts that fit, data that works, and technical support that understands the bay – not just the catalog."
        image="/images/hero/workshop.jpg"
      />
      <SplitSection
        id="advantages"
        eyebrow="Advantages for workshops"
        title="Repair with confidence"
        body="AUTOPART parts are designed for professional installation: OE-compliant fit, complete kits, and technical information that reduces comebacks. Spend less time searching and more time repairing."
        image="/images/hero/editorial.jpg"
        imageAlt="Independent workshop using AUTOPART components"
        href="/parts-catalog"
        cta="Open catalog"
      />
      <SplitSection
        id="training"
        eyebrow="Trainings"
        title="Know-how that pays off"
        body="From transmission oil service to HD control arm replacement: AUTOPART trainings give technicians practical knowledge they can apply the next day."
        image="/images/pages/training.jpg"
        imageAlt="Technical training session for workshop teams"
        reverse
        href="/workshops/trainings"
        cta="View trainings"
      />
      <SplitSection
        eyebrow="Technical support"
        title="When the job gets complex"
        body="Assembly questions, product identification and installation guidance – our specialists support workshops with clear, technical answers."
        image="/images/hero/contact.jpg"
        imageAlt="Technical support for workshop professionals"
        href="/contact"
        cta="Contact support"
      />
      <InnerEnd />
    </>
  );
}
