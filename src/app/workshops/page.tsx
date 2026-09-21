"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { InfoBanner } from "@/components/home/InfoBanner";
import { Marquee } from "@/components/Marquee";
import { Testimonials } from "@/components/Testimonials";
import { ArrowButton } from "@/components/ArrowButton";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";

const productLines = [
  {
    name: "MEYLE ORIGINAL",
    text: "Precisely fitting spare parts in original spare part quality for reliable repairs.",
    href: "/products/original",
  },
  {
    name: "MEYLE PD",
    text: "Performance design for enhanced performance and a sophisticated look.",
    href: "/products/pd",
  },
  {
    name: "MEYLE HD",
    text: "Technically improved parts with a longer service life - developed for maximum stress.",
    href: "/products/hd",
  },
  {
    name: "MEYLE KIT",
    text: "Clever repair solutions in a box with perfectly matched components - saves time and money.",
    href: "/products/kits",
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
    body: "MEYLE HD rear axle control arm for Golf, Octavia, Leon and more, with zinc flake coating for longer service life! Increased safety, higher material durability and better protection against corrosion. Quality for high standards.",
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

const learnMore = [
  {
    title: "MEYLE - we move more",
    body: "From innovation to quality - find out why MEYLE is the partner for professionals.",
    href: "/about",
    image: "/images/meyle/workshops/learn-about.webp",
  },
  {
    title: "Data management",
    body: "Optimal product data, smooth flow of goods - discover our data management!",
    href: "/quality/data-management",
    image: "/images/meyle/workshops/learn-data.webp",
  },
  {
    title: "Quality management",
    body: "Highest standards, tested in Germany - MEYLE stands for quality that sets standards!",
    href: "/quality/quality-management",
    image: "/images/meyle/workshops/learn-quality.webp",
  },
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
    <section id="highlights" className="border-b border-line/15 bg-white">
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

export default function WorkshopsPage() {
  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            Workshops
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.2rem,5vw,4.6rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Keep your workshop running—and your customers coming back
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
          src="/images/meyle/workshops/hero.webp"
          alt="A mechanic stands under a car and tightens screws"
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
          { href: "#advantages", label: "Your advantages" },
          { href: "#product-lines", label: "Product lines & kits" },
          { href: "#data", label: "Data quality" },
          { href: "#service", label: "Technical service" },
          { href: "#trainings", label: "Trainings" },
        ].map((item) => (
          <a key={item.href} href={item.href} className="text-muted hover:text-navy">
            {item.label}
          </a>
        ))}
      </nav>

      <section id="advantages" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Fits. Better. Reliably.
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75 md:text-[16px]">
              <p>
                Every move in the workshop has to be right - and that&apos;s exactly why
                MEYLE exists. We produce spare parts that are not only durable, but also
                tried and tested and a perfect fit. We rely on feedback from hundreds of
                workshops worldwide. Thanks to detailed article information and
                installation instructions, you can quickly find the right part.
              </p>
              <p>
                Our high-quality spare parts reduce expensive complaints and unnecessary
                reworking. Whether technically improved components, pre-assembled kits
                with all the necessary mounting materials or technical advice: we make
                the difference so that your workshop remains efficient, you retain your
                customers and gain new ones. Because a good partnership is evident in the
                moments when everything runs smoothly.
              </p>
            </div>
            <div className="mt-10">
              <ArrowButton href="/parts-catalog">Visit parts catalog</ArrowButton>
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

      <section id="product-lines" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Four approaches, one goal: Better parts for your workshop
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              Not all spare parts are the same - and that is precisely why MEYLE has
              product lines and kits that are tailored to different requirements.
              Regardless of whether you are looking for proven standards, greater
              durability or innovative repair solutions: MEYLE has the right solution
              with attachment material for your workshop. Benefit from our high vehicle
              coverage and availability.
            </p>
            <ul className="mt-8 max-w-xl space-y-4">
              {productLines.map((line) => (
                <li key={line.name} className="text-[15px] leading-7 text-text/80">
                  <Link href={line.href} className="font-semibold text-deep-navy hover:underline">
                    {line.name}:
                  </Link>{" "}
                  {line.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/workshops/lines-kits.webp"
              alt="Photo of three MEYLE boxes"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <HighlightsCarousel />

      <Marquee phrase="Parts. Data. Solutions." />

      <section id="data" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:order-1 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Data that makes a difference
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              Good decisions are based on good data - and this is exactly where MEYLE
              comes in. With precise, detailed and regularly updated vehicle and spare
              parts data, including article numbers, vehicle links and installation
              instructions, we ensure that workshops can find the right parts faster,
              avoid errors and work more efficiently. This saves you time and money.
            </p>
            <div className="mt-8 max-w-xl space-y-6">
              <div>
                <p className="font-semibold text-deep-navy">
                  TecDoc: The standard for precise parts identification.
                </p>
                <p className="mt-2 text-[15px] leading-7 text-text/75">
                  As a certified data supplier for TecDoc with premium status, MEYLE
                  ensures that our spare parts are listed in the catalogs with maximum
                  precision. Thanks to detailed article information and vehicle links,
                  you always get exactly the part you need - without detours and without
                  unnecessary returns.
                </p>
              </div>
              <div>
                <p className="font-semibold text-deep-navy">
                  Networked data for a smart workshop.
                </p>
                <p className="mt-2 text-[15px] leading-7 text-text/75">
                  Advancing the workshop industry. Better data quality means fewer
                  incorrect orders, more efficient processes and satisfied customers. Use
                  our data for faster repairs and optimized warehousing.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <ArrowButton href="/quality/data-management">Learn more</ArrowButton>
            </div>
          </div>
          <div className="relative order-1 min-h-80 aspect-[4/3] lg:order-2 lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/workshops/data.webp"
              alt="Close-up of hands of two people sitting at a laptop and dealing with data at MEYLE"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <section id="service" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/workshops/technical-service.webp"
              alt="Person from behind with headset, head in focus, in the background is a monitor in the blur"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              You work - we&apos;ll assist!
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              MEYLE stands for parts that last. And for a service that helps. Because we
              know: Sometimes things can go wrong during installation. The instructions
              are not clear? A detail leaves you puzzled? Do you want to be on the safe
              side? Or do you need information on article numbers or vehicle links?
            </p>
            <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-deep-navy">
              Our technical service is here to help:
            </p>
            <ul className="mt-4 max-w-xl space-y-3 text-[15px] leading-7 text-text/75">
              {[
                "Real experts with years of experience in the automotive sector",
                "Clear answers to technical questions",
                "Quick help by e-mail or callback",
                "Simply fill out our service form - our team will get back to you as soon as possible. With in-depth expertise and a solution.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-turquoise" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ArrowButton href="/service">Technical service</ArrowButton>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="trainings" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:order-1 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              More knowledge. More skills.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              Good work starts with good knowledge - and this is exactly where MEYLE
              training comes in. In practical training courses, our experts impart
              valuable know-how on the latest vehicle technologies, clever repair
              solutions and MEYLE products. Because those who know more work faster, more
              efficiently and more successfully.
            </p>
            <ul className="mt-8 max-w-xl space-y-3 text-[15px] leading-7 text-text/80">
              <li>
                <strong className="text-deep-navy">From professionals for professionals:</strong>{" "}
                training courses with real workshop professionals.
              </li>
              <li>
                <strong className="text-deep-navy">Hands-on instead of theory:</strong>{" "}
                practical content, directly applicable.
              </li>
              <li>
                <strong className="text-deep-navy">State-of-the-art technology:</strong>{" "}
                so that your workshop is always up to date.
              </li>
            </ul>
            <div className="mt-10">
              <ArrowButton href="/workshops/trainings">
                Discover our trainings
              </ArrowButton>
            </div>
          </div>
          <div className="relative order-1 min-h-80 aspect-[4/3] lg:order-2 lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/workshops/training.webp"
              alt="Three MEYLE trainers stand in front of their training van and smile into the camera"
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
