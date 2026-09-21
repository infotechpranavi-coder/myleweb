import Link from "next/link";
import { InfoBanner } from "@/components/home/InfoBanner";
import { ArrowButton } from "@/components/ArrowButton";
import { Marquee } from "@/components/Marquee";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";

const navItems = [
  { href: "#about", label: "About us" },
  { href: "#origin", label: "Origin" },
  { href: "#drives", label: "What drives us" },
  { href: "#products", label: "Products" },
  { href: "#logistics", label: "Logistics" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#iam-connect", label: "IAM:CONNECT" },
];

const stats = [
  {
    value: "65",
    title: "Years of experience",
    body: "We have been active in the international spare parts business for over 65 years",
  },
  {
    value: "24,000",
    title: "Products in the range",
    body: "Our portfolio includes more than 24,000 parts - for cars and vans",
  },
  {
    value: "120",
    title: "Countries worldwide",
    body: "Workshops, dealers and drivers in around 120 countries rely on MEYLE parts and solutions",
  },
  {
    value: "1",
    title: "Goal: Better parts",
    body: "With innovations and in-house production, we ensure long-lasting solutions",
  },
];

const originCards = [
  {
    image: "/images/meyle/about/origin-1.webp",
    title: "From Hamburg to the world - always one step ahead",
    body: "MEYLE started in 1958 as an export company for spare parts. Today, MEYLE parts are used in over 120 countries - developed and produced with our own signature and our claim to make work easier for workshops.",
  },
  {
    image: "/images/meyle/about/origin-2.webp",
    title: "From export to expert. Parts became MEYLE.",
    body: "Tradition? Do we have. Innovation? We can. And that's why trade became a brand: MEYLE developed from an exporter to a spare parts professional with its own production facilities. The goal ever since: parts that last longer - with smarter solutions, tailor-made for professionals and their everyday work in the workshop.",
  },
];

const learnMore = [
  {
    title: "MEYLE worldwide",
    body: "We are not only a global player, but also a local partner. Find out more about our locations and MEYLE professionals in your area.",
    href: "/about/worldwide",
    image: "/images/meyle/about/worldwide-hero.webp",
    imageAlt: "MEYLE locations worldwide",
  },
  {
    title: "Sustainability",
    body: "Taking responsibility. Acting sustainably - for people, the environment and profitable mobility.",
    href: "/about/sustainability",
    image: "/images/meyle/about/sustainability-hero.webp",
    imageAlt: "MEYLE sustainability",
  },
  {
    title: "Career",
    body: "Full speed ahead into your professional future - join the MEYLE team in Hamburg and beyond.",
    href: "/career",
    image: "/images/meyle/career/hero.webp",
    imageAlt: "MEYLE career opportunities",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            About us
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.2rem,5vw,4.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            MEYLE: We turn good into better!
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
          src="/images/meyle/about/who-hero.webp"
          alt="MEYLE - who we are"
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

      {/* Partner intro + contact + stats */}
      <section id="about" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Your reliable partner in the independent aftermarket
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75 md:text-[16px]">
              <p>
                MEYLE makes the independent aftermarket better - with strong parts and
                smart solutions for cars and vans. We do this in the same way as our
                founder: partnership is the key to success. That&apos;s why we work
                closely with partners to make the driver&apos;s world a better place. We
                ensure top quality in Hamburg, from development to dispatch.
              </p>
              <p>
                Together with dealers and workshops in around 120 countries, we ensure
                that drivers can count on MEYLE. And we not only supply high-quality
                parts, but also the necessary information in market-relevant databases
                such as TecDoc. For the right parts in the right place at the right time.
              </p>
            </div>
          </div>
          <aside className="flex flex-col justify-center border-t border-line/15 px-5 py-12 lg:border-l lg:border-t-0 lg:px-10 lg:py-20 xl:px-14">
            <h3 className="font-sans text-[20px] font-semibold text-deep-navy">
              Contact us
            </h3>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-text/70">
              Do you have any questions about our company, products and services? We
              will be happy to help you.
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

        <div className="mx-auto grid max-w-[1680px] border-t border-line/15 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="border-b border-line/15 px-5 py-10 last:border-b-0 md:border-r md:odd:border-r xl:border-b-0 xl:last:border-r-0 lg:px-10 xl:px-14"
            >
              <p className="font-display text-[clamp(2.4rem,4vw,3.6rem)] font-black italic text-deep-navy">
                {stat.value}
              </p>
              <h3 className="mt-3 text-[18px] font-semibold text-deep-navy">
                {stat.title}
              </h3>
              <p className="mt-3 max-w-xs text-[14px] leading-6 text-text/70">{stat.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Origin */}
      <section id="origin" className="border-b border-line/15 bg-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Where we come from - and where we want to go
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-[15px] leading-7 text-text/75">
            <p>
              What began in 1958 with the export of spare parts is now a global success
              story. We have developed from a trading company into a manufacturer - with
              our own production, our own product lines, our own standards and a brand
              that also stands for parts that last longer.
            </p>
            <p>
              From Hamburg, we supply MEYLE parts to over 120 countries. Each development
              incorporates our expertise from over 65 years - plus our passion for making
              work easier for workshops. Our goal: spare parts that last longer and offer
              real added value with clever solutions. Today, tomorrow and in the future.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {originCards.map((card, i) => (
              <article key={card.title} className="border border-line/15 bg-off-white">
                <div className="relative aspect-[16/10] overflow-hidden bg-deep-navy">
                  <SmartImage
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <p className="text-[12px] font-semibold tracking-[0.16em] text-muted">
                    {String(i + 1).padStart(2, "0")} - 02
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(1.3rem,2vw,1.8rem)] font-black italic uppercase leading-tight text-deep-navy">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-text/75">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What drives us / unplugged */}
      <section id="drives" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              MEYLE unplugged: honest, genuine, spare parts
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75">
              <p>
                No high-gloss polishes, no empty promises. Here you will find MEYLE
                unadulterated! We&apos;ll show you what makes us tick, what&apos;s
                important to us and why our spare parts are so good. You can find out even
                more about our manufacturing expertise.
              </p>
              <p>
                Are you looking for a solution that lasts, that convinces and that drives
                your business forward? MEYLE offers you innovative spare parts and
                intelligent solutions that are specially tailored to the needs of
                workshops, dealers and drivers. From complete oil change kits for
                automatic transmissions to more durable control arms - we think ahead so
                you can keep on driving.
              </p>
            </div>
            <div className="mt-10">
              <ArrowButton href="/quality/manufacturer-expertise">
                Manufacturing expertise
              </ArrowButton>
            </div>
          </div>
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/about/building.webp"
              alt="MEYLE manufacturing and headquarters"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative order-1 min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/about/factory.webp"
              alt="MEYLE parts and production"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              MEYLE parts: Finding made easy
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              Put your trust in the proven quality of MEYLE and ensure a safe and
              reliable ride. In our online catalog you will find the entire selection of
              MEYLE ORIGINAL, MEYLE PD and MEYLE HD parts as well as our clever MEYLE
              KITs. Simply enter your vehicle model and select the spare parts you need.
            </p>
            <div className="mt-10">
              <ArrowButton href="/parts-catalog">Visit parts catalog</ArrowButton>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-b border-line/15 bg-deep-navy">
        <div className="mx-auto max-w-[1680px] px-5 py-16 lg:px-10 lg:py-24 xl:px-14">
          <blockquote className="max-w-4xl">
            <p className="font-display text-[clamp(1.4rem,3vw,2.2rem)] font-black italic leading-snug text-white">
              &ldquo;At MEYLE, we combine Hanseatic down-to-earthness with technical
              precision - and have done so for generations. Our passion for quality and
              our eye for detail drive us every day to create better solutions for our
              customers worldwide. Because you can recognize good spare parts not only by
              the material, but also by the attitude behind them.&rdquo;
            </p>
            <footer className="mt-8 text-[14px] font-semibold uppercase tracking-[0.14em] text-turquoise">
              Dirk Damaschke, Member of the Board of MEYLE AG
            </footer>
          </blockquote>
        </div>
      </section>

      <Marquee phrase="Think big. Act MEYLE." />

      {/* Logistics */}
      <section id="logistics" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              MEYLE Logistics: Keeping your success on track
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              In logistics, every second counts. At MEYLE, every millimeter counts. Our
              sophisticated processes ensure that you always have your parts in stock - a
              fill rate of 95% speaks for itself. And our partners ensure that MEYLE
              parts arrive in the workshop exactly when they are needed.
            </p>
          </div>
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/wholesale/logistics.webp"
              alt="MEYLE logistics and warehouse"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative order-1 min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/about/sustainability-hero.webp"
              alt="MEYLE sustainability"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="order-2 flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              At MEYLE, the wheel is turning - for a sustainable future
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              For us, the circular economy is more than just a buzzword. We live it. This
              means that we design products that last longer and ensure that cars and
              vans can be repaired more efficiently. We use recycled materials and
              optimize our production processes to avoid waste. From development to
              disposal, we think in cycles - for a sustainable future for the automotive
              industry and a world in which resources are valued.
            </p>
            <div className="mt-10">
              <ArrowButton href="/about/sustainability">Learn more</ArrowButton>
            </div>
          </div>
        </div>
      </section>

      {/* IAM:CONNECT */}
      <section id="iam-connect" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Finding partners, mastering challenges, shaping the future
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              IAM:CONNECT is MEYLE&apos;s platform for the dialog of the future in the
              independent aftermarket. We discuss the industry&apos;s challenges and
              opportunities with industry experts and players. Our goal: to better
              understand the needs of workshops, dealers and partners together and
              develop innovative solutions. Become part of the community and benefit from
              the power of collaboration.
            </p>
            <div className="mt-10">
              <ArrowButton href="/content">More on the topic</ArrowButton>
            </div>
          </div>
          <div className="relative min-h-80 aspect-[4/3] bg-white lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/about/iam.webp"
              alt="IAM:CONNECT platform"
              fill
              className="object-cover"
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
