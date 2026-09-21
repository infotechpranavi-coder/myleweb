import Link from "next/link";
import { InfoBanner } from "@/components/home/InfoBanner";
import { Marquee } from "@/components/Marquee";
import { ArrowButton } from "@/components/ArrowButton";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";
import { tradeFairs } from "@/data/site";

const navItems = [
  { href: "#welcome", label: "Press releases" },
  { href: "#automechanika", label: "Automechanika 2026" },
  { href: "#content", label: "Content" },
  { href: "#events", label: "Events" },
];

const contacts = [
  {
    name: "Anna-Maria Granegger",
    role: "Corporate Communications Manager",
    phone: "+49 40 67506 510",
    email: "press@meyle.com",
    image: "/images/meyle/press/anna.webp",
  },
  {
    name: "Benita Duncan-Williams",
    role: "Corporate Communications Manager",
    phone: "+49 40 67506 510",
    email: "press@meyle.com",
    image: "/images/meyle/press/benita.webp",
  },
];

const pressReleases = [
  {
    title: 'MEYLE AG Becomes a Partner of the "Quality Is Added Value" Initiative',
    href: "/content",
    image: "/images/meyle/press/qim.webp",
  },
  {
    title: "MEYLE Wins Automechanika Innovation Award | HD Brake disc",
    href: "/content",
    image: "/images/meyle/press/award.webp",
  },
  {
    title: "2026 Auto Repair Shop Survey: Transmission Oil Change",
    href: "/content",
    image: "/images/meyle/press/survey.webp",
  },
  {
    title: "More comfort for Tesla Model Y: MEYLE optimizes shock absorbers",
    href: "/content",
    image: "/images/meyle/press/tesla-shock.webp",
  },
];

