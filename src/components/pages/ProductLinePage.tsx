import { ArrowButton } from "@/components/ArrowButton";
import { InfoBanner } from "@/components/home/InfoBanner";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductSlide";
import {
  BenefitRow,
  DiscoverMore,
  IntroWithContact,
  JumpNav,
  ProductPhotoHero,
} from "@/components/pages/product-sections";
import { InnerEnd } from "@/components/ui/SplitSection";
import { productLines, products } from "@/data/site";

const lines = {
  original: {
    title: "AUTOPART ORIGINAL",
    headline: "A perfect fit like original spare parts",
    description: "So perfectly coordinated that the choice is easy.",
    introTitle: "Fits like a glove – delivers as promised.",
    introBody:
      "AUTOPART ORIGINAL parts are manufactured with precision and perfectly tailored to each vehicle, which not only simplifies installation, but also makes reliability a standard. With more than 21,000 spare parts, there’s something for just about every current passenger car and many vans – developed with an OE-compliant fit in accordance with AUTOPART specifications.",
    standFor: [
      "Fits 100% – just like the original in every detail",
      "Outstanding price-performance ratio",
      "Proven base materials as the basis for high reliability",
      "Quality-tested, robust, proven on the world’s roads",
    ],
    benefits: [
      { title: "Fits 100%", text: "Just like the original in every detail" },
      { title: "Outstanding price-performance ratio", text: "The first choice for a long vehicle life" },
      { title: "Proven base materials", text: "As the basis for high reliability" },
      { title: "Quality-tested, robust, in keeping with the times", text: "Proven a thousand times over on the world's roads" },
    ],
    marquee: "AUTOPART ORIGINAL. ",
    image: "/images/pages/factory.jpg",
  },
  hd: {
    title: "AUTOPART HD",
    headline: "Better than OE",
    description:
      "Over 20 years of HD. Benefit from enhanced automotive spare parts for the highest demands. More durability, more reliability, more AUTOPART HD.",
    introTitle: "Why use an original part when you can do better?",
    introBody:
      "Recalls and vulnerable standard parts cost workshops time, money and nerves. AUTOPART HD offers the solution: structurally improved and reinforced parts that make the difference. HD stands for High Durability. Thanks to reinforced design, higher quality materials and our expertise as a developer and manufacturer, vehicles with AUTOPART HD remain reliable on the road for longer. 4-year warranty included.",
    standFor: [
      "Technically optimized compared to the manufacturer’s original parts",
      "More durable due to reinforced or improved design",
      "High quality thanks to selected materials",
      "4-year guarantee on all AUTOPART HD parts",
    ],
    benefits: [
      { title: "Technically optimized", text: "Compared to the manufacturer's original parts" },
      { title: "More durable", text: "Due to reinforced or improved design" },
      { title: "High quality", text: "Thanks to selected materials" },
      { title: "4-year guarantee", text: "On all AUTOPART HD parts" },
    ],
    marquee: "HD = High Durability. ",
    image: "/images/pages/quality.jpg",
  },
  pd: {
    title: "AUTOPART PD",
    headline: "More performance. A sophisticated look.",
    description:
      "The PD selection is growing with modern vehicles – around 1,300 products with a focus on brakes and filters.",
    introTitle: "Performance you can feel – and sell.",
    introBody:
      "AUTOPART PD delivers high-performance filters and brake components designed for demanding driving conditions, cleaner air and measurable workshop value. Every PD part boasts improved function or design properties, setting standards in the process.",
    standFor: [
      "Higher performance for ambitious drivers and professional workshops",
      "Cleaner results – filtration and braking customers can feel",
      "Workshop-friendly installation",
      "A product line with a visible quality story",
    ],
    benefits: [
      { title: "Higher performance", text: "For ambitious drivers and professional workshops" },
      { title: "Cleaner results", text: "Filtration that customers can feel immediately" },
      { title: "Workshop-friendly", text: "Designed for efficient installation" },
      { title: "Clear differentiation", text: "A product line with a visible quality story" },
    ],
    marquee: "AUTOPART PD. ",
    image: "/images/news/filters.jpg",
  },
  kits: {
    title: "AUTOPART KIT",
    headline: "Save time and money in everyday workshop life",
    description: "Complete repair solutions. All parts under one number.",
    introTitle: "Everything you need. Nothing you hunt for.",
    introBody:
      "AUTOPART KITs bundle everything required for a professional repair: filters, fasteners, fluids and wear parts. Less search time, fewer missing pieces, better workshop results. Discover how efficient work in the workshop can be.",
    standFor: [
      "One number – all attachment parts in a complete package",
      "Faster jobs with less picking",
      "Lower logistics cost through reduced packaging and storage",
      "OE-compliant specification for professional use",
    ],
    benefits: [
      { title: "One number", text: "All attachment parts in a complete package" },
      { title: "Faster jobs", text: "Less picking, less missing pieces" },
      { title: "Lower logistics cost", text: "Reduced packaging, storage and transport" },
      { title: "OE-compliant", text: "Specified for professional workshop use" },
    ],
    marquee: "AUTOPART KIT. ",
    image: "/images/hero/contact.jpg",
  },
} as const;

export function ProductLinePage({
  line,
}: {
  line: keyof typeof lines;
}) {
  const content = lines[line];
  const filtered = products.filter((product) =>
    product.category.toLowerCase().includes(line === "kits" ? "kit" : line),
  );
  const otherLines = productLines.filter(
    (item) => item.href !== `/products/${line}`,
  );

  return (
    <>
      <ProductPhotoHero
        label="Product line"
        title={`${content.title}: ${content.headline}`}
        description={content.description}
        image={content.image}
        imageAlt={content.title}
      />
      <InfoBanner />
      <JumpNav
        items={[
          { href: "#benefits", label: "Benefits" },
          { href: "#products", label: "Products" },
          { href: "/workshops/trainings", label: "Workshops" },
        ]}
      />
      <IntroWithContact
        title={content.introTitle}
        body={content.introBody}
        standFor={[...content.standFor]}
        topic={content.title}
      />
      <BenefitRow benefits={[...content.benefits]} />
      <section id="products" className="px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase">
            {content.title}: quality you can install
          </h2>
          <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {(filtered.length ? filtered : products).map((product) => (
              <ProductCard key={product.number} product={product} />
            ))}
          </div>
          <div className="mt-12">
            <ArrowButton href="/parts-catalog">Visit parts catalog</ArrowButton>
          </div>
        </div>
      </section>
      <Marquee phrase={content.marquee} />
      <section className="grid border-b border-line/15 md:grid-cols-2 lg:grid-cols-3">
        {otherLines.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group border-b border-line/15 px-6 py-10 md:border-r"
          >
            <p className="font-display text-3xl font-black italic uppercase">{item.label}</p>
            {item.description ? (
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
            ) : null}
            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy">
              Learn more
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </p>
          </a>
        ))}
      </section>
      <DiscoverMore />
      <InnerEnd />
    </>
  );
}
