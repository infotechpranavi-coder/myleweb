"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { InfoBanner } from "@/components/home/InfoBanner";
import { Marquee } from "@/components/Marquee";
import { Testimonials } from "@/components/Testimonials";
import { ArrowButton } from "@/components/ArrowButton";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";

const stats = [
  {
    value: "24,000",
    title: "Parts in the range",
    body: "MEYLE offers over 24,000 parts for every challenge",
  },
  {
    value: "120",
    title: "Countries worldwide",
    body: "MEYLE parts are available in over 120 countries - delivered reliably and quickly",
  },
  {
    value: "1,000",
    title: "Employees",
    body: "Around 1,000 professionals work for MEYLE worldwide, 500 of them at the company headquarters in Hamburg",
  },
];

const highlights = [
  {
    step: "01",
    line: "ORIGINAL",
    title: "MEYLE ORIGINAL drive shaft Volvo XC 60 I",
    body: "MEYLE ORIGINAL drive shafts for the Volvo XC60 I: top quality and outstanding traction with ball spline technology. Lightweight design for optimal driving dynamics and efficiency.",
    highlights: [
      "Stronger axle articulation for outstanding traction on rough terrain",
      "Optimised driving dynamics thanks to lightweight displacement unit",
      "Increased efficiency with space-saving outer joint (8 bearings instead of 6)",
    ],
    image: "/images/meyle/workshops/highlights/01-drive-shaft.webp",
  },
  {
    step: "02",
    line: "PD",
    title: "MEYLE PD HEPA cabin air filter set Tesla Model Y",
    body: "The MEYLE HEPA cabin air filter set for the Tesla Model Y: captures NOx and the hearts of customers! 2 pre-filters + 2 HEPA filters – ideal for workshops and drivers!",
    highlights: [
      "PD activated carbon pre-filter with antibacterial effect",
      "NOx box: permanently captures nitrogen oxides",
      "Dual HEPA filter: optimal air quality and reduced allergy risk",
      "Efficient design for sustainability: approx. 50% lower component weight",
    ],
    image: "/images/meyle/workshops/highlights/02-hepa.webp",
  },
  {
    step: "03",
    line: "HD",
    title: "MEYLE HD rear axle control arm for vehicles of the VW Group",
    body: "MEYLE HD rear axle control arm for Golf, Octavia, Leon and more, with zinc flake coating for longer service life! Increased safety, higher material durability and better protection against corrosion.",
    highlights: [
      "Corrosion resistance for a longer service life",
      "Increased safety and material resistance",
      "Long-lasting protection from stone impacts and gritting salt",
    ],
    image: "/images/meyle/workshops/highlights/03-control-arm.webp",
  },
  {
    step: "04",
    line: "HD and ORIGINAL",
    title: "MEYLE HD and ORIGINAL pre-assembled tie rods",
    body: "Take the hassle out of tie rod replacement – with the pre-assembled MEYLE tie rod. Quick and easy installation paired with high durability and reliability. Available as MEYLE ORIGINAL and MEYLE HD.",
    highlights: [
      "Everything you need, including attachment parts, under a single number, which saves you time",
      "All-in-one solution reduces packaging, storage and transport costs",
      "Also available in the enhanced HD variant",
    ],
    image: "/images/meyle/workshops/highlights/04-tie-rod.webp",
  },
  {
    step: "05",
    line: "KIT",
    title: "MEYLE ORIGINAL oil change kit for Tesla",
    body: "Everything you need: the MEYLE oil change kit for the Tesla drive unit. Simple oil change with filter, magnetic drain plug and all necessary parts.",
    highlights: [
      "Complete package: all parts incl. filter and magnetic drain plug",
      "Complies with Tesla OE standards",
      "Efficient & reliable maintenance for Tesla models S/3/X/Y",
    ],
    image: "/images/meyle/workshops/highlights/05-oil-kit.webp",
  },
  {
    step: "06",
    line: "ORIGINAL",
    title: "MEYLE ORIGINAL oil stop cable for Mercedes-Benz",
    body: "Oil in the control unit? Not with us! The MEYLE ORIGINAL oil stop cable reliably prevents costly damage from leaking engine oil – simple, effective and tool-free installation. Ideal for over 5 million Mercedes-Benz vehicles in Europe to enjoy a long service life.",
    highlights: [
      "Sturdy metal core effectively stops oil from spreading in the wiring harness",
      "Protects sensors, actuators and the engine control unit",
      "Easy, tool-free plug-and-play installation",
      "Precision fit for Mercedes-Benz engines M111, M271, M272, M273 (C-Class, CLK-Class, CLS-Class, E-Class and Sprinter, among others)",
    ],
    image: "/images/meyle/workshops/highlights/06-oil-stop.webp",
  },
];

