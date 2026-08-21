import { TurquoiseSlash } from "@/components/ui/Geometry";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-deep-navy text-white",
        className,
      )}
    >
      {image ? (
        <div className="absolute inset-0 opacity-25">
          <SmartImage
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      ) : null}
      <div className="relative mx-auto max-w-[1680px] px-5 py-16 lg:px-10 lg:py-24 xl:px-14">
        {eyebrow ? <p className="eyebrow text-turquoise">{eyebrow}</p> : null}
        <div className="mt-5 flex items-start gap-4 md:gap-6">
          <TurquoiseSlash className="mt-2 h-12 w-3 md:h-16" />
          <h1 className="hero-title whitespace-pre-line text-[clamp(2.8rem,7vw,6.2rem)]">
            {title}
          </h1>
        </div>
        {description ? (
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/75 md:ml-9 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
