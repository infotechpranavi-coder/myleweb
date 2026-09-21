"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { InfoBanner } from "@/components/home/InfoBanner";
import { CommitmentTabs } from "@/components/pages/CommitmentTabs";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";

const process = [
  {
    step: "01",
    title: "Analysis",
    text: "Identification of parts that are prone to failure.",
    image: "/images/meyle/quality/dev/01-analysis.webp",
    imageAlt:
      "Three people stand on a lifting platform under a car and analyze a car spare part",
  },
  {
    step: "02",
    title: "Technical specification & optimization",
    text: "Definition of technical specifications, requirements and improvements.",
    image: "/images/meyle/quality/dev/02-specification.webp",
    imageAlt:
      "Three people look at laptops together and define technical specifications, requirements and improvements",
  },
  {
    step: "03",
    title: "Innovative product development",
    text: "Development of line parts: MEYLE ORIGINAL, PD or HD.",
    image: "/images/meyle/quality/dev/03-development.webp",
    imageAlt: "Person sits in the car and looks at a laptop connected to the car",
  },
  {
    step: "04",
    title: "Prototyping & tests",
    text: "Production of a prototype and testing and evaluation.",
    image: "/images/meyle/quality/dev/04-prototyping.webp",
    imageAlt: "Two people sit in front of screens and develop a prototype",
  },
  {
    step: "05",
    title: "Highest quality standards - our own",
    text: "Quality inspection",
    image: "/images/meyle/quality/dev/05-quality.webp",
    imageAlt:
      "Person checks the data of a quality inspection by a machine on the monitor",
  },
  {
    step: "06",
    title: "Series production",
    text: "Start of series production.",
    image: "/images/meyle/quality/dev/06-series.webp",
    imageAlt:
      "A MEYLE automotive spare part in series production, many duplicates in a row",
  },
  {
    step: "07",
    title: "Go-to-market",
    text: "Market launch of parts in MEYLE ORIGINAL, PD or HD.",
    image: "/images/meyle/quality/dev/07-launch.webp",
    imageAlt: "MEYLE HD cartons are closed and sealed with a quality seal",
  },
];

const learnMore = [
  {
    title: "MEYLE Production",
    body: "Perfect parts, perfect ride: MEYLE brings precision and quality to the road!",
    href: "/quality/manufacturer-expertise",
    image: "/images/meyle/quality/learn-production.webp",
    imageAlt: "State-of-the-art machines produce MEYLE parts in production at SIO",
  },
  {
    title: "Data management",
    body: "Optimal product data, smooth flow of goods - discover our data management!",
    href: "/quality/data-management",
    image: "/images/meyle/quality/learn-data.webp",
    imageAlt: "Two people sit in front of screens and maintain MEYLE data",
  },
  {
    title: "Quality management",
    body: "Highest standards, tested in Germany - MEYLE stands for quality that sets standards!",
    href: "/quality/quality-management",
    image: "/images/meyle/quality/learn-quality.webp",
    imageAlt: "State-of-the-art machines check a MEYLE part at SIO",
  },
];

function ProcessCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function scrollTo(next: number) {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(process.length - 1, next));
    setIndex(clamped);
    const card = el.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  return (
    <section id="process" className="border-b border-line/15 bg-off-white">
      <div className="mx-auto max-w-[1680px] px-5 pt-14 lg:px-10 xl:px-14">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-black italic uppercase text-deep-navy">
            Product development process
          </h2>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label="Previous step"
              onClick={() => scrollTo(index - 1)}
              disabled={index === 0}
              className="flex h-11 w-11 items-center justify-center border border-deep-navy/30 text-deep-navy transition-colors hover:bg-deep-navy hover:text-white disabled:opacity-30"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next step"
              onClick={() => scrollTo(index + 1)}
              disabled={index >= process.length - 1}
              className="flex h-11 w-11 items-center justify-center border border-deep-navy/30 text-deep-navy transition-colors hover:bg-deep-navy hover:text-white disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-14 scrollbar-none lg:px-10 xl:px-14"
      >
        {process.map((item, i) => (
          <article
            key={item.step}
            className="w-[min(88vw,640px)] shrink-0 snap-start bg-white"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-line/10">
              <SmartImage
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="640px"
              />
            </div>
            <div className="border border-t-0 border-line/15 p-6 md:p-8">
              <p className="text-[12px] font-semibold tracking-[0.16em] text-muted">
                {item.step}-07
              </p>
              <h3 className="mt-3 font-display text-[clamp(1.3rem,2vw,1.75rem)] font-black italic uppercase leading-tight text-deep-navy">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-7 text-muted">
                {item.text}
              </p>
              <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                {String(i + 1).padStart(2, "0")} / {String(process.length).padStart(2, "0")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ProductDevelopmentPage() {
  return (
    <>
      {/* MEYLE opener: cream title band → navy slash bar → full-bleed photo */}
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            Product development
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Our path to perfection
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
          src="/images/meyle/quality/hero-product-dev.webp"
          alt="Two people sit in front of screens and develop a prototype"
          fill
          loading="eager"
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      <InfoBanner />

      <nav className="sticky top-[calc(var(--header-offset,72px))] z-30 flex flex-wrap gap-x-8 gap-y-2 border-b border-line/15 bg-white/95 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm lg:px-10 xl:px-14">
        {[
          { href: "#process", label: "Development process" },
          { href: "#commitment", label: "Quality" },
          { href: "/contact", label: "Contact" },
        ].map((item) => (
          <a key={item.href} href={item.href} className="text-muted hover:text-navy">
            {item.label}
          </a>
        ))}
      </nav>

      {/* Intro + contact — MEYLE desktop: copy left, contact right */}
      <section className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              This is where progress is made - part by part
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75 md:text-[16px]">
              <p>
                For us, everything revolves around better parts, product data and
                solutions with which we support our customers in the independent
                aftermarket.
              </p>
              <p>
                MEYLE products are developed strictly in accordance with the
                requirements and specifications of our engineers, accompanied and
                tested during the production process. This involves an elaborate
                process from the initial identification of a potential new product
                through to the launch of series production.
              </p>
            </div>
          </div>
          <aside className="flex flex-col justify-center border-t border-line/15 px-5 py-12 lg:border-l lg:border-t-0 lg:px-10 lg:py-20 xl:px-14">
            <h3 className="font-sans text-[20px] font-semibold text-deep-navy">
              Contact us
            </h3>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-text/70">
              Do you have questions about quality at MEYLE? We look forward to
              hearing from you.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-4 text-deep-navy transition-opacity hover:opacity-80"
            >
              <span className="flex h-12 w-12 items-center justify-center bg-deep-navy text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                  <path
                    d="M5 6h14v10H8l-3 3V6z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <span className="text-[14px] leading-5">
                More information?
                <br />
                <span className="font-semibold underline underline-offset-4">
                  Contact us
                </span>
              </span>
            </Link>
          </aside>
        </div>
      </section>

      <ProcessCarousel />
      <CommitmentTabs />

      <section className="border-b border-line/15 bg-white px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase text-deep-navy">
            Learn more
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {learnMore.map((item) => (
              <Link key={item.href} href={item.href} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-line/10">
                  <SmartImage
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="33vw"
                  />
                </div>
                <p className="mt-5 font-display text-2xl font-black italic uppercase text-deep-navy">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
                <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy">
                  Learn more
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InnerEnd />
    </>
  );
}
