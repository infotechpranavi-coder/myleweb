import { ContentBrowser } from "@/components/pages/ContentBrowser";
import { PageHero } from "@/components/ui/PageHero";
import { InnerEnd } from "@/components/ui/SplitSection";

export default function ContentPage() {
  return (
    <>
      <PageHero
        eyebrow="Content Hub"
        title={"Knowledge\nfor professionals."}
        description="Blog posts, videos, press releases, whitepapers and installation instructions – expert knowledge from MEYLE."
      />
      <section className="px-5 py-16 lg:px-10 xl:px-14">
        <ContentBrowser />
      </section>
      <InnerEnd />
    </>
  );
}
