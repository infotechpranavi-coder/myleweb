"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowButton } from "@/components/ArrowButton";
import { InfoBanner } from "@/components/home/InfoBanner";
import { Marquee } from "@/components/Marquee";
import {
  BenefitRow,
  DiscoverMore,
  IntroWithContact,
} from "@/components/pages/product-sections";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";
import { productLines } from "@/data/site";

type FeaturedProduct = {
  title: string;
  body: string;
  highlights: string[];
  image: string;
};

type LineContent = {
  eyebrow: string;
  title: string;
  headline: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  introTitle: string;
  introBody: string;
  standFor: string[];
  benefits: { title: string; text: string }[];
  portfolioTitle: string;
  portfolioBody: string;
  featured: FeaturedProduct[];
  storyTitle: string;
  storyBody: string;
  storyImage: string;
  marquee: string;
  nav: { href: string; label: string }[];
};

const lines: Record<"original" | "hd" | "pd" | "kits", LineContent> = {
  hd: {
    eyebrow: "Product lines",
    title: "MEYLE HD",
    headline: "Better than OE",
    description:
      "Over 20 years of MEYLE HD. Benefit from enhanced automotive spare parts for the highest demands. More durability, more reliability, more MEYLE HD!",
    heroImage: "/images/meyle/lines/hd-hero.webp",
    heroAlt: "MEYLE HD spare parts",
    introTitle: "Why use an original part when you can do better?",
    introBody:
      "Recalls & vulnerable standard parts - that costs workshops time, money and nerves. MEYLE HD offers the solution: structurally improved and reinforced parts that make the difference. We love technology and develop products that deliver what they promise.\n\nHD stands for High Durability and therefore the highest MEYLE quality. Thanks to reinforced design, higher quality materials and our expertise as a developer and manufacturer, vehicles with MEYLE HD remain reliable on the road for longer. 4-year warranty included!",
    standFor: [
      "Technically optimized compared to the manufacturer's original parts",
      "More durable due to reinforced or improved design",
      "High quality thanks to selected materials",
      "4-year guarantee on all MEYLE HD parts",
    ],
    benefits: [
      {
        title: "Technically optimized",
        text: "Compared to the manufacturer's original parts",
      },
      {
        title: "More durable",
        text: "Due to reinforced or improved design",
      },
      {
        title: "High quality",
        text: "Thanks to selected materials",
      },
      {
        title: "4-year guarantee",
        text: "On all MEYLE HD parts",
      },
    ],
    portfolioTitle: "MEYLE HD",
    portfolioBody: "Discover our HD product portfolio and see for yourself.",
    featured: [
      {
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
        title: "MEYLE HD flex disc",
        body: "Precisely fitting like OE but technically improved: MEYLE HD joint washers withstand extreme forces permanently.",
        highlights: [
          "Innovative winding technology reduces noise and vibrations",
          "High-temperature-resistant rubber blend for lasting performance",
          "Optimised yarn structure for torque resistance of up to 3,000 Nm",
        ],
        image: "/images/meyle/drive/flex-discs.webp",
      },
      {
        title: "MEYLE HD stabiliser link for the VW MEB platform",
        body: "An upgrade for your suspension: increased ball head diameter reduces surface pressure and wear. Forged aluminium instead of plastic – with a four-year guarantee.",
        highlights: [
          "Increased ball head diameter reduces wear",
          "Heavy-duty materials and forged aluminium parts",
          "Four-year guarantee for additional peace of mind",
        ],
        image: "/images/meyle/steering/stabilisers.webp",
      },
      {
        title: "MEYLE HD water pump",
        body: "No compromises when it comes to engine cooling! MEYLE water pumps ensure optimal coolant circulation and protect the engine against overheating.",
        highlights: [
          "SiC/SiC mechanical seal reduces the leakage risk",
          "Reinforced quality bearing for better force distribution",
          "Stainless steel housing for high temperature resistance",
        ],
        image: "/images/meyle/thermal/water-pumps.webp",
      },
      {
        title: "MEYLE HD suspension mounts",
        body: "Robust, fluid-free design – with zero compromises in terms of driving characteristics. Unlike hydro bushings, they do not hold fluids and so are not prone to leaks.",
        highlights: [
          "No fluids – not affected by leaks",
          "Constant rigidity for precise steering",
          "Four-year MEYLE HD guarantee",
        ],
        image: "/images/meyle/suspension/strut-mounts.webp",
      },
    ],
    storyTitle: "The art of optimization",
    storyBody:
      "MEYLE HD parts are not just spare parts. Our engineers, product managers and technical trainers analyze the weak points of original parts and develop technically optimized solutions on this basis. From analysis to production, every MEYLE HD part undergoes a multi-stage re-engineering process. The result: durability and reliability.",
    storyImage: "/images/meyle/quality/blog-hd-process.webp",
    marquee: "HD = High Durability. ",
    nav: [
      { href: "#benefits-intro", label: "Benefits" },
      { href: "#portfolio", label: "Products" },
      { href: "#story", label: "Development" },
      { href: "/quality/product-development", label: "Quality" },
    ],
  },
  original: {
    eyebrow: "Product lines",
    title: "MEYLE ORIGINAL",
    headline: "A perfect fit like original spare parts",
    description: "So perfectly coordinated that the choice is easy.",
    heroImage: "/images/meyle/lines/original.webp",
    heroAlt: "MEYLE ORIGINAL spare parts",
    introTitle: "Fits like a glove – delivers as promised.",
    introBody:
      "MEYLE ORIGINAL parts are manufactured with precision and perfectly tailored to each vehicle, which not only simplifies installation, but also makes reliability a standard. With more than 21,000 spare parts, there's something for just about every current passenger car and many vans – developed with an OE-compliant fit in accordance with MEYLE specifications. In other words, you'll always be able to find the right solution.\n\nProven material standards, stringent quality tests and sophisticated designs are key, as spare parts should both fit and stand the test of time – for uncompromising vehicle enjoyment.",
    standFor: [
      "Fits 100% – just like the original in every detail",
      "Outstanding price-performance ratio",
      "Proven base materials as the basis for high reliability",
      "Quality-tested, robust, proven on the world's roads",
    ],
    benefits: [
      { title: "Fits 100%", text: "Just like the original in every detail" },
      {
        title: "Outstanding price-performance ratio",
        text: "The first choice for a long vehicle life",
      },
      {
        title: "Proven base materials",
        text: "As the basis for high reliability",
      },
      {
        title: "Quality-tested, robust, in keeping with the times",
        text: "Proven a thousand times over on the world's roads",
      },
    ],
    portfolioTitle: "MEYLE ORIGINAL: Top quality at a fair price",
    portfolioBody:
      "MEYLE ORIGINAL parts are manufactured with an OE-compliant fit in full accordance with MEYLE specifications and fit just like the original in every detail.",
    featured: [
      {
        title: "MEYLE ORIGINAL shock absorbers",
        body: "Developed by our engineers in Hamburg for maximum reliability, a perfect fit and a long service life. Your partner for safe driving.",
        highlights: [
          "100% tested MEYLE quality",
          "A precision fit like the original",
          "Developed in Germany",
          "Available for many vehicles in Europe",
        ],
        image: "/images/meyle/suspension/shock-absorbers.webp",
      },
      {
        title: "MEYLE ORIGINAL wheel bearing repair kit",
        body: "Making wheel bearing replacement simpler than ever. The pre-assembled unit and included accessories eliminate the need for special tools and presses.",
        highlights: [
          "Saves up to 50% working and preparation time",
          "No special tools required",
          "No pressing required",
          "Easy to install including fastening material",
        ],
        image: "/images/meyle/drive/wheel-bearing-kit.webp",
      },
      {
        title: "MEYLE ORIGINAL water pump",
        body: "The water pump forms the heart of the cooling system. MEYLE water pumps offer high quality and reliability with a 100,000-mile guarantee (with a properly flushed cooling system).",
        highlights: [
          "OE-compliant fit in accordance with MEYLE specifications",
          "100,000-mile guarantee",
          "Durable mechanical seal for many models",
        ],
        image: "/images/meyle/thermal/water-pumps.webp",
      },
      {
        title: "MEYLE ORIGINAL drive shaft Volvo XC60 I",
        body: "Top quality and outstanding traction with ball spline technology. Lightweight design for optimal driving dynamics and efficiency.",
        highlights: [
          "Stronger axle articulation for outstanding traction",
          "Optimised driving dynamics thanks to lightweight displacement unit",
          "Increased efficiency with space-saving outer joint",
        ],
        image: "/images/meyle/workshops/highlights/01-drive-shaft.webp",
      },
    ],
    storyTitle: "The DNA of the original – at a fair price",
    storyBody:
      "A car is more than just a means of transportation – it is individual mobility that needs to be preserved. MEYLE ORIGINAL parts help! We offer the quality of the original at a fair price. Each part is perfectly matched to the vehicle and ideal for a repair in line with the current value – and satisfied customers.",
    storyImage: "/images/meyle/lines/original.webp",
    marquee: "MEYLE ORIGINAL. ",
    nav: [
      { href: "#benefits-intro", label: "Benefits" },
      { href: "#portfolio", label: "Products" },
      { href: "#story", label: "Quality" },
      { href: "/parts-catalog", label: "Catalog" },
    ],
  },
  pd: {
    eyebrow: "Product lines",
    title: "MEYLE PD",
    headline: "Advanced design and technology",
    description:
      "Advanced, tested, optimised – and now ready for the road. And for you.",
    heroImage: "/images/meyle/lines/pd.webp",
    heroAlt: "MEYLE PD spare parts",
    introTitle: "Because 'good enough' just won't cut it",
    introBody:
      "Only the original? Not with us. With MEYLE PD, we go even further – with improved components and solutions as well as additional functions. Our engineers analyse original parts down to the smallest detail and, on that basis, develop products with improved function, performance or design.\n\nOne thing is clear: MEYLE PD takes performance to a whole new level. Improved functions and quality that go beyond the standard. For everyone who expects more than just a spare part.",
    standFor: [
      "Improved properties versus standard parts",
      "Specially developed for demanding applications",
      "Smart solutions workshops can sell",
      "Around 1,300 products – and growing",
    ],
    benefits: [
      {
        title: "Improved properties",
        text: "In terms of function, performance, comfort or design",
      },
      {
        title: "Specially developed",
        text: "In multi-stage reengineering processes",
      },
      {
        title: "Smart solutions & products",
        text: "All further developed & improved",
      },
      {
        title: "Around 1,300 products",
        text: "In a growing portfolio",
      },
    ],
    portfolioTitle: "Developed for performance. Built for the future.",
    portfolioBody:
      "The MEYLE PD selection is growing with the requirements of modern vehicles. We currently offer around 1,300 products, with a focus on brakes and filters.",
    featured: [
      {
        title: "MEYLE PD brake discs",
        body: "Modern coating for long-lasting protection against corrosion. Made of a metal alloy with a higher carbon content for optimised resistance to distortion under great strain.",
        highlights: [
          "Powerful braking performance",
          "Especially durable",
          "Innovative technology",
          "Effortless installation",
        ],
        image: "/images/meyle/brakes/brake-discs.webp",
      },
      {
        title: "MEYLE PD cabin air filter",
        body: "Breathe a sigh of relief. MEYLE PD cabin air filters improve the air inside the vehicle by filtering out fine dust and nitrogen oxides (NOx) more effectively.",
        highlights: [
          "High-quality filters with multilayer fibre structure",
          "Permanently binds nitrogen oxides (NOx)",
          "Protection from unpleasant odours",
        ],
        image: "/images/meyle/filters/cabin.webp",
      },
      {
        title: "Two component MEYLE PD brake discs",
        body: "Experience the difference – not only on the road, but also in installation. No degreasing necessary, and a suitable fixing screw is included in 99% of cases.",
        highlights: [
          "Reduced weight",
          "High-quality coating – no degreasing necessary",
          "Less vibration for more driving comfort",
          "Long-lasting corrosion protection",
        ],
        image: "/images/meyle/brakes/raulf-brakes.webp",
      },
      {
        title: "MEYLE PD brake pads",
        body: "Extraordinary technological qualities enable just the right dose of braking with optimal responsiveness – from the first time you apply the brakes.",
        highlights: [
          "Powerful braking performance, always ready",
          "Optimised blend for less brake dust",
          "Eco-friendly: free of heavy metals and copper",
          "Fulfils and exceeds ECE R90 standards",
        ],
        image: "/images/meyle/brakes/brake-pads.webp",
      },
    ],
    storyTitle: "MEYLE PD – because making things better is in our DNA",
    storyBody:
      "Every MEYLE PD part boasts improved function, performance, comfort or design properties. In our own development and testing departments, engineers and automotive technicians analyse and optimise selected vehicle parts. The result of this multistage re-engineering process is vehicle components for everyone who wants more than 'just the original'.",
    storyImage: "/images/meyle/lines/pd.webp",
    marquee: "MEYLE PD. ",
    nav: [
      { href: "#benefits-intro", label: "Benefits" },
      { href: "#portfolio", label: "Products" },
      { href: "#story", label: "DNA" },
      { href: "/products/brakes", label: "Brakes" },
    ],
  },
  kits: {
    eyebrow: "Product lines",
    title: "MEYLE KIT",
    headline: "Perfectly coordinated: MEYLE KITs for professionals",
    description:
      "Everything you need in one smart set: MEYLE KITs are perfectly put together and save time and effort in your workshop.",
    heroImage: "/images/meyle/lines/kits.webp",
    heroAlt: "MEYLE KIT repair sets",
    introTitle: "Screw, don't search – MEYLE KIT",
    introBody:
      "No more spare parts chaos! MEYLE KITs offer everything you need for an efficient repair – perfectly put together, from a single source and, of course, always a 100% perfect fit. This means you avoid incorrect deliveries, save time and enable fast, professional repairs. Available as ORIGINAL, PD and HD!",
    standFor: [
      "All-in-one – every attachment part in the set",
      "Everything thought of for the job",
      "Save time and money in everyday workshop life",
      "In 3 lines: ORIGINAL, PD and HD",
    ],
    benefits: [
      {
        title: "All-in-one",
        text: "With all components required for installation and removal",
      },
      {
        title: "Everything thought of",
        text: "Many kits already come with the appropriate mounting material",
      },
      {
        title: "Save time and money",
        text: "Through simplified, efficient repairs in the workshop",
      },
      {
        title: "In 3 lines",
        text: "Available as ORIGINAL, PD and HD",
      },
    ],
    portfolioTitle: "From professionals for professionals: MEYLE KITs",
    portfolioBody:
      "Many repairs are extensive and complex – and that's exactly what MEYLE KITs are for. From drivetrain to chassis: our kits contain perfectly matched components for numerous vehicle models.",
    featured: [
      {
        title: "Oil change KIT for automatic transmissions",
        body: "Place your trust in our all-in-one oil change solution with filters, seals and bolts. Precisely coordinated for optimal protection of the automatic transmission.",
        highlights: [
          "All-in-one set with high-precision components",
          "High-quality materials",
          "Precisely coordinated for a variety of automatic transmissions",
        ],
        image: "/images/meyle/workshops/mega-oil-kits.webp",
      },
      {
        title: "ABS sensor repair KIT",
        body: "Replace just the damaged ABS sensor and the sensor ring – exclusively from MEYLE. That not only saves time and money, but is also better for the environment.",
        highlights: [
          "Effectively saves time and money",
          "Eco-friendly",
          "High precision and durability",
        ],
        image: "/images/meyle/electronics/assistance.webp",
      },
      {
        title: "MEYLE ORIGINAL filter KITs",
        body: "Choose MEYLE ORIGINAL filter KITs in short or large for different service requirements. Premium MEYLE quality for reliable protection.",
        highlights: [
          "All vehicle-specific filters under a single article number",
          "A perfect fit and reliability",
          "Available in short and large",
        ],
        image: "/images/meyle/filters/kits.webp",
      },
      {
        title: "Cardan shaft repair kit",
        body: "A sustainable solution for repairing the cardan shaft: precision-matched components extend service life and reduce waste.",
        highlights: [
          "Sustainable repair through less waste",
          "All-in-one kit including perfectly matched components",
          "Efficient replacement with less effort",
        ],
        image: "/images/meyle/drive/cardan-kits.webp",
      },
      {
        title: "MEYLE ORIGINAL oil change kit for Tesla",
        body: "Everything you need: the MEYLE oil change kit for the Tesla drive unit. Simple oil change with filter, magnetic drain plug and all necessary parts.",
        highlights: [
          "Complete package including filter and magnetic drain plug",
          "Complies with Tesla OE standards",
          "Efficient maintenance for Tesla models S/3/X/Y",
        ],
        image: "/images/meyle/workshops/highlights/05-oil-kit.webp",
      },
    ],
    storyTitle: "One KIT, everything included",
    storyBody:
      "Our comprehensive KITs contain all the components required for installation and removal. For example, our oil change KITs for automatic transmissions contain the right oil as well as seals, screws, filters, magnets and even the drain and/or fill plug. Many of our MEYLE KITs already come with the right mounting material in a box – eliminating the need to search and saving time when ordering.",
    storyImage: "/images/meyle/lines/kits.webp",
    marquee: "MEYLE KIT. ",
    nav: [
      { href: "#benefits-intro", label: "Benefits" },
      { href: "#portfolio", label: "KITs" },
      { href: "#story", label: "All-in-one" },
      { href: "/workshops", label: "Workshops" },
    ],
  },
};

