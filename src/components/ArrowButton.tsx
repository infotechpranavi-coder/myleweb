import { cn } from "@/lib/cn";

type ArrowButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "turquoise" | "navy" | "outline" | "white";
  className?: string;
};

const variants = {
  turquoise: "bg-turquoise text-deep-navy",
  navy: "bg-navy text-white",
  outline: "bg-transparent text-text border border-line/20",
  white: "bg-white text-deep-navy",
};

const arrowVariants = {
  turquoise: "bg-turquoise text-deep-navy border-l border-deep-navy/15 brightness-95",
  navy: "bg-[#003d66] text-white",
  outline: "bg-transparent text-text border-l border-line/20",
  white: "bg-off-white text-deep-navy",
};

export function ArrowButton({
  href,
  children,
  variant = "turquoise",
  className,
}: ArrowButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex h-14 items-stretch text-[13px] font-semibold uppercase tracking-[0.14em]",
        className,
      )}
    >
      <span
        className={cn(
          "flex items-center px-7 transition-colors",
          variants[variant],
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          "flex w-14 items-center justify-center",
          arrowVariants[variant],
        )}
        aria-hidden
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-[5px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}
