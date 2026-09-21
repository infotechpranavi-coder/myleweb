"use client";

import { useState } from "react";
import Link from "next/link";
import { InfoBanner } from "@/components/home/InfoBanner";
import { Marquee } from "@/components/Marquee";
import { ArrowButton } from "@/components/ArrowButton";
import { InnerEnd } from "@/components/ui/SplitSection";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "#career", label: "Career" },
  { href: "#employer", label: "Employer" },
  { href: "#benefits", label: "Benefits" },
  { href: "#culture", label: "Culture" },
  { href: "#heart-saver", label: "Heart saver" },
  { href: "#departments", label: "Departments" },
  { href: "#education", label: "Education" },
  { href: "#contacts", label: "Contact persons" },
];

const stats = [
  {
    value: "24,000",
    label: "parts",
    body: "that make driving cars better worldwide",
  },
  {
    value: "60",
    label: "years",
    body: "Experience in manufacturing automotive spare parts",
  },
  {
    value: "120",
    label: "countries",
    body: "where we support car mechanics and drivers with high-quality parts",
  },
  {
    value: "500",
    label: "employees",
    body: "at the headquarters in Hamburg, Germany",
  },
];

const quotes = [
  {
    image: "/images/meyle/career/wulf.webp",
    quote:
      "We live the MEYLE pioneering spirit and work with joy and pride on innovative products and solutions in all areas and functions. In doing so, we are guided by the wishes of our customers. Openness, courage and recognition for new ideas and changes are our foundation.",
    name: "Company founder Wulf Gaertner († 25.10.2004)",
  },
  {
    image: "/images/meyle/career/christina.webp",
    quote:
      "I feel very well received and have a great team. MEYLE generally does a lot for its employees. I don't live in Hamburg and can still work for MEYLE. I come into the office regularly and can otherwise work from home.",
    name: "Christina Floth, Product Manager",
  },
  {
    image: "/images/meyle/career/anne.webp",
    quote:
      "The great flexibility I have here at MEYLE has convinced me. The work-life balance is right. I can do my demanding job and have been given the flexibility by my line manager to put my family first if I have to catch up on work elsewhere.",
    name: "Anne Kathrin Schwarz, Project Manager",
  },
  {
    image: "/images/meyle/career/wolfram.webp",
    quote:
      "In my job, I like the informal working environment and the fact that my brain is always challenged. In contrast to corporate groups, as I have experienced, things here at MEYLE are very unbureaucratic and quick. If you have an idea, you present it and then a quick decision is made: yes, the budget is there - it works!",
    name: "Wolfram Letsch, IT System Expert Infrastructure",
  },
];

const benefits = [
  {
    title: "Flexible working hours",
    body: "We offer our employees a flexible proportion of mobile working and various part-time models.",
    image: "/images/meyle/career/flexible.webp",
  },
  {
    title: "Financial security",
    body: "We think about tomorrow today and support our employees with contributions to capital-forming benefits, company pension schemes and contributions to disability pensions.",
    image: "/images/meyle/career/financial.webp",
  },
  {
    title: "Bonus payments",
    body: "Christmas bonuses and vacation pay are a matter of course for us. We also give our employees a share in our success through bonus payments.",
    image: "/images/meyle/career/bonus.webp",
  },
  {
    title: "Family",
    body: "We welcome new additions to the family and offer continued pay in the event of a child's illness as well as subsidies for childcare costs for small children.",
    image: "/images/meyle/career/family.webp",
  },
  {
    title: "Further training",
    body: "From seminars to studies - we support our employees individually and help them with their career planning.",
    image: "/images/meyle/career/training.webp",
  },
  {
    title: "Health",
    body: "We attach great importance to a healthy working environment: height-adjustable desks, massage services, occupational health and psychological counseling are just a small part of our wide range of services.",
    image: "/images/meyle/career/health.webp",
  },
  {
    title: "Company restaurant",
    body: "We offer balanced meals for small and large appetites in our company restaurant. In the afternoon, small snacks are available for a voluntary donation to the Hamburger Tafel.",
    image: "/images/meyle/career/restaurant.webp",
  },
];

const values = [
  {
    tag: "#EYE HEIGHT",
    body: "At MEYLE, we value openness in our teamwork. We respect opinions and ideas, creating a positive working atmosphere in which everyone can contribute.",
  },
  {
    tag: "#YOU COUNT",
    body: "We encourage the development of every individual and value creativity in order to grow as a team. Diversity strengthens us as a team.",
  },
  {
    tag: "#PASSION",
    body: "We work with commitment and passion to achieve our goals - a positive attitude makes all the difference.",
  },
  {
    tag: "#RESPONSIBLE",
    body: "Everyone bears responsibility for the company's success. Together we create a supportive and trusting working culture.",
  },
  {
    tag: "#COMMUNICATIVE",
    body: "We exchange ideas openly and respectfully, find solutions promptly and place value on understanding and appreciation.",
  },
  {
    tag: "#ENTREPRENEURIAL SPIRIT",
    body: "We focus on customer orientation. Every decision is tailored to their needs to offer the best service.",
  },
];

