import { ArrowButton } from "@/components/ArrowButton";
import { ContactCTA } from "@/components/ContactCTA";
import { Newsletter } from "@/components/Newsletter";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/cn";

type SplitBlock = {
  id?: string;
  eyebrow?: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  href?: string;
  cta?: string;
};

export function SplitSection({
  id,
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  reverse,
  href,
  cta = "Learn more",
}: SplitBlock) {
  return (
    <section id={id} className="border-b border-line/15">
      <div
        className={cn(
          "grid lg:grid-cols-2",
          reverse ? "lg:[&>*:first-child]:order-2" : "",
        )}
      >
        <div className="relative min-h-[280px] lg:min-h-[520px]">
          <SmartImage
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-white px-6 py-12 lg:px-16">
          {eyebrow ? <p className="eyebrow text-muted">{eyebrow}</p> : null}
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.6rem)] font-black italic uppercase leading-[0.95]">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted">{body}</p>
          {href ? (
            <div className="mt-8">
              <ArrowButton href={href}>{cta}</ArrowButton>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function InnerEnd() {
  return (
    <>
      <ContactCTA />
      <Newsletter />
    </>
  );
}