export function ProductLinePage({
  line,
}: {
  line: keyof typeof lines;
}) {
  const content = lines[line];
  const otherLines = productLines.filter(
    (item) => item.href !== `/products/${line}`,
  );

  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.2rem,5vw,4.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            {content.title}: {content.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-7 text-text/75">
            {content.description}
          </p>
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
          src={content.heroImage}
          alt={content.heroAlt}
          fill
          loading="eager"
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      <InfoBanner />

      <nav className="sticky top-[calc(var(--header-offset,72px))] z-30 flex flex-wrap gap-x-8 gap-y-2 border-b border-line/15 bg-white/95 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm lg:px-10 xl:px-14">
        {content.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-muted hover:text-navy"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <IntroWithContact
        title={content.introTitle}
        body={content.introBody}
        standFor={[...content.standFor]}
        topic={content.title}
        contactBody="Do you have any questions about our product lines? We will be happy to help you."
      />

      <BenefitRow benefits={[...content.benefits]} />

      <FeaturedPortfolio
        title={content.portfolioTitle}
        body={content.portfolioBody}
        items={content.featured}
      />

      <section id="story" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              {content.storyTitle}
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75 md:text-[16px]">
              {content.storyBody}
            </p>
            <div className="mt-10">
              <ArrowButton href="/parts-catalog">Visit parts catalog</ArrowButton>
            </div>
          </div>
          <div className="relative min-h-80 aspect-[4/3] bg-deep-navy lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src={content.storyImage}
              alt=""
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <Marquee phrase={content.marquee} />

      <section className="grid border-b border-line/15 md:grid-cols-2 lg:grid-cols-3">
        {otherLines.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group border-b border-line/15 px-6 py-10 md:border-r"
          >
            <p className="font-display text-3xl font-black italic uppercase">
              {item.label}
            </p>
            {item.description ? (
              <p className="mt-3 text-sm leading-6 text-muted">
                {item.description}
              </p>
            ) : null}
            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy">
              Learn more
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </p>
          </Link>
        ))}
      </section>

      <DiscoverMore />
      <InnerEnd />
    </>
  );
}

