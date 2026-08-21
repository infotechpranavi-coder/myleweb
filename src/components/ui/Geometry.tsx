import { cn } from "@/lib/cn";

export function TurquoiseSlash({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block h-[1.15em] w-[10px] shrink-0 origin-center -skew-x-[22deg] bg-turquoise",
        className,
      )}
    />
  );
}

export function DiagonalAccent({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <div
        className="absolute inset-0 bg-turquoise"
        style={{
          clipPath: "polygon(64.6% 0, 66.2% 0, 51.6% 100%, 50% 100%)",
        }}
      />
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow text-muted">{children}</p>;
}
