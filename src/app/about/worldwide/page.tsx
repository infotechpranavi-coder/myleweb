import Link from "next/link";
import { InfoBanner } from "@/components/home/InfoBanner";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";

const locations = [
  {
    title: "Germany",
    body: "Our company's heart beats in Germany: headquarters, development, logistics and service – all in one central location.",
  },
  {
    title: "France",
    body: "In Toulouse, MEYLE France ensures fast availability and strong partnerships in France through innovative logistics and high quality.",
  },
  {
    title: "United Kingdom",
    body: "In the United Kingdom, MEYLE parts are available exclusively from the British subsidiary.",
  },
  {
    title: "Italy",
    body: "Our offer for workshops in Italy: technical data, catalogs, dealer contact details and support in finding the right MEYLE spare parts.",
  },
  {
    title: "Spain",
    body: "MEYLE is present on the strategically important Spanish market with its subsidiary MEYCAR.",
  },
  {
    title: "Malaysia",
    body: "Asia is a growth market for MEYLE. Our subsidiary in Malaysia strengthens our presence and offers a wide range of vehicle parts for European passenger cars and commercial vehicles.",
  },
  {
    title: "North America",
    body: "North America is a key market for MEYLE in the growing spare parts business. We offer local technical service, sales and customer support for the USA and Canada.",
  },
  {
    title: "Japan",
    body: "For MEYLE, Japan is an important location for quality, precision and innovative mobility solutions. Locally, we are strengthening customer service, sales and close cooperation with partners in the region.",
  },
];

const learnMore = [
  {
    title: "Who we are",
    body: "MEYLE: We turn good into better - your partner in the independent aftermarket.",
    href: "/about",
    image: "/images/meyle/about/who-hero.webp",
    imageAlt: "About MEYLE",
  },
  {
    title: "Sustainability",
    body: "Taking responsibility. Acting sustainably.",
    href: "/about/sustainability",
    image: "/images/meyle/about/sustainability-hero.webp",
    imageAlt: "MEYLE sustainability",
  },
  {
    title: "Career",
    body: "Full speed ahead into your professional future with MEYLE.",
    href: "/career",
    image: "/images/meyle/career/hero.webp",
    imageAlt: "MEYLE careers",
  },
];

export default function WorldwidePage() {
  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            About us
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.2rem,5vw,4.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Based in Hamburg - at home worldwide
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
          src="/images/meyle/about/worldwide-hero.webp"
          alt="MEYLE worldwide locations"
          fill
          loading="eager"
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      <InfoBanner />

      {/* Intro + contact */}
      <section className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              MEYLE locations worldwide - also near you
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75 md:text-[16px]">
              <p>
                What began decades ago in Hamburg is now a global success story: the
                quality of MEYLE spare parts today impresses workshops and drivers in
                over 120 countries. We remain true to our roots - with a Hanseatic
                pioneering spirit and the ambition to set standards worldwide.
              </p>
              <p>
                Our locations combine international expertise with local market
                understanding - for quality and service that impresses all over the
                world.
              </p>
            </div>
          </div>
          <aside className="flex flex-col justify-center border-t border-line/15 px-5 py-12 lg:border-l lg:border-t-0 lg:px-10 lg:py-20 xl:px-14">
            <h3 className="font-sans text-[20px] font-semibold text-deep-navy">
              Contact us
            </h3>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-text/70">
              Looking for your local MEYLE contact? We speak your language and know your
              needs.
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

      {/* Locations grid */}
      <section className="border-b border-line/15 bg-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <div className="grid gap-px border border-line/15 bg-line/15 md:grid-cols-2 xl:grid-cols-4">
            {locations.map((loc) => (
              <article key={loc.title} className="bg-white p-6 lg:p-8">
                <h3 className="font-display text-[clamp(1.3rem,2vw,1.6rem)] font-black italic uppercase text-deep-navy">
                  {loc.title}
                </h3>
                <p className="mt-4 text-[14px] leading-6 text-text/75">{loc.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-b border-line/15 bg-deep-navy">
        <div className="mx-auto max-w-[1680px] px-5 py-16 lg:px-10 lg:py-24 xl:px-14">
          <blockquote className="max-w-4xl">
            <p className="font-display text-[clamp(1.4rem,3vw,2.2rem)] font-black italic leading-snug text-white">
              &ldquo;Not only is the independent aftermarket becoming increasingly
              global, we as a company are also focusing more and more on an international
              and, above all, localized strategy. For us, this not only includes
              strategic management from the Hamburg headquarters, but also strong local
              teams who know and understand their market and its players and can
              therefore serve them in the best possible way.&rdquo;
            </p>
            <footer className="mt-8 text-[14px] font-semibold uppercase tracking-[0.14em] text-turquoise">
              Marc Siemssen, Member of the Board of MEYLE AG
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Learn more */}
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
