"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { InfoBanner } from "@/components/home/InfoBanner";
import { Marquee } from "@/components/Marquee";
import { ArrowButton } from "@/components/ArrowButton";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";

const qaSlides = [
  {
    step: "01",
    title: "MEYLE quality assurance",
    image: "/images/meyle/quality/qm/insight-01.webp",
    alt: "A person checks an installed control arm",
  },
  {
    step: "02",
    title: "MEYLE quality assurance",
    image: "/images/meyle/quality/qm/insight-02.webp",
    alt: "A person checks something on the monitor",
  },
  {
    step: "03",
    title: "MEYLE quality assurance",
    image: "/images/meyle/quality/qm/insight-03.webp",
    alt: "Close-up of a state-of-the-art testing machine",
  },
  {
    step: "04",
    title: "MEYLE quality assurance",
    image: "/images/meyle/quality/qm/insight-04.webp",
    alt: "Close-up of a MEYLE part being tested by a state-of-the-art testing machine",
  },
];

const learnMore = [
  {
    title: "Product development",
    body: "From planning to production: this is how MEYLE creates high-quality spare parts.",
    href: "/quality/product-development",
    image: "/images/meyle/quality/hero-product-dev.webp",
  },
  {
    title: "MEYLE Production",
    body: "Perfect parts, perfect ride: MEYLE brings precision and quality to the road!",
    href: "/quality/manufacturer-expertise",
    image: "/images/meyle/quality/learn-production.webp",
  },
  {
    title: "Data management",
    body: "Optimal product data, smooth flow of goods - discover our data management!",
    href: "/quality/data-management",
    image: "/images/meyle/quality/learn-data.webp",
  },
];

function QaCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function scrollTo(next: number) {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(qaSlides.length - 1, next));
    setIndex(clamped);
    const card = el.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  return (
    <section id="insights" className="border-b border-line/15 bg-off-white">
      <div className="mx-auto max-w-[1680px] px-5 pt-14 lg:px-10 xl:px-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-black italic uppercase text-deep-navy">
              Our quality assurance in detail
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-text/75">
              Precision is more than just a word for us. At MEYLE, every part is closely
              scrutinized - from the first inspection to the final test before series
              production. State-of-the-art technology and experienced experts ensure that
              everything fits. Curious? Take a look behind the scenes of our testing
              processes!
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollTo(index - 1)}
              disabled={index === 0}
              className="flex h-11 w-11 items-center justify-center border border-deep-navy/30 text-deep-navy transition-colors hover:bg-deep-navy hover:text-white disabled:opacity-30"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollTo(index + 1)}
              disabled={index >= qaSlides.length - 1}
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
        {qaSlides.map((item, i) => (
          <article
            key={item.step}
            className="w-[min(88vw,640px)] shrink-0 snap-start bg-white"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-line/10">
              <SmartImage
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="640px"
              />
            </div>
            <div className="border border-t-0 border-line/15 p-6 md:p-8">
              <p className="text-[12px] font-semibold tracking-[0.16em] text-muted">
                {item.step} - 04
              </p>
              <h3 className="mt-3 text-[17px] font-semibold text-deep-navy">{item.title}</h3>
              <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                {String(i + 1).padStart(2, "0")} / 04
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function QualityManagementPage() {
  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            Quality management
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Quality-tested in Germany
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
          src="/images/meyle/quality/qm/hero.webp"
          alt="Two people sit in front of screens and maintain MEYLE data"
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
          { href: "#claim", label: "Our claim" },
          { href: "#assurance", label: "Quality assurance" },
          { href: "#insights", label: "Insights" },
          { href: "#certificates", label: "Certificates" },
          { href: "#sites", label: "Production sites" },
        ].map((item) => (
          <a key={item.href} href={item.href} className="text-muted hover:text-navy">
            {item.label}
          </a>
        ))}
      </nav>

      <section id="claim" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Maximum performance
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75">
              <p>
                Quality is in MEYLE&apos;s DNA. Our claim: products and solutions that
                meet our high standards - reliable and durable. That&apos;s why we pay
                attention to every detail during development.
              </p>
              <p>
                From the right material and workmanship to the accuracy of fit -
                everything has to be right. Our quality management checks continuously to
                ensure that every part works perfectly, from the first sample to the
                finished product.
              </p>
            </div>
          </div>
          <aside className="flex flex-col justify-center border-t border-line/15 px-5 py-12 lg:border-l lg:border-t-0 lg:px-10 lg:py-20 xl:px-14">
            <h3 className="font-sans text-[20px] font-semibold text-deep-navy">
              Contact us
            </h3>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-text/70">
              Do you have questions about quality at MEYLE? We look forward to hearing
              from you.
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

      <section id="assurance" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Developed &amp; tested in Germany
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75">
              <p>
                At MEYLE, quality is no coincidence, but the result of a continuous
                process. Our products are developed according to strict, product-specific
                specifications and tested by our technical and quality experts in Hamburg.
              </p>
              <p>
                To guarantee our high standards, we also work with independent test
                centers and testing laboratories. And because we want to constantly
                improve, we use your feedback from the field to continuously optimize our
                products and product groups and ensure your satisfaction.
              </p>
            </div>
          </div>
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/quality/qm/tested.webp"
              alt="Person checks quality inspection data on a monitor"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <QaCarousel />

      <section id="certificates" className="border-b border-line/15 bg-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Proven first class
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-[15px] leading-7 text-text/75">
            <p>
              Our products meet the highest requirements for automotive spare parts - we
              confirm this in accordance with the EU guidelines for the sale, repair and
              distribution of spare parts (2010/C 138/05).
            </p>
            <p>
              You can count on our quality promise: We give a 24-month warranty on all
              products and even 48 months on our HD line!
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/guarantee"
              className="inline-flex border border-deep-navy px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-deep-navy transition-colors hover:bg-deep-navy hover:text-white"
            >
              Warranty certificate (pdf)
            </a>
            <a
              href="/guarantee"
              className="inline-flex border border-deep-navy px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-deep-navy transition-colors hover:bg-deep-navy hover:text-white"
            >
              Parts Quality Attestation (pdf)
            </a>
          </div>
        </div>
      </section>

      <Marquee phrase="Highest quality." />

      <section id="sites" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative order-1 min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/quality/qm/assurance.webp"
              alt="Close-up of a machine checking something"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Quality that creates trust
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75">
              <p>
                In our own production facilities, we rely on modern technology, efficient
                processes and precise quality controls - so that you can count on reliable
                spare parts for the independent aftermarket.
              </p>
              <p>
                Regular inspections and targeted improvements guarantee that every part
                meets our high standards. With an experienced team and continuous
                investment, we ensure that quality is not just a promise, but is in every
                detail.
              </p>
            </div>
            <div className="mt-10">
              <ArrowButton href="/quality/manufacturer-expertise">Learn more</ArrowButton>
            </div>
          </div>
        </div>
      </section>

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
                    alt=""
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
