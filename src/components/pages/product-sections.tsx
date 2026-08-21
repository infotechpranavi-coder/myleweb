import Link from "next/link";
import { ArrowButton } from "@/components/ArrowButton";
import { NewsCard } from "@/components/NewsCard";
import { DiagonalAccent, TurquoiseSlash } from "@/components/ui/Geometry";
import { SmartImage } from "@/components/ui/SmartImage";
import { news } from "@/data/site";

export function ProductPhotoHero({
  label,
  title,
  description,
  image,
  imageAlt,
}: {
  label?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative min-h-[min(72vh,820px)] overflow-hidden bg-deep-navy text-white">
      <SmartImage
        src={image}
        alt={imageAlt}
        fill
        loading="eager"
        fetchPriority="high"
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-deep-navy via-deep-navy/78 to-deep-navy/20" />
      <DiagonalAccent />
      <div className="relative z-10 mx-auto flex min-h-[min(72vh,820px)] max-w-[1680px] items-center px-5 py-16 lg:px-10 xl:px-14">
        <div className="max-w-3xl">
          {label ? <p className="eyebrow text-turquoise">{label}</p> : null}
          <div className="mt-5 flex items-start gap-4 md:gap-6">
            <TurquoiseSlash className="mt-2 h-14 w-3 md:h-20" />
            <h1 className="hero-title text-[clamp(2.6rem,6.6vw,6.4rem)]">
              {title}
            </h1>
          </div>
          <p className="mt-8 max-w-xl text-base leading-7 text-white/80 md:ml-9 md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function ContactAside({ topic }: { topic: string }) {
  return (
    <aside className="bg-navy p-8 text-white lg:p-10">
      <p className="eyebrow text-turquoise">Contact us</p>
      <h2 className="mt-4 font-display text-4xl font-black italic uppercase leading-[0.95]">
        Questions?
      </h2>
      <p className="mt-5 text-[15px] leading-7 text-white/75">
        Do you have any questions about {topic}? We have the answers.
      </p>
      <div className="mt-8">
        <ArrowButton href="/contact">Get in touch</ArrowButton>
      </div>
    </aside>
  );
}

export function IntroWithContact({
  title,
  body,
  standFor,
  topic,
}: {
  title: string;
  body: string;
  standFor?: string[];
  topic: string;
}) {
  return (
    <section className="border-b border-line/15">
      <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
        <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <h2 className="font-display text-[clamp(2rem,4.2vw,3.8rem)] font-black italic uppercase leading-[0.95]">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted">{body}</p>
          {standFor?.length ? (
            <>
              <p className="mt-10 text-sm font-semibold">
                What {topic} stand for:
              </p>
              <ul className="mt-4 space-y-2 text-[15px] text-muted">
                {standFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-turquoise" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
        <ContactAside topic={topic} />
      </div>
    </section>
  );
}

export function JumpNav({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <nav className="flex flex-wrap gap-x-8 gap-y-2 border-b border-line/15 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] lg:px-10 xl:px-14">
      {items.map((item) => (
        <a key={item.href} href={item.href} className="text-muted hover:text-navy">
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export function BenefitRow({
  benefits,
}: {
  benefits: { title: string; text: string }[];
}) {
  return (
    <section id="benefits" className="grid border-b border-line/15 md:grid-cols-2 lg:grid-cols-4">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="border-b border-line/15 px-6 py-10 md:border-r md:border-b-0 lg:last:border-r-0"
        >
          <h3 className="font-display text-2xl font-black italic uppercase leading-tight">
            {benefit.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted">{benefit.text}</p>
        </div>
      ))}
    </section>
  );
}

export function GroupPhotoCard({
  href,
  title,
  text,
  image,
  imageAlt,
}: {
  href: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <article className="border-b border-line/15 md:border-r md:even:border-r-0">
      <Link href={href} className="group block">
        <div className="relative min-h-[240px] overflow-hidden lg:min-h-[320px]">
          <SmartImage
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="px-6 py-8 lg:px-8">
          <h3 className="font-display text-[clamp(1.6rem,2.4vw,2.3rem)] font-black italic uppercase leading-[0.95]">
            {title}
          </h3>
          <p className="mt-4 text-[15px] leading-7 text-muted">{text}</p>
          <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy">
            Find out more
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}

export function ClosingColumns({
  left,
  right,
}: {
  left: { title: string; body: string };
  right: { title: string; body: string };
}) {
  return (
    <section className="grid border-b border-line/15 lg:grid-cols-2">
      {[left, right].map((column) => (
        <div
          key={column.title}
          className="border-b border-line/15 px-5 py-14 lg:border-b-0 lg:border-r lg:px-10 lg:py-20 lg:last:border-r-0 xl:px-14"
        >
          <h2 className="font-display text-[clamp(2rem,3.6vw,3.4rem)] font-black italic uppercase leading-[0.95]">
            {column.title}
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted">{column.body}</p>
        </div>
      ))}
    </section>
  );
}

export function TrainingStrip({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section id="workshops" className="border-b border-line/15 bg-off-white px-5 py-14 lg:px-10 lg:py-16 xl:px-14">
      <div className="mx-auto flex max-w-[1680px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-muted">AUTOPART Training</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95]">
            {title}
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-muted">{body}</p>
        </div>
        <ArrowButton href="/workshops/trainings">Discover training</ArrowButton>
      </div>
    </section>
  );
}

export function DiscoverMore() {
  return (
    <section className="border-b border-line/15 px-5 py-16 lg:px-10 xl:px-14">
      <div className="mx-auto max-w-[1680px]">
        <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase">
          Discover more
        </h2>
        <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-10">
          <ArrowButton href="/content" variant="navy">
            Discover all content
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
