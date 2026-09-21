import { InfoBanner } from "@/components/home/InfoBanner";
import { TradeFairs } from "@/components/TradeFairs";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";

export default function EventsPage() {
  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            About us
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.2rem,5vw,4.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            The best contact is personal
          </h1>
        </div>
        <div className="relative h-14 bg-deep-navy lg:h-16">
          <div
            aria-hidden
            className="absolute left-0 top-0 h-full w-10 -skew-x-12 bg-turquoise lg:w-14"
          />
        </div>
      </section>

      <section className="relative aspect-[21/8] min-h-[240px] w-full overflow-hidden bg-deep-navy md:min-h-[360px] lg:min-h-[445px]">
        <SmartImage
          src="/images/meyle/about/events-hero.webp"
          alt="MEYLE at trade fairs and events"
          fill
          loading="eager"
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      <InfoBanner />

      <section className="border-b border-line/15 bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-16 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            MEYLE trade fair dates
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-text/75">
            Personal contact makes all the difference - and that&apos;s exactly why
            you&apos;ll find us regularly at national and international trade fairs and
            in-house exhibitions. Experience the quality of MEYLE products at first hand,
            see our expertise for yourself and talk to us directly. Come and visit us at
            the next trade fair near you - we look forward to meeting you in person!
          </p>
        </div>
      </section>

      <TradeFairs />

      <InnerEnd />
    </>
  );
}
