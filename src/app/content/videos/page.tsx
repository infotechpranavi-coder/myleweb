import { ContentHubBrowser } from "@/components/pages/ContentHubBrowser";
import { InnerEnd } from "@/components/ui/SplitSection";

export default function VideosPage() {
  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-10 pt-12 lg:px-10 lg:pb-12 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            MEYLE Content Hub
          </p>
          <h1 className="mt-4 max-w-5xl font-sans text-[clamp(1.85rem,3.8vw,3.35rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-deep-navy">
            Installation instructions, news, articles and more
          </h1>
        </div>
      </section>

      <section className="bg-off-white px-5 pb-16 lg:px-10 xl:px-14">
        <ContentHubBrowser initialContentType="Videos" />
      </section>

      <InnerEnd />
    </>
  );
}
