import Link from "next/link";
import { InfoBanner } from "@/components/home/InfoBanner";
import { ArrowButton } from "@/components/ArrowButton";
import { Marquee } from "@/components/Marquee";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";

const navItems = [
  { href: "#actions", label: "Our actions" },
  { href: "#approach", label: "Our approach" },
  { href: "#goals", label: "Our goals" },
  { href: "#today", label: "What we do today" },
  { href: "#un", label: "United Nations" },
];

const esgPillars = [
  {
    title: "Environment",
    body: "The goal of a sustainable value chain at MEYLE is closely linked to the ecological challenges facing our planet. We focus on environmentally friendly measures such as the sustainable use of resources, waste avoidance and the use of renewable energies in order to actively contribute to climate protection.",
  },
  {
    title: "Social",
    body: "This is about all of us. This area includes measures for our employees, their families, the Group and social commitment in the form of donations and collaborations.",
  },
  {
    title: "Governance",
    body: "Our company is committed to the highest ethical standards and promotes a culture of integrity. Through clear guidelines and codes of conduct, we ensure that we act responsibly and always comply with all relevant laws and regulations.",
  },
];

const todaySteps = [
  {
    title: "Energy",
    body: "The MEYLE headquarters in Hamburg is audited in accordance with DIN EN 16247-1 Energy. We rely on 100% green electricity at the Hamburg site and use solar energy through our own solar systems.",
  },
  {
    title: "Packaging",
    body: "Thanks to a comprehensive conversion of packaging and shipping materials, 4 tons and over 550 km of plastic packaging are saved per year. As an alternative, MEYLE now uses paper tape and shipping bags.",
  },
  {
    title: "Certification",
    body: "We were awarded the silver medal by EcoVadis for the first time - placing us in the top 15% of all companies assessed for responsible and future-oriented action.",
  },
  {
    title: "Manufacturing",
    body: "We have switched to cathodic dip coating (CDC) for stabilizers, joint sets and drive shafts - ideal corrosion protection with high paint yield and recyclable water. With axial joints, ball joints and tie rod ends, we save tons of plastic by dispensing with protective caps.",
  },
];

const learnMore = [
  {
    title: "Donation & funding partnerships",
    body: "Social projects and partnerships worldwide - education, equal opportunities and environmental protection.",
    href: "/about/partnerships",
    image: "/images/meyle/about/partnerships-hero.webp",
    imageAlt: "MEYLE partnerships",
  },
  {
    title: "Who we are",
    body: "MEYLE: We turn good into better - your partner in the independent aftermarket.",
    href: "/about",
    image: "/images/meyle/about/who-hero.webp",
    imageAlt: "About MEYLE",
  },
  {
    title: "Career",
    body: "Shape a responsible future with the MEYLE team.",
    href: "/career",
    image: "/images/meyle/career/hero.webp",
    imageAlt: "MEYLE careers",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            About us
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.2rem,5vw,4.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Taking responsibility. Acting sustainably.
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
          src="/images/meyle/about/sustainability-hero.webp"
          alt="MEYLE sustainability"
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

      {/* Why sustainability / Our actions */}
      <section id="actions" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Why we focus on sustainability
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75 md:text-[16px]">
              <p>
                Climate change, scarcity of resources and the switch to alternative drive
                systems present us with major challenges. The need for action has never
                been greater. Together with our partners, we are working to make our
                processes more efficient and future-proof.
              </p>
              <p>
                Sustainability has a long tradition at MEYLE. Even our company founder
                Wulf Gaertner lived by values such as responsibility, cooperation and
                profitability: &ldquo;The friendship of those we serve is the foundation
                of our success.&rdquo;
              </p>
            </div>
          </div>
          <aside className="flex flex-col justify-center border-t border-line/15 px-5 py-12 lg:border-l lg:border-t-0 lg:px-10 lg:py-20 xl:px-14">
            <h3 className="font-sans text-[20px] font-semibold text-deep-navy">
              Contact us
            </h3>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-text/70">
              Do you have questions about sustainability? We look forward to hearing
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

      {/* ESG approach */}
      <section id="approach" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative min-h-80 aspect-[4/3] bg-off-white lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/about/esg.webp"
              alt="MEYLE sustainability triad - ESG"
              fill
              className="object-contain p-8"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              The MEYLE sustainability triad
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              MEYLE pursues a holistic approach to sustainability based on the principles
              of ESG (Environmental, Social, Governance). We are convinced that
              sustainable development can only be successful if ecological, economic and
              social goals are balanced and harmonized.
            </p>
            <div className="mt-10 space-y-6">
              {esgPillars.map((pillar) => (
                <div key={pillar.title}>
                  <h3 className="text-[17px] font-semibold text-deep-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-7 text-text/70">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Marquee phrase="Responsibility. For everyone." />

      {/* Goals / sustainability at every stage */}
      <section id="goals" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:order-1 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Sustainability at every stage
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75">
              <p>
                Sustainable development and action that runs through our entire value
                chain: from product development and production to logistics processes,
                distribution and use. An ambitious goal. That&apos;s why we work every
                day to become even better and to make processes and procedures even more
                sustainable and efficient, as well as to focus on the circular economy in
                the long term - for us and for future generations.
              </p>
              <p>
                When implementing measures, we are guided by the 17 UN Sustainable
                Development Goals (SDGs) in order to achieve a sustainable and efficient
                value creation cycle.
              </p>
            </div>
          </div>
          <div className="relative order-1 min-h-80 aspect-[4/3] lg:order-2 lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/about/forest.webp"
              alt="Sustainable future and nature"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* What we do today */}
      <section id="today" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/about/charging.webp"
              alt="Sustainable mobility and charging"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Our steps for tomorrow
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              Sustainability is not just a goal for us, but a daily driver. At our
              Hamburg headquarters, we use 100% green electricity and optimize our energy
              consumption. We use innovative packaging and production solutions to reduce
              tons of plastic and waste every year. Digitalization helps us to conserve
              paper resources, while our commitment along the supply chain has been
              awarded EcoVadis Silver status.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1680px] border-t border-line/15 md:grid-cols-2 xl:grid-cols-4">
          {todaySteps.map((step) => (
            <div
              key={step.title}
              className="border-b border-line/15 px-5 py-10 md:border-r xl:border-b-0 xl:last:border-r-0 lg:px-10 xl:px-14"
            >
              <h3 className="text-[18px] font-semibold text-deep-navy">{step.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-text/70">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* United Nations */}
      <section id="un" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Our commitment to a responsible future
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75">
              <p>
                As part of the Wulf Gaertner Autoparts AG group of companies, MEYLE is
                systematically committed to sustainability. Since joining the UN Global
                Compact, we have firmly anchored the promotion of the ten principles in
                the areas of human rights, labor standards, environmental protection and
                anti-corruption in our strategy.
              </p>
              <p>
                Sustainability is more than just a goal for us - it is an ongoing
                process. We are working to implement clear guidelines, transparent
                control mechanisms and ambitious climate targets in our business
                activities. With a zero tolerance for corruption and a strong ethical
                foundation, we are committed to responsible action that strengthens the
                trust of our stakeholders.
              </p>
            </div>
            <div className="mt-10">
              <ArrowButton href="/about/partnerships">
                Donation &amp; funding partnerships
              </ArrowButton>
            </div>
          </div>
          <div className="relative min-h-80 aspect-[4/3] bg-white lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/about/sdg.webp"
              alt="United Nations Sustainable Development Goals"
              fill
              className="object-contain p-8"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Learn more */}
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
