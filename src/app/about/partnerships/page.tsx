import Link from "next/link";
import { InfoBanner } from "@/components/home/InfoBanner";
import { ArrowButton } from "@/components/ArrowButton";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";

const navItems = [
  { href: "#commitment", label: "Our commitment" },
  { href: "#social", label: "Social projects" },
  { href: "#educational", label: "Educational projects" },
  { href: "#environmental", label: "Environmental projects" },
  { href: "#help", label: "Immediate help" },
  { href: "#sustainably", label: "Act sustainably" },
];

const framework = [
  "Regional: Supporting local organizations in and around Hamburg",
  "International: Our donations promote sustainable development worldwide",
  "Long-term: offering project sponsors better planning through long-term cooperation",
  "Transparency: Doing good and talking about it",
  "Sustainability: offering help for self-help",
];

const socialProjects = [
  {
    title: "Hamburg Community Foundation",
    body: "The Hamburger Anker theme fund helps families in difficulty by combating isolation, identifying problems and offering social support. The focus is on fostering loving bonds and improving parental care.",
  },
  {
    title: "SOS Children's Villages",
    body: "MEYLE supports SOS Children's Villages in various programs - including the SOS Children's Village in Guatemala, automotive training programmes in Bangladesh and Sri Lanka, and digitization projects in India.",
  },
  {
    title: "Förderverein Kinderklinik Beira e. V.",
    body: "Supports the children's clinic in Beira, Mozambique, by providing medical equipment, medicines and training for medical staff.",
  },
  {
    title: "Heim-statt-Tschernobyl e. V.",
    body: "A non-profit organization focused on humanitarian aid and support for the victims of the Chernobyl disaster.",
  },
  {
    title: "Familienhafen",
    body: "The outpatient children's hospice service Hamburg Familienhafen supports children with life-shortening illnesses and their families.",
  },
  {
    title: "Löwenzahn Hochtaunus",
    body: "Supports sick and elderly people and their relatives with coordinated palliative and care services so they can live as independently and with dignity as possible.",
  },
];

const educationalProjects = [
  {
    title: "GemüseAckerdemie",
    body: "Children learn where the food on our plates comes from - on the school's own farmland, together with their teachers. The aim: to inspire a young generation for nature and sustainability.",
  },
  {
    title: "Foundation Nature in the North",
    body: "MEYLE supports the Wilma von den Wilden Weiden project, encouraging children's curiosity and understanding of local flora and fauna through playful discovery.",
  },
  {
    title: "Herzretter e.V.",
    body: "We promote life-saving first aid skills through in-house lay resuscitation training for employees and free heart rescuer training courses at Hamburg schools.",
  },
];

const environmentalProjects = [
  {
    title: "Laptop Spende AfB gGmbH",
    body: "AfB specializes in collecting used IT hardware, deleting it securely, refurbishing it and selling or donating it. MEYLE donates its discarded laptops to this organization.",
  },
  {
    title: "Forest Enterprise Foundation",
    body: "MEYLE supports the \"Unternehmen Wald\" foundation - promoting nature conservation, environmental education and sustainable forest management, enabling thousands of new trees and shrubs to be planted.",
  },
  {
    title: "Honey bee promotion",
    body: "MEYLE houses bee colonies from the Lasbek apiary on its company premises and makes the honey available to its employees - supporting biodiversity and ecological balance.",
  },
];

