import Link from "next/link";
import { ArrowButton } from "@/components/ArrowButton";
import { NewsCard } from "@/components/NewsCard";
import { DiagonalAccent, TurquoiseSlash } from "@/components/ui/Geometry";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/cn";
import { news } from "@/data/site";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={cn("mt-0.5 h-5 w-5 shrink-0 text-navy", className)}
      fill="none"
      aria-hidden
    >
      <path
        d="M4 10.5l4 4 8-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProductPhotoHero({
  label,
  title,
  description,
  image,
  imageAlt,
}: {
  label?: string;
  title: string;
  description?: string;
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
          {description ? (
            <p className="mt-8 max-w-xl text-base leading-7 text-white/80 md:ml-9 md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** MEYLE-style hero: cream band, product photo left, title right */
export function CategoryOpener({
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
    <section className="relative overflow-hidden bg-off-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-28deg, transparent, transparent 78px, rgba(232,120,40,0.35) 78px, rgba(232,120,40,0.35) 79px)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1680px] items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-16 xl:px-14">
        <div className="relative aspect-square overflow-hidden bg-deep-navy shadow-[0_24px_60px_rgba(5,5,61,0.18)]">
          <SmartImage
            src={image}
            alt={imageAlt}
            fill
            loading="eager"
            fetchPriority="high"
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>
        <div className="max-w-xl lg:py-8">
          <h1 className="font-display text-[clamp(2.2rem,4.8vw,4.2rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            {title}
          </h1>
          <p className="mt-6 font-sans text-[16px] leading-7 text-text/75 md:text-[17px]">
            {description}
          </p>
        </div>
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
    <nav className="sticky top-[calc(var(--header-offset,72px))] z-30 flex flex-wrap gap-x-8 gap-y-2 border-b border-line/15 bg-white/95 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm lg:px-10 xl:px-14">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-muted hover:text-navy"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export function IntroWithContact({
  title,
  body,
  standFor,
  topic,
  showBenefitsLabel = true,
  contactBody,
  contactCta = "Get in touch",
}: {
  title: string;
  body: string;
  standFor?: string[];
  topic: string;
  showBenefitsLabel?: boolean;
  contactBody?: string;
  contactCta?: string;
}) {
  const paragraphs = body.split(/\n\n+/).filter(Boolean);

  return (
    <section id="benefits-intro" className="border-b border-line/15 bg-off-white">
      <div className="mx-auto grid max-w-[1680px] lg:grid-cols-[1.55fr_0.75fr]">
        <div className="px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          {showBenefitsLabel ? (
            <span className="inline-flex border border-deep-navy/35 px-3 py-1 font-sans text-[12px] text-deep-navy">
              Benefits
            </span>
          ) : null}
          <h2
            className={`${showBenefitsLabel ? "mt-6" : ""} font-display text-[clamp(2rem,4vw,3.6rem)] font-black italic uppercase leading-[0.95] text-deep-navy`}
          >
            {title}
          </h2>
          <div className="mt-6 max-w-2xl space-y-5">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-[15px] leading-7 text-text/75 md:text-[16px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          {standFor?.length ? (
            <>
              <p className="mt-12 text-[12px] font-semibold uppercase tracking-[0.12em] text-deep-navy">
                What {topic} stand for:
              </p>
              <div className="mt-3 h-px w-full max-w-2xl bg-deep-navy/20" />
              <ul className="mt-6 max-w-2xl space-y-3 text-[15px] text-text/80">
                {standFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
        <aside className="flex flex-col justify-center border-t border-line/15 px-5 py-12 lg:border-t-0 lg:border-l lg:px-10 lg:py-20 xl:px-12">
          <h3 className="font-sans text-[20px] font-semibold text-deep-navy">
            Contact us
          </h3>
          <p className="mt-4 max-w-sm text-[15px] leading-7 text-text/70">
            {contactBody ??
              `Do you have any questions about ${topic}? We have the answers.`}
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
                {contactCta}
              </span>
            </span>
          </Link>
        </aside>
      </div>
    </section>
  );
}

export function BenefitRow({
  benefits,
}: {
  benefits: { title: string; text: string }[];
}) {
  const spans = ["md:col-span-4", "md:col-span-2", "md:col-span-3", "md:col-span-3"];

  return (
    <section id="benefits" className="bg-deep-navy text-white">
      <div className="mx-auto grid max-w-[1680px] md:grid-cols-6">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className={cn(
              "border-b border-white/15 px-6 py-10 md:border-r md:px-8 md:py-12",
              spans[index] ?? "md:col-span-3",
              index % 2 === 1 && "md:border-r-0",
              index >= 2 && "md:border-b-0",
              index === 2 && "md:border-r",
            )}
          >
            <h3 className="font-sans text-[22px] font-semibold leading-snug tracking-[-0.02em]">
              {benefit.title}
            </h3>
            <p className="mt-3 text-[14px] leading-6 text-white/65">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function UpgradeSplit({
  title,
  body,
  image,
  imageAlt,
  tips,
}: {
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  tips?: { title: string; text: string }[];
}) {
  return (
    <section id="products" className="border-b border-line/15 bg-off-white">
      <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-14 lg:px-10 lg:py-20 xl:px-14">
          <span className="inline-flex w-fit border border-deep-navy/35 px-3 py-1 font-sans text-[12px] text-deep-navy">
            Products
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.6rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
            {body}
          </p>
        </div>
        {image ? (
          <div className="relative min-h-[300px] lg:min-h-[560px]">
            <SmartImage
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            {tips?.length ? (
              <div className="absolute bottom-0 right-0 max-w-xs bg-deep-navy p-5 text-white sm:p-6">
                {tips.slice(0, 2).map((tip, index) => (
                  <div
                    key={tip.title}
                    className={cn(index > 0 && "mt-4 border-t border-white/20 pt-4")}
                  >
                    <p className="text-[14px] font-semibold">{tip.title}</p>
                    <p className="mt-1 text-[13px] leading-5 text-white/70">
                      {tip.text}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function GroupZigzag({
  groups,
  categorySlug,
}: {
  groups: {
    slug: string;
    title: string;
    cardText: string;
    image: string;
  }[];
  categorySlug: string;
}) {
  return (
    <section className="border-b border-line/15 bg-off-white">
      {groups.map((group, index) => {
        const reverse = index % 2 === 1;
        return (
          <article
            key={group.slug}
            className="relative border-b border-line/10 last:border-b-0"
          >
            <div
              aria-hidden
              className="absolute right-0 top-0 h-16 w-10 bg-turquoise"
              style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }}
            />
            <div
              className={cn(
                "mx-auto grid max-w-[1680px] items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20 xl:px-14",
                reverse && "lg:[&>*:first-child]:order-2",
              )}
            >
              <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
                <SmartImage
                  src={group.image}
                  alt={group.title}
                  fill
                  className="object-contain drop-shadow-[0_28px_50px_rgba(5,5,61,0.18)]"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </div>
              <div className="max-w-xl">
                <h3 className="font-sans text-[clamp(1.6rem,2.4vw,2.2rem)] font-semibold leading-snug tracking-[-0.02em] text-deep-navy">
                  {group.title}
                </h3>
                <p className="mt-5 text-[15px] leading-7 text-text/75">
                  {group.cardText}
                </p>
                <Link
                  href={`/products/${categorySlug}/${group.slug}`}
                  className="mt-8 inline-flex h-12 items-center border border-deep-navy px-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-deep-navy transition-colors hover:bg-deep-navy hover:text-white"
                >
                  Find out more
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

/** @deprecated Prefer GroupZigzag for category pages */
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

export function FeaturedKits({
  kits,
}: {
  kits: { title: string; body: string; href: string; image: string }[];
}) {
  if (!kits.length) return null;

  return (
    <section id="iam" className="border-b border-line/15 bg-white">
      <div className="grid md:grid-cols-2">
        {kits.map((kit) => (
          <article
            key={kit.title}
            className="border-b border-line/15 md:border-r md:even:border-r-0"
          >
            <Link href={kit.href} className="group grid sm:grid-cols-2">
              <div className="relative min-h-[220px] bg-off-white">
                <SmartImage
                  src={kit.image}
                  alt={kit.title}
                  fill
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 25vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 lg:px-8">
                <h3 className="font-sans text-[clamp(1.3rem,2vw,1.7rem)] font-semibold leading-snug text-deep-navy">
                  {kit.title}
                </h3>
                <p className="mt-4 text-[14px] leading-7 text-muted">{kit.body}</p>
                <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy">
                  Learn more now
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
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
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted">
            {column.body}
          </p>
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
    <section
      id="workshops"
      className="border-b border-line/15 bg-off-white px-5 py-14 lg:px-10 lg:py-16 xl:px-14"
    >
      <div className="mx-auto flex max-w-[1680px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-muted">MEYLE Training</p>
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
