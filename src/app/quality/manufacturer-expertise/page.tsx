"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { InfoBanner } from "@/components/home/InfoBanner";
import { Marquee } from "@/components/Marquee";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";

const productionSlides = [
  {
    step: "01",
    title: "Fully automatic coupling rod production",
    image: "/images/meyle/quality/mfg/slide-01.webp",
  },
  {
    step: "02",
    title: "Blanks for a bushing holder are produced using a laser cutting machine.",
    image: "/images/meyle/quality/mfg/slide-02.webp",
  },
  {
    step: "03",
    title: "Robot arm in the fully automated production of coupling rods.",
    image: "/images/meyle/quality/mfg/slide-03.webp",
  },
  {
    step: "04",
    title: "Milling process on a raw body of an aluminum control arm on a CNC machining center.",
    image: "/images/meyle/quality/mfg/slide-04.webp",
  },
  {
    step: "05",
    title: "Production robot grips the milled ball stud of an HD control arm.",
    image: "/images/meyle/quality/mfg/slide-05.webp",
  },
  {
    step: "06",
    title: "Coating plant for MEYLE chassis parts",
    image: "/images/meyle/quality/mfg/slide-06.webp",
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
    title: "Quality management",
    body: "Highest standards, tested in Germany - MEYLE stands for quality that sets standards!",
    href: "/quality/quality-management",
    image: "/images/meyle/quality/learn-quality.webp",
  },
  {
    title: "Data management",
    body: "Optimal product data, smooth flow of goods - discover our data management!",
    href: "/quality/data-management",
    image: "/images/meyle/quality/learn-data.webp",
  },
];

function ProductionCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function scrollTo(next: number) {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(productionSlides.length - 1, next));
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
              Our secret? Perfection in every detail
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-text/75">
              Take a look behind the scenes at our production sites and discover the
              latest technologies in action. From production and testing to packaging -
              quality is our top priority.
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
              disabled={index >= productionSlides.length - 1}
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
        {productionSlides.map((item, i) => (
          <article
            key={item.step}
            className="w-[min(88vw,640px)] shrink-0 snap-start bg-white"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-line/10">
              <SmartImage
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="640px"
              />
            </div>
            <div className="border border-t-0 border-line/15 p-6 md:p-8">
              <p className="text-[12px] font-semibold tracking-[0.16em] text-muted">
                {item.step} - 06
              </p>
              <h3 className="mt-3 text-[17px] font-semibold leading-snug text-deep-navy">
                {item.title}
              </h3>
              <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                {String(i + 1).padStart(2, "0")} / 06
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactAside({ body }: { body: string }) {
  return (
    <aside className="flex flex-col justify-center border-t border-line/15 px-5 py-12 lg:border-l lg:border-t-0 lg:px-10 lg:py-20 xl:px-14">
      <h3 className="font-sans text-[20px] font-semibold text-deep-navy">Contact us</h3>
      <p className="mt-4 max-w-sm text-[15px] leading-7 text-text/70">{body}</p>
      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-4 text-deep-navy transition-opacity hover:opacity-80"
      >
        <span className="flex h-12 w-12 items-center justify-center bg-deep-navy text-white">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
            <path d="M5 6h14v10H8l-3 3V6z" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
        <span className="text-[14px] leading-5">
          More information?
          <br />
          <span className="font-semibold underline underline-offset-4">Contact us</span>
        </span>
      </Link>
    </aside>
  );
}

export default function ManufacturerExpertisePage() {
  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            Manufacturer expertise
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Made in-house. Made for you.
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
          src="/images/meyle/quality/mfg/hero.webp"
          alt="State-of-the-art machines produce MEYLE parts in production at SIO"
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
          { href: "#expertise", label: "Manufacturing expertise" },
          { href: "#sites", label: "Our production sites" },
          { href: "#insights", label: "Insights" },
          { href: "#partners", label: "Production partner" },
        ].map((item) => (
          <a key={item.href} href={item.href} className="text-muted hover:text-navy">
            {item.label}
          </a>
        ))}
      </nav>

      <section id="expertise" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Excellence in production: Engineered with Precision
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75">
              <p>
                Before a MEYLE part is manufactured by production machines and employees,
                a lot of work and time has gone into research, specifications, sample and
                quality tests. And, of course, all our heart and soul! That&apos;s why we
                only produce parts for the aftermarket in selected factories worldwide to
                the highest standards - our own.
              </p>
              <p>
                Our production facilities have OEM approvals in accordance with IATF 16949
                and specialize in the manufacture of products for the independent
                aftermarket.
              </p>
            </div>
          </div>
          <ContactAside body="Do you have questions about our production? We look forward to hearing from you." />
        </div>
      </section>

      <section id="sites" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Rethinking production. Through innovation that moves.
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75">
              <p>
                At MEYLE, we know our way around cars - and we know what is important when
                it comes to spare parts. That&apos;s why we rely on a strong network of
                our own production facilities and selected partners for production.
              </p>
              <p>
                We are passionate about developing and manufacturing technically optimized
                products in our own factories. State-of-the-art technology, efficient
                processes and a close exchange within the team ensure that we not only
                meet the requirements for original parts, but also exceed them at MEYLE
                HD. This is what drives us to continuously develop the MEYLE brand.
              </p>
            </div>
          </div>
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/quality/mfg/machines.webp"
              alt="State-of-the-art machines produce MEYLE parts in production at SIO"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative order-1 min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/quality/mfg/check.webp"
              alt="State-of-the-art machines check a MEYLE part at SIO"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Modern technology
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              It is clear to us that excellent quality and sustainable action belong
              together. In our production plants, we not only rely on modern technologies
              and strict quality controls, but also on responsible management.
              Environmental protection, occupational safety and customer satisfaction are
              not just empty words for us, but an integral part of our corporate
              philosophy. This is how we create a future that we can be proud of.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Your Safety: Our Commitment
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              We love cars and we love precision. That&apos;s why we leave nothing to
              chance: our plants and those of our production partners are regularly
              audited by our quality engineers. For spare parts that inspire you.
            </p>
          </div>
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
            <SmartImage
              src="/images/meyle/quality/mfg/plant.webp"
              alt="Building of the MEYLE production plant SIO"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <ProductionCarousel />

      <Marquee phrase="Precision at work." />

      <section id="partners" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:order-1 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              The MEYLE partners: competence in a network
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75">
              <p>
                In areas where we are unable to manufacture parts ourselves, we work with
                an international network of development and production partners - some of
                whom are well-known OE suppliers - who manufacture parts to our own strict
                specifications and standards.
              </p>
              <p>
                Even if we do not manufacture all parts in our own production facilities,
                all of our know-how and engineering expertise, which we derive from the
                manufacturing and production process in our own plants, flows into the
                specification for other MEYLE parts. These are produced for us by renowned
                development partners and therefore meet our high standards as well as
                those of the original equipment manufacturers.
              </p>
            </div>
          </div>
          <div className="relative order-1 min-h-80 aspect-[4/3] lg:order-2 lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/quality/mfg/team.webp"
              alt="Three MEYLE colleagues work together in front of a screen"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line/15 bg-off-white px-5 py-16 lg:px-10 xl:px-14">
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
