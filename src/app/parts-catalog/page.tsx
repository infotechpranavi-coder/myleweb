import { CatalogBrowser } from "@/components/pages/CatalogBrowser";
import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd } from "@/components/ui/SplitSection";

export default function PartsCatalogPage() {
  return (
    <>
      <PageHero
        eyebrow="Don't search long – find it"
        title={"Parts\ncatalog"}
        description="More than 24,000 AUTOPART spare parts for cars and vans – searchable by vehicle, OE number and product line."
      />
      <section className="px-5 py-16 lg:px-10 xl:px-14">
        <CatalogBrowser />
      </section>
      <InnerEnd />
    </>
  );
}
