import { cn } from "@/lib/cn";
import { TurquoiseSlash } from "@/components/ui/Geometry";

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  title,
  description,
  className,
  light,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-4xl", className)}>
      <div className="flex items-start gap-4 md:gap-6">
        <TurquoiseSlash className="mt-2 h-10 w-2.5 md:h-14 md:w-3" />
        <h2
          className={cn(
            "display-title whitespace-pre-line text-[clamp(2.4rem,6vw,5.5rem)]",
            light ? "text-white" : "text-text",
          )}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p
          className={cn(
            "mt-6 max-w-xl text-base leading-7 md:ml-[34px] md:text-lg",
            light ? "text-white/70" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