const navItems = [
  { href: "#partner", label: "Your partner" },
  { href: "#solutions", label: "Product solutions" },
  { href: "#availability", label: "Availability" },
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology & Development" },
  { href: "#logistics", label: "Logistics" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#iam-connect", label: "IAM:CONNECT" },
];

function HighlightsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function scrollTo(next: number) {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(highlights.length - 1, next));
    setIndex(clamped);
    const card = el.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  return (
    <section className="border-b border-line/15 bg-white">
      <div className="mx-auto max-w-[1680px] px-5 pt-14 lg:px-10 xl:px-14">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-black italic uppercase text-deep-navy">
            Current product highlights
          </h2>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label="Previous highlight"
              onClick={() => scrollTo(index - 1)}
              disabled={index === 0}
              className="flex h-11 w-11 items-center justify-center border border-deep-navy/30 text-deep-navy transition-colors hover:bg-deep-navy hover:text-white disabled:opacity-30"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next highlight"
              onClick={() => scrollTo(index + 1)}
              disabled={index >= highlights.length - 1}
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
        {highlights.map((item) => (
          <article
            key={item.step}
            className="grid w-[min(92vw,920px)] shrink-0 snap-start border border-line/15 bg-off-white md:grid-cols-2"
          >
            <div className="relative aspect-square bg-white md:aspect-auto md:min-h-[420px]">
              <SmartImage
                src={item.image}
                alt=""
                fill
                className="object-contain p-8"
                sizes="460px"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <p className="text-[12px] font-semibold tracking-[0.16em] text-muted">
                {item.step} - 06 · {item.line}
              </p>
              <h3 className="mt-3 font-display text-[clamp(1.3rem,2vw,1.8rem)] font-black italic uppercase leading-tight text-deep-navy">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-text/75">{item.body}</p>
              <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-deep-navy">
                Highlights
              </p>
              <ul className="mt-3 space-y-2 text-[14px] leading-6 text-text/75">
                {item.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-turquoise" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function WholesalePage() {
  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            Wholesale
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.2rem,5vw,4.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Secure tomorrow&apos;s business today - with MEYLE
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
          src="/images/meyle/wholesale/hero.webp"
          alt="Hands on a laptop clicking virtual rating boxes"
          fill
          loading="eager"
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      <InfoBanner />

      <nav className="sticky top-[calc(var(--header-offset,72px))] z-30 flex flex-wrap gap-x-8 gap-y-2 border-b border-line/15 bg-white/95 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm lg:px-10 xl:px-14">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="text-muted hover:text-navy">
            {item.label}
          </a>
        ))}
      </nav>

      {/* Partner intro */}
      <section id="partner" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              MEYLE &amp; Wholesale: Reliability in stock
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75 md:text-[16px]">
              <p>
                Wholesalers around the world have been relying on MEYLE for decades - and
                for good reason. With a strong product range, reliable availability and
                partnership-based cooperation, we help you to make your business even more
                successful. Our products stand for maximum precision and reliability so
                that you can offer your customers the best quality at all times.
              </p>
              <p>
                But a strong partner offers more than just parts: We think in terms of
                solutions! Efficient logistics, personal advice and an understanding of
                the challenges of the wholesale trade make all the difference. Benefit
                from short delivery times, customized services and a team that really
                understands you. And reacts quickly and flexibly to you and your wishes.
                Because your success is what drives us.
              </p>
            </div>
          </div>
          <aside className="flex flex-col justify-center border-t border-line/15 px-5 py-12 lg:border-l lg:border-t-0 lg:px-10 lg:py-20 xl:px-14">
            <h3 className="font-sans text-[20px] font-semibold text-deep-navy">Contact</h3>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-text/70">
              Are you interested in working with MEYLE? Or would you like more
              information? We look forward to hearing from you.
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

        <div className="mx-auto grid max-w-[1680px] border-t border-line/15 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="border-b border-line/15 px-5 py-10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:px-10 xl:px-14"
            >
              <p className="font-display text-[clamp(2.4rem,4vw,3.6rem)] font-black italic text-deep-navy">
                {stat.value}
              </p>
              <h3 className="mt-3 text-[18px] font-semibold text-deep-navy">{stat.title}</h3>
              <p className="mt-3 max-w-xs text-[14px] leading-6 text-text/70">{stat.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product solutions */}
      <section id="solutions" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Your customers deserve the best - MEYLE delivers it
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75">
              <p>
                Behind every MEYLE product is more than just a spare part - it is the
                result of precise engineering and decades of experience. Our commitment
                is not just to meet standards, but to redefine them. We design every part
                with market requirements and innovative features in mind and solve the
                real challenges of everyday workshop life.
              </p>
              <p>
                Our MEYLE HD line sets standards in terms of quality and durability.
                Thanks to continuous development and rigorous testing, we create products
                that can withstand the toughest conditions - and simply last longer,
                often even outperforming OEM parts.
              </p>
              <p>
                With MEYLE, you are choosing a partner who thinks ahead. We don&apos;t
                just develop parts, we develop solutions that help you optimize processes
                and stand out from the competition. Because your business deserves more
                than standard.
              </p>
            </div>
            <div className="mt-10">
              <ArrowButton href="/quality/product-development">
                Our product development
              </ArrowButton>
            </div>
          </div>
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/wholesale/product-dev.webp"
              alt="MEYLE product development process"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Availability */}
      <section id="availability" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative order-1 min-h-80 aspect-[4/3] lg:order-1 lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/wholesale/availability.webp"
              alt="Photo of a MEYLE warehouse with full shelves"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Gaps in spare parts? Not with MEYLE!
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75">
              <p>
                Availability is crucial for you - and this is exactly where MEYLE comes
                in. With our broad vehicle coverage and well thought-out product
                portfolio, we close gaps that other suppliers leave open.
              </p>
              <p>
                Whether common volume items or specific spare parts: We ensure that you
                can offer your customers suitable parts. Thanks to our efficient warehouse
                logistics and fast delivery processes, no customer is left behind -
                reliably, punctually and comprehensively. With a fill rate of more than
                95%, we are a flexible and dynamic partner for our customers in 120
                countries worldwide.
              </p>
            </div>
            <div className="mt-10 rounded-none border border-line/20 bg-white p-6">
              <h3 className="text-[17px] font-semibold text-deep-navy">
                Efficient logistics, strong partnership: MEYLE and ITGs
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-text/70">
                MEYLE works closely with the largest international trading groups to
                deliver spare parts quickly and reliably. Thanks to optimized processes
                and digital connections, we minimize delivery times and maximize your
                planning reliability. This means that every part arrives exactly when it
                is needed - for smooth operations in your business.
              </p>
            </div>
            <div className="mt-10">
              <ArrowButton href="/parts-catalog">Visit parts catalog</ArrowButton>
            </div>
          </div>
        </div>
      </section>

      <Marquee phrase="Think big. Act MEYLE." />

      {/* Services */}
      <section id="services" className="border-b border-line/15 bg-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            More support. More success.
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-text/75">
            At MEYLE, you not only get unique spare parts and solutions, but also
            services that really help you in your day-to-day business. From technical
            advice to smooth data management - we ensure that you can work efficiently.
            Our goal: to optimize processes, simplify workflows and strengthen your
            competitive position.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="border border-line/15 bg-off-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-deep-navy">
                <SmartImage
                  src="/images/meyle/wholesale/service.webp"
                  alt="MEYLE technical service"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-[18px] font-semibold text-deep-navy">
                  Customer Service &amp; Technical Service
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-text/75">
                  Our customers are the focus of MEYLE - and our service makes the
                  difference. Whether you need quick solutions in customer service or
                  sound technical advice: we support you with know-how and commitment. Our
                  experts will help you to master everyday challenges efficiently. And
                  because time is money, we don&apos;t just offer you answers, but
                  solutions that work immediately.
                </p>
                <div className="mt-8">
                  <ArrowButton href="/service">Learn more</ArrowButton>
                </div>
              </div>
            </div>

            <div className="border border-line/15 bg-off-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-deep-navy">
                <SmartImage
                  src="/images/meyle/workshops/data.webp"
                  alt="MEYLE data management"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-[18px] font-semibold text-deep-navy">
                  Our data management
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-text/75">
                  Reliable product data is the basis for smooth ordering processes. MEYLE
                  ensures high data quality with structured and always up-to-date data.
                  Our focus on complete vehicle links optimizes your warehousing,
                  minimizes errors and ensures that the right products are found quickly.
                  This keeps your business moving - efficiently and future-proof.
                </p>
                <div className="mt-8">
                  <ArrowButton href="/quality/data-management">Learn more</ArrowButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Technology & Development */}
      <section id="technology" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Innovation from experience
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              MEYLE stands for forward-looking product development and first-class
              quality. We set new standards in the spare parts market - with intelligent
              solutions that really help workshops and dealers.
            </p>
            <div className="mt-10 border border-line/15 bg-white p-6">
              <h3 className="text-[17px] font-semibold text-deep-navy">
                MEYLE KITs - efficiency rethought.
              </h3>
              <p className="mt-3 text-[14px] leading-7 text-text/70">
                Our MEYLE KITs offer more than just individual components - they provide
                sophisticated repair solutions for fast and economical repairs. Precisely
                fitting and with everything you need for efficient assembly. Less effort,
                fewer returns - more satisfaction for your customers.
              </p>
              <div className="mt-6">
                <ArrowButton href="/products/kits">Discover MEYLE KITs</ArrowButton>
              </div>
            </div>
          </div>
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/wholesale/kits.webp"
              alt="MEYLE KIT product line"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <HighlightsCarousel />

      {/* Logistics */}
      <section id="logistics" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative order-1 min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/wholesale/logistics.webp"
              alt="MEYLE logistics and warehouse"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Faster. More efficient. MEYLE.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              Availability is crucial - and MEYLE delivers. Thanks to optimized logistics
              processes and global warehouse structures, we ensure that you get exactly
              what you need - exactly when you need it. Fast delivery times, high
              availability of goods and smart warehouse solutions minimize waiting times
              and maximize your business success. Because a well-stocked shelf means
              satisfied customers and a strong competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:order-1 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Green thinking, clever design - MEYLE shows responsibility
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              Sustainability starts with the right attitude - and ends with the right
              solutions. We focus on environmentally friendly production processes,
              durable products and a responsible value chain. Together with our wholesale
              partners, we are shaping the future of the aftermarket sustainably and
              economically. Because what&apos;s good for the environment is also good for
              your business.
            </p>
            <div className="mt-10">
              <ArrowButton href="/about/sustainability">Learn more</ArrowButton>
            </div>
          </div>
          <div className="relative order-1 min-h-80 aspect-[4/3] lg:order-2 lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/wholesale/sustainability.webp"
              alt="MEYLE sustainability"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* IAM:CONNECT */}
      <section id="iam-connect" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative min-h-80 aspect-[4/3] bg-off-white lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/wholesale/iam-connect.webp"
              alt="IAM:CONNECT platform"
              fill
              className="object-contain p-8"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Networking together for the challenges of tomorrow
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              IAM:CONNECT is MEYLE&apos;s platform for dialog on the major transformation
              topics of the independent aftermarket (IAM). This is where we engage in
              dialog with key players such as independent workshops and dealers in order
              to better understand their opportunities and challenges. In an industry that
              is changing rapidly, many are facing complex tasks - but together we can
              find solutions. With IAM:CONNECT, we are creating precisely the space for
              exchange, partnership and shaping the future. Because we are convinced that
              the best answers come from dialog. Let&apos;s work together on the future of
              IAM!
            </p>
            <div className="mt-10">
              <ArrowButton href="/content">More on the topic</ArrowButton>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale contact CTA */}
      <section id="consulting" className="border-b border-line/15 bg-deep-navy">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative min-h-72 aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
            <SmartImage
              src="/images/meyle/wholesale/contact.webp"
              alt="Contact MEYLE wholesale"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 text-white lg:px-10 lg:py-20 xl:px-14">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-turquoise">
              Contact us
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95]">
              MEYLE for wholesalers
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-white/75">
              Are you interested in a cooperation? We look forward to hearing from you.
            </p>
            <div className="mt-10">
              <ArrowButton href="/contact">Contact us</ArrowButton>
            </div>
          </div>
        </div>
      </section>

      <InnerEnd />
    </>
  );
}