export default function PressPage() {
  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            Press
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.2rem,5vw,4.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Current press releases and press kits
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
          src="/images/meyle/press/hero.webp"
          alt="Finger pointing at a screen in a press workspace"
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

      {/* Welcome + contacts */}
      <section id="welcome" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-[1.45fr_0.9fr]">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Welcome to MEYLE Press Releases
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-[15px] leading-7 text-text/75 md:text-[16px]">
              <p>
                Here you will find the latest press releases, comprehensive press
                kits and interesting news about the MEYLE brand. If you need
                background information, image material or answers to specific
                questions, we&apos;re happy to help.
              </p>
              <p>
                Looking for something specific? Contact us directly or find more
                insights and stories on our social media channels.
              </p>
            </div>
          </div>

          <aside className="border-t border-line/15 bg-white px-5 py-12 lg:border-t-0 lg:border-l lg:px-10 lg:py-20 xl:px-12">
            <div className="space-y-10">
              {contacts.map((person) => (
                <div key={person.name} className="flex gap-5">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden bg-deep-navy sm:h-32 sm:w-32">
                    <SmartImage
                      src={person.image}
                      alt={`Portrait of ${person.name}`}
                      fill
                      className="object-cover object-top"
                      sizes="128px"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Your contact person
                    </p>
                    <p className="mt-2 text-[17px] font-semibold text-deep-navy">
                      {person.name}
                    </p>
                    <p className="mt-1 text-[14px] text-text/70">{person.role}</p>
                    <p className="mt-3 text-[14px] text-deep-navy">
                      Tel:{" "}
                      <a
                        href={`tel:${person.phone.replace(/\s/g, "")}`}
                        className="underline underline-offset-2"
                      >
                        {person.phone}
                      </a>
                    </p>
                    <a
                      href={`mailto:${person.email}`}
                      className="mt-2 inline-block text-[13px] font-medium text-navy underline underline-offset-4"
                    >
                      {person.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Automechanika press kit */}
      <section
        id="automechanika"
        className="border-b border-line/15 bg-deep-navy text-white"
      >
        <div className="mx-auto flex max-w-[1680px] flex-col gap-8 px-5 py-14 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-16 xl:px-14">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(1.8rem,3.6vw,3rem)] font-black italic uppercase leading-[0.95]">
              Automechanika Frankfurt 2026: Press Kit
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-white/75 md:text-[16px]">
              Download our press kit for Automechanika Frankfurt 2026 here.
            </p>
          </div>
          <a
            href="https://downloads.eu.ctfassets.net/tw1gcg0wn1me/1AIFDbz7aeHJnkAmqXqb8E/63d72b131c97979ea32d739313815099/Englisches_Presse-Kit.zip"
            className="inline-flex items-center gap-3 border border-white px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-deep-navy"
          >
            Download here
            <span aria-hidden>↓</span>
          </a>
        </div>
      </section>

      {/* Press releases grid */}
      <section className="border-b border-line/15 bg-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Press releases
          </h2>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {pressReleases.map((item) => (
              <article key={item.title} className="group flex h-full flex-col">
                <Link
                  href={item.href}
                  className="relative block aspect-[3/4] overflow-hidden bg-deep-navy"
                >
                  <SmartImage
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  />
                </Link>
                <div className="flex flex-1 flex-col pt-4">
                  <span className="inline-flex w-fit rounded-[6px] border border-deep-navy/40 px-2 py-1 text-[13px] text-deep-navy">
                    Press release
                  </span>
                  <Link href={item.href}>
                    <h3 className="mt-4 text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-deep-navy group-hover:underline">
                      {item.title}
                    </h3>
                  </Link>
                  <Link
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-medium text-deep-navy"
                  >
                    Learn more
                    <span aria-hidden className="text-[18px] leading-none">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <ArrowButton href="/content">All press releases</ArrowButton>
          </div>
        </div>
      </section>

      {/* IAM Connect */}
      <section className="border-b border-line/15 bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-16 xl:px-14">
          <h2 className="font-sans text-[clamp(1.5rem,2.8vw,2.1rem)] font-semibold text-deep-navy">
            IAM:Connect - Working together on the future
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-text/75">
            The platform for open dialog and forward-looking solutions.
          </p>
          <Link
            href="/content"
            className="mt-5 inline-flex text-[13px] font-medium text-deep-navy underline underline-offset-4"
          >
            More on the topic
          </Link>
        </div>
      </section>

      {/* Further materials */}
      <section id="content" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:px-10 lg:py-20 xl:px-14">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Further materials
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75 md:text-[16px]">
              This link will take you to the Content Hub. Here you will find
              images, logos, the latest blog posts, whitepapers, case studies and
              much more. If you need additional information and resources, please
              feel free to contact us.
            </p>
            <div className="mt-10">
              <ArrowButton href="/content">Visit the Content Hub</ArrowButton>
            </div>
          </div>
          <div className="relative min-h-72 aspect-[16/10] overflow-hidden bg-deep-navy lg:min-h-[420px]">
            <SmartImage
              src="/images/meyle/about/events-hero.webp"
              alt="MEYLE content and media materials"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <Marquee phrase="MEYLE press area. " />

      {/* Events */}
      <section id="events" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Experience MEYLE live
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-text/75 md:text-[16px]">
            Whether trade fairs or events - here you can meet MEYLE in person.
            Discover our highlights and find out everything journalists need to
            know.
          </p>

          <div className="mt-12 grid border border-line/15 bg-white md:grid-cols-2">
            {tradeFairs.map((event) => (
              <article
                key={event.title}
                className="border-b border-line/15 p-6 md:border-r md:p-10 even:md:border-r-0 md:[&:nth-child(n+3)]:border-b-0"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="border border-line/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
                    {event.dates}
                  </span>
                  <span className="bg-turquoise px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-deep-navy">
                    {event.location}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[clamp(1.5rem,2.4vw,2.1rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
                  {event.title}
                </h3>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
                  {event.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <ArrowButton href="/about/events">All events</ArrowButton>
          </div>
        </div>
      </section>

      <InnerEnd />
    </>
  );
}