const learnMore = [
  {
    title: "Sustainability",
    body: "Taking responsibility. Acting sustainably - ESG, climate and circular economy at MEYLE.",
    href: "/about/sustainability",
    image: "/images/meyle/about/sustainability-hero.webp",
    imageAlt: "MEYLE sustainability",
  },
  {
    title: "Career",
    body: "Join a team that takes responsibility seriously - every day.",
    href: "/career",
    image: "/images/meyle/career/hero.webp",
    imageAlt: "MEYLE careers",
  },
  {
    title: "Who we are",
    body: "MEYLE: We turn good into better - your partner in the independent aftermarket.",
    href: "/about",
    image: "/images/meyle/about/who-hero.webp",
    imageAlt: "About MEYLE",
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <section className="bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 pb-8 pt-12 lg:px-10 lg:pb-10 lg:pt-16 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            About us
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.2rem,5vw,4.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Social projects and partnerships worldwide
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
          src="/images/meyle/about/partnerships-hero.webp"
          alt="MEYLE social projects and partnerships"
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

      {/* Commitment intro */}
      <section id="commitment" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              MEYLE&apos;s social commitment
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-text/75 md:text-[16px]">
              <p>
                MEYLE has been committed to social causes for many years. Company founder
                Wulf Gaertner visited and supported the SOS Children&apos;s Village in
                Guatemala during a trip to Central America in 1995. Since then, numerous
                different support cooperations have been established.
              </p>
              <p>
                At MEYLE, responsibility is more than just a word - it&apos;s what drives
                us. We support social projects and development partnerships worldwide
                with a focus on education, equal opportunities and environmental
                protection.
              </p>
            </div>
            <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-deep-navy">
              The strategic framework of our commitment
            </p>
            <ul className="mt-4 space-y-2 text-[14px] leading-6 text-text/75">
              {framework.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-turquoise" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="flex flex-col justify-center border-t border-line/15 px-5 py-12 lg:border-l lg:border-t-0 lg:px-10 lg:py-20 xl:px-14">
            <h3 className="font-sans text-[20px] font-semibold text-deep-navy">
              Contact us
            </h3>
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-text/70">
              Do you have questions about our social commitment? We look forward to
              hearing from you.
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

        <div className="relative mx-auto aspect-[21/9] min-h-[200px] max-w-[1680px] overflow-hidden border-t border-line/15 bg-deep-navy md:min-h-[320px]">
          <SmartImage
            src="/images/meyle/about/partnerships-roof.webp"
            alt="MEYLE social commitment"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Social projects */}
      <section id="social" className="border-b border-line/15 bg-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Social projects
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-text/75">
            By providing financial support for social projects, MEYLE is making a
            contribution to various areas of the UN&apos;s Sustainable Development Goals
            (SDGs). This is not just about short-term aid, but about long-term
            improvements in areas such as education, health and equal opportunities.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {socialProjects.map((project) => (
              <article key={project.title} className="border border-line/15 bg-off-white p-6 lg:p-8">
                <h3 className="text-[18px] font-semibold text-deep-navy">
                  {project.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-text/70">{project.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Educational */}
      <section id="educational" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Educational projects
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-text/75">
            At MEYLE, we believe that education is the key to personal and social
            progress. That is why we focus on medium to long-term education and
            infrastructure projects that have a lasting impact - especially vocational
            training programs that make it easier for young people to enter working life.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {educationalProjects.map((project) => (
              <article key={project.title} className="border border-line/15 bg-white p-6 lg:p-8">
                <h3 className="text-[18px] font-semibold text-deep-navy">
                  {project.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-text/70">{project.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental */}
      <section id="environmental" className="border-b border-line/15 bg-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Environmental projects
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-text/75">
            Supporting environmental projects is particularly important to us. The
            protection of natural resources, the reduction of emissions and the
            responsible use of energy are at the heart of our commitment.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {environmentalProjects.map((project) => (
              <article key={project.title} className="border border-line/15 bg-off-white p-6 lg:p-8">
                <h3 className="text-[18px] font-semibold text-deep-navy">
                  {project.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-text/70">{project.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate help */}
      <section id="help" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Emergency aid
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-text/75">
            MEYLE supports aid programs worldwide in crisis and disaster situations to
            help people on the ground quickly and effectively. Our financial support
            enables vital measures such as the provision of food, clean water and medical
            care.
          </p>
        </div>
      </section>

      {/* Act sustainably */}
      <section id="sustainably" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Shaping the future - together for a sustainable world
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
              We hope to be able to expand our funding efforts even further in the coming
              years in order to make our additional contribution to the UN&apos;s
              Sustainable Development Goals and thus give those in need long-term
              prospects for the future while protecting the environment.
            </p>
            <div className="mt-10">
              <ArrowButton href="/about/sustainability">Act sustainably</ArrowButton>
            </div>
          </div>
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
            <SmartImage
              src="/images/meyle/about/forest.webp"
              alt="Sustainable partnerships for the future"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
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