const hrContacts = [
  {
    name: "Nina Hildebrand",
    areas:
      "Logistics, Supply Chain, OPEK, Shipping, Customs, Reception",
    email: "nina.hildebrand@meyle.com",
    image: "/images/meyle/career/nina.webp",
  },
  {
    name: "Katja Friesslich",
    areas:
      "International, Sales, Customer Service, Global Commercial Management & Insights",
    email: "katja.friesslich@meyle.com",
    image: "/images/meyle/career/katja.webp",
  },
  {
    name: "Isabell Soylu",
    areas:
      "IT, Controlling and Financial Accounting, Legal, Building Services, Business Organization, Holding, EV Experience Center",
    email: "isabell.soylu@meyle.com",
    image: "/images/meyle/career/isabell.webp",
  },
  {
    name: "Mirjana Peschke",
    areas:
      "Product Management, Engineering & Data Management, Marketing & Communication, Quality and Training",
    email: "mirijana.peschke@meyle.com",
    image: "/images/meyle/career/mirjana.webp",
  },
];

const learnMore = [
  {
    title: "Our specialist areas",
    body: "Discover the diversity of our teams and shape the future of mobility with us!",
    href: "#departments",
    image: "/images/meyle/career/departments.webp",
  },
  {
    title: "Apprentice at MEYLE",
    body: "Future? Secured! Apprentice at MEYLE with team spirit and many prospects.",
    href: "#education",
    image: "/images/meyle/career/apprentices.webp",
  },
  {
    title: "Find vacancies",
    body: "Looking for a career opportunity? Find the latest vacancies here!",
    href: "/contact",
    image: "/images/meyle/career/jobs.webp",
  },
];

