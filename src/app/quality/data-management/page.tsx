"use client";

import Link from "next/link";
import { InfoBanner } from "@/components/home/InfoBanner";
import { Marquee } from "@/components/Marquee";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";

const benefits = [
  {
    title: "Quality",
    body: "We attach great importance to the reliable data quality of our product information: Thoroughly researched reference numbers and vehicle applications as well as comprehensive product descriptions ensure correct orders and minimize return rates.",
    image: "/images/meyle/quality/data/quality.webp",
  },
  {
    title: "Data standards",
    body: "We know the standards and rely on high-quality data. Thanks to efficient processes, we make targeted and effective use of synergies.",
    image: "/images/meyle/quality/data/process.webp",
  },
  {
    title: "Supply chain efficiency",
    body: "Fast orders and correct deliveries = optimum flow of goods. Thanks to up-to-date product data, MEYLE customers can identify and order parts quickly and reliably - at any time.",
    image: "/images/meyle/quality/data/product.webp",
  },
  {
    title: "Potentials",
    body: "With MEYLE at your side, you can rely on fact-based decisions: We use data to identify trends at an early stage and develop the innovative parts and solutions that the market demands today and will need tomorrow.",
    image: "/images/meyle/quality/data/potential.webp",
  },
];

const standards = [
  {
    title: "TecDoc & TecAlliance",
    body: 'MEYLE has been a Premier Data Supplier to the TecAlliance from the very beginning - the highest award for continuous compliance with data standards. The close cooperation with the TecAlliance guarantees a smooth exchange of data. We continuously supply precise product data that flows into the "TecDoc" catalog, where it is always up to date.',
  },
  {
    title: "MAM & Autocat",
    body: 'We also provide our data for the UK markets in our renowned high quality. Our TecDoc data records flow into the UK catalog "Autocat" via the software provider MAM.',
  },
  {
    title: "ACES/PIES & Auto Care",
    body: 'In the North American market, we make our data available to the local ACES® and PIES™ standard. We make our information available in the network and therefore to the local market via the "PDM Automotive" exchange platform. We are committed to continuously improving the standards and establishing the quality of our data for this market as well. To this end, we maintain a regular exchange with the Auto Care Association, the North American counterpart of TecAlliance.',
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
    title: "Quality management",
    body: "Highest standards, tested in Germany - MEYLE stands for quality that sets standards!",
    href: "/quality/quality-management",
    image: "/images/meyle/quality/learn-quality.webp",
  },
];

export default function DataManagementPage() {
  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            Data management
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Everything in view. Full control.
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
          src="/images/meyle/quality/data/hero.webp"
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
          { href: "#benefits", label: "Benefit from data" },
          { href: "#standards", label: "Standards" },
          { href: "#partnerships", label: "Partnerships" },
          { href: "#team", label: "Team" },
          { href: "#future", label: "Highest demands" },
        ].map((item) => (
          <a key={item.href} href={item.href} className="text-muted hover:text-navy">
            {item.label}
          </a>
        ))}
      </nav>

      <section id="benefits" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              MEYLE data management as the key to success
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75">
              <p>
                In the global independent aftermarket, reliable data that is available at
                all times is the key to successful collaboration. Every product is linked
                to a wide range of information that flows from OEMs, manufacturers and
                dealers to workshops and mechanics.
              </p>
              <p>
                At MEYLE, a team of specialists guarantees the provision of precise,
                up-to-date and comprehensive product data - always to the highest quality
                standards. Our goals? To minimize downtimes and speed up work processes!
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

        <div className="mx-auto grid max-w-[1680px] gap-px border-t border-line/15 bg-line/15 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article key={item.title} className="bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-deep-navy">
                <SmartImage
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-deep-navy">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-text/70">{item.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-[1680px] border-t border-line/15 px-5 py-12 lg:px-10 xl:px-14">
          <blockquote className="max-w-3xl">
            <p className="font-display text-[clamp(1.3rem,2.4vw,1.8rem)] font-black italic leading-snug text-deep-navy">
              &ldquo;With the precise product data from MEYLE, we can find spare parts
              quickly and reliably at any time. This saves us valuable time and
              significantly reduces downtime in our workshops.&rdquo;
            </p>
            <footer className="mt-6 text-[14px] text-muted">
              Sven Franke, Sales House Manager at LKQ PV Automotive
            </footer>
          </blockquote>
        </div>
      </section>

      <section id="standards" className="border-b border-line/15 bg-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Efficient exchange: data standards for success
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-[15px] leading-7 text-text/75">
            <p>
              We work successfully with all common standards - worldwide. Whether in the
              European TecDoc catalog, the MAM format for England or the North American
              ACES/PIES standard. We speak the appropriate language.
            </p>
            <p>
              The outstanding expertise of our team and the regular further development of
              our systems are valued and recognized in the market. As an active
              participant in various expert panels and as a strategic partner in the
              expansion of systems, we&apos;re recognized as a driving force for
              innovative ideas. Our quality? Regularly tested and confirmed!
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {standards.map((item) => (
              <div key={item.title} className="border border-line/15 bg-off-white p-6">
                <h3 className="text-[17px] font-semibold text-deep-navy">{item.title}</h3>
                <p className="mt-4 text-[14px] leading-7 text-text/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee phrase="MEYLE data power." />

      <section id="partnerships" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Success through open communication with equals
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              MEYLE is a member of networks and maintains partnerships, for example to
              promote open access to vehicle data in the independent aftermarket (IAM). As
              a manufacturer, this gives us access to important vehicle data that is
              essential for the development, sales and service of our products.
            </p>
          </div>
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
            <SmartImage
              src="/images/meyle/quality/data/partners.webp"
              alt="Partnership handshake with city skyline overlay"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <section id="team" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative order-1 min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/quality/data/team.webp"
              alt="Five arms reaching over a table and holding on"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Automotive know-how meets data expertise
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75">
              <p>
                Success needs good minds, and we have found them. Our team combines
                automotive experts, data specialists and IT professionals to optimize
                everything to do with IAM data.
              </p>
              <p>
                We set standards - both internally and externally. We ensure the highest
                possible data quality in all its forms and for all the markets we serve.
                We rely on market standards and supply our data to various partners and
                catalogs - worldwide.
              </p>
              <p>What drives us? Excellence in data management - now and in the future!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="future" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Ensuring success. Today, tomorrow and beyond.
          </h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-[18px] font-semibold text-deep-navy">Preserving today</h3>
              <p className="mt-4 text-[15px] leading-7 text-text/75">
                MEYLE products come with a wealth of information and media: technical
                details, reference numbers, vehicle applications, product names and
                descriptions, images, videos, installation instructions, safety data
                sheets and more. We already have all of this under control today and
                deliver the highest quality.
              </p>
            </div>
            <div>
              <h3 className="text-[18px] font-semibold text-deep-navy">
                Looking to the future
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-text/75">
                However, we do not know what the world of product data will look like
                tomorrow and beyond. But we observe and analyze the market. Our experts
                regularly exchange ideas with market players and solution providers and
                are members of numerous expert panels, committees and associations. This
                enables us to maintain and improve the quality standards we have already
                established today.
              </p>
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