function FeaturedPortfolio({
  title,
  body,
  items,
}: {
  title: string;
  body: string;
  items: FeaturedProduct[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (next: number) => {
    const clamped = Math.max(0, Math.min(items.length - 1, next));
    setIndex(clamped);
    const el = scrollerRef.current?.children[clamped] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <section id="portfolio" className="border-b border-line/15 bg-white">
      <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              {title}
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-text/75 md:text-[16px]">
              {body}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollTo(index - 1)}
              className="flex h-11 w-11 items-center justify-center border border-deep-navy text-deep-navy transition-colors hover:bg-deep-navy hover:text-white"
              aria-label="Previous product"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollTo(index + 1)}
              className="flex h-11 w-11 items-center justify-center border border-deep-navy text-deep-navy transition-colors hover:bg-deep-navy hover:text-white"
              aria-label="Next product"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, i) => (
            <article
              key={item.title}
              className="grid w-[min(92vw,920px)] shrink-0 snap-start border border-line/15 bg-off-white md:grid-cols-2"
            >
              <div className="relative aspect-[4/3] bg-deep-navy md:aspect-auto md:min-h-[380px]">
                <SmartImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 90vw"
                />
                <span className="absolute left-4 top-4 bg-deep-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                  {String(i + 1).padStart(2, "0")} – {String(items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col justify-center px-6 py-8 lg:px-10">
                <h3 className="font-sans text-[22px] font-semibold leading-snug text-deep-navy">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-text/75">
                  {item.body}
                </p>
                <ul className="mt-6 space-y-2.5 text-[14px] leading-6 text-text/80">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