export default function CareerPage() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [benefitIndex, setBenefitIndex] = useState(0);
  const [valueIndex, setValueIndex] = useState(0);
  const [hrIndex, setHrIndex] = useState(0);

  const activeQuote = quotes[quoteIndex];
  const activeBenefit = benefits[benefitIndex];
  const activeHr = hrContacts[hrIndex];

  return (
    <>
      {/* Hero: full-bleed image with overlay title (matches meyle.com) */}
      <section className="relative min-h-[min(78vh,820px)] overflow-hidden bg-deep-navy text-white">
        <SmartImage
          src="/images/meyle/career/hero.webp"
          alt="Picture of the MEYLE headquarters in Hamburg"
          fill
          loading="eager"
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-deep-navy/92 via-deep-navy/70 to-deep-navy/25" />
        <div className="relative z-10 mx-auto flex min-h-[min(78vh,820px)] max-w-[1680px] flex-col justify-end px-5 pb-14 pt-28 lg:px-10 lg:pb-20 xl:px-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/75">
            MEYLE as an employer
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.4rem,6vw,5.2rem)] font-black italic uppercase leading-[0.92] tracking-[-0.02em]">
            Full speed ahead into your professional future!
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-7 text-white/85 md:text-[17px]">
            We develop and distribute high-quality automotive parts worldwide -
            with innovative strength, team spirit and real added value. Shape the
            mobility of tomorrow with us: flexible, dynamic and excellent!
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex border border-white bg-white px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-deep-navy transition-colors hover:bg-transparent hover:text-white"
            >
              Our vacancies
            </Link>
          </div>
        </div>
      </section>

      <InfoBanner />

      <nav className="sticky top-[calc(var(--header-offset,72px))] z-30 flex flex-wrap gap-x-8 gap-y-2 border-b border-line/15 bg-white/95 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm lg:px-10 xl:px-14">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="text-muted hover:text-navy">
            {item.label}
          </a>
        ))}
      </nav>

      {/* Career intro + stats */}
      <section id="career" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="max-w-4xl font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Shape the future of mobility together with MEYLE
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-[15px] leading-7 text-text/75 md:text-[16px]">
            <p>
              We develop, produce and distribute high-quality and innovative
              automotive spare parts worldwide - with passion and precision. To
              ensure that our success continues in the future, we are looking for
              motivated talents for our teams - in the technical, industrial and
              commercial areas.
            </p>
            <p>
              Whether you already have experience and are looking for the next
              big challenge or are starting your career fresh from school or
              university, we have the perfect place for you to take your career
              to the next level.
            </p>
            <p>
              Let&apos;s shape the future of mobility together - we look forward
              to meeting you!
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1680px] border-t border-line/15 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-line/15 px-5 py-10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:px-8"
            >
              <p className="font-display text-[clamp(2.2rem,3.5vw,3.2rem)] font-black italic text-deep-navy">
                {stat.value}
              </p>
              <p className="mt-2 text-[15px] font-semibold uppercase tracking-[0.08em] text-deep-navy">
                {stat.label}
              </p>
              <p className="mt-2 text-[13px] leading-6 text-muted">{stat.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why MEYLE */}
      <section id="employer" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Why MEYLE
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75 md:text-[16px]">
              Be part of a company with over 60 years of success in the
              automotive sector. Our high-quality, well-thought-out parts and
              solutions enjoy a worldwide reputation and have become
              indispensable in workshops. The real key to our success? Our
              employees. Their experience, expertise and teamwork create the
              added value that convinces and inspires our customers. The trust we
              enjoy drives us to remain innovative and efficient.
            </p>
            <ul className="mt-8 max-w-xl space-y-3 text-[15px] leading-7 text-text/80">
              {[
                "Over 60 years of success in the automotive sector",
                "Innovative, pioneering spirit and teamwork",
                "Flexible working models and comprehensive benefits",
                'Precision and quality "Engineered in Germany"',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-turquoise" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <SmartImage
              src="/images/meyle/career/why.webp"
              alt="MEYLE main building from the warehouse side"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Quotes carousel */}
      <section className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative min-h-80 aspect-[4/3] bg-deep-navy lg:aspect-auto lg:min-h-[520px]">
            <SmartImage
              src={activeQuote.image}
              alt=""
              fill
              className="object-cover object-top"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <blockquote className="max-w-xl text-[17px] leading-8 text-text/80 md:text-[18px]">
              &ldquo;{activeQuote.quote}&rdquo;
            </blockquote>
            <p className="mt-8 text-[14px] font-semibold text-deep-navy">
              {activeQuote.name}
            </p>
            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setQuoteIndex((i) => (i - 1 + quotes.length) % quotes.length)
                }
                className="flex h-11 w-11 items-center justify-center border border-deep-navy text-deep-navy transition-colors hover:bg-deep-navy hover:text-white"
                aria-label="Previous quote"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setQuoteIndex((i) => (i + 1) % quotes.length)}
                className="flex h-11 w-11 items-center justify-center border border-deep-navy text-deep-navy transition-colors hover:bg-deep-navy hover:text-white"
                aria-label="Next quote"
              >
                →
              </button>
              <span className="ml-2 text-[13px] text-muted">
                {quoteIndex + 1} / {quotes.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits accordion */}
      <section id="benefits" className="border-b border-line/15 bg-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="max-w-4xl font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            MEYLE: Where Careers and Well-Being Come Together
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-text/75 md:text-[16px]">
            At MEYLE, we place great importance on making sure you feel
            completely at ease with us. With a wide range of benefits and
            personalized opportunities, we create a work environment that
            supports your professional growth while also meeting your personal
            needs.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="divide-y divide-line/15 border border-line/15">
              {benefits.map((item, index) => {
                const open = index === benefitIndex;
                return (
                  <div key={item.title}>
                    <button
                      type="button"
                      onClick={() => setBenefitIndex(index)}
                      className={cn(
                        "flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors",
                        open ? "bg-off-white" : "hover:bg-off-white/60",
                      )}
                    >
                      <span className="text-[16px] font-semibold text-deep-navy">
                        {item.title}
                      </span>
                      <span className="text-[18px] text-muted" aria-hidden>
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open ? (
                      <p className="px-5 pb-5 text-[14px] leading-7 text-text/70 lg:hidden">
                        {item.body}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <div className="relative aspect-[16/10] overflow-hidden bg-deep-navy">
                <SmartImage
                  src={activeBenefit.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="45vw"
                />
              </div>
              <h3 className="mt-6 text-[20px] font-semibold text-deep-navy">
                {activeBenefit.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-text/75">
                {activeBenefit.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture / values */}
      <section id="culture" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="max-w-4xl font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            MEYLE: More than words - lived values
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-text/75 md:text-[16px]">
            Our culture guides exemplify a sustainable culture at MEYLE and
            promote the exchange of ideas. Together we pursue goals and realize
            projects with fun at work. As a committed group, they actively shape
            our corporate culture, develop new formats and implement ideas that
            strengthen cohesion. At regular meetings, they exchange ideas, plan
            events and use creative approaches to drive collaboration at MEYLE.
          </p>

          <div className="mt-12 divide-y divide-line/15 border border-line/15 bg-white">
            {values.map((item, index) => {
              const open = index === valueIndex;
              return (
                <div key={item.tag}>
                  <button
                    type="button"
                    onClick={() => setValueIndex(index)}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors",
                      open ? "bg-off-white" : "hover:bg-off-white/60",
                    )}
                  >
                    <span className="text-[15px] font-semibold tracking-[0.06em] text-navy">
                      {item.tag}
                    </span>
                    <span className="text-[18px] text-muted" aria-hidden>
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open ? (
                    <p className="px-5 pb-5 text-[15px] leading-7 text-text/75">
                      {item.body}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Heart saver */}
      <section id="heart-saver" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Lifesaving training courses
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75 md:text-[16px]">
              We are a heart-saving company and offer training in cardiac massage
              for all employees once a year. These take place during working hours
              and are supported by the company in order to prepare us well for an
              emergency. The training courses are not only useful in the
              workplace, but also in private life if you ever find yourself in
              such a situation.
            </p>
          </div>
          <div className="relative flex min-h-64 items-center justify-center bg-off-white p-10 lg:min-h-[420px]">
            <div className="relative h-40 w-full max-w-md sm:h-48">
              <SmartImage
                src="/images/meyle/career/herzretter.webp"
                alt="Logo of the Herzretter company"
                fill
                className="object-contain"
                sizes="400px"
              />
            </div>
          </div>
        </div>
      </section>

      <Marquee phrase="Careers at MEYLE. " />

      {/* Departments */}
      <section id="departments" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              Our departments
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75 md:text-[16px]">
              At MEYLE, we are proud of our teams and are always happy to welcome
              motivated and passionate employees who are willing to grow and
              learn with us. If you are ready to take the next step and become
              part of our community, you can discover our departments here.
            </p>
            <div className="mt-10">
              <ArrowButton href="/contact">Get to know the departments</ArrowButton>
            </div>
          </div>
          <div className="relative min-h-80 aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
            <SmartImage
              src="/images/meyle/career/departments.webp"
              alt="Corridor in MEYLE AG with offices"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Apprentices */}
      <section id="education" className="border-b border-line/15 bg-white">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
          <div className="relative order-2 min-h-80 aspect-[4/3] lg:order-1 lg:aspect-auto lg:min-h-[480px]">
            <SmartImage
              src="/images/meyle/career/apprentices.webp"
              alt="Seven young people sitting around a table"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="order-1 flex flex-col justify-center px-5 py-14 lg:order-2 lg:px-10 lg:py-20 xl:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
              We train apprentices
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75 md:text-[16px]">
              As a family-owned company, MEYLE provides special support for
              trainees starting their careers. There are six IHK apprenticeships
              and three dual study programs to choose from. In addition to
              technical knowledge, team spirit and independence are also
              strengthened, with individual support from experienced trainers. The
              special &ldquo;we-feeling&rdquo; at MEYLE is an important part of
              the training.
            </p>
            <div className="mt-10">
              <ArrowButton href="/contact">Trainee at MEYLE</ArrowButton>
            </div>
          </div>
        </div>
      </section>

      {/* HR contacts */}
      <section id="contacts" className="border-b border-line/15 bg-off-white">
        <div className="mx-auto max-w-[1680px] px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Your contacts from the HR department
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-text/75">
            We are here to answer all your questions about your career with us!
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="divide-y divide-line/15 border border-line/15 bg-white">
              {hrContacts.map((person, index) => {
                const open = index === hrIndex;
                return (
                  <div key={person.name}>
                    <button
                      type="button"
                      onClick={() => setHrIndex(index)}
                      className={cn(
                        "flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors",
                        open ? "bg-off-white" : "hover:bg-off-white/60",
                      )}
                    >
                      <span className="text-[16px] font-semibold text-deep-navy">
                        {person.name}
                      </span>
                      <span className="text-[18px] text-muted" aria-hidden>
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open ? (
                      <div className="space-y-2 px-5 pb-5 lg:hidden">
                        <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
                          HR Manager
                        </p>
                        <p className="text-[14px] leading-6 text-text/75">
                          Contact person for the areas: {person.areas}
                        </p>
                        <a
                          href={`mailto:${person.email}`}
                          className="inline-block text-[14px] font-medium text-navy underline underline-offset-4"
                        >
                          {person.email}
                        </a>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <div className="relative aspect-[16/10] overflow-hidden bg-deep-navy">
                <SmartImage
                  src={activeHr.image}
                  alt={`Portrait of ${activeHr.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="45vw"
                />
              </div>
              <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
                HR Manager
              </p>
              <h3 className="mt-2 text-[22px] font-semibold text-deep-navy">
                {activeHr.name}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-text/75">
                Contact person for the areas: {activeHr.areas}
              </p>
              <a
                href={`mailto:${activeHr.email}`}
                className="mt-4 inline-block text-[14px] font-medium text-navy underline underline-offset-4"
              >
                E-Mail: {activeHr.email}
              </a>
            </div>
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
              <Link key={item.title} href={item.href} className="group block">
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
                  Learn more →
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
