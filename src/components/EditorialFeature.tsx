import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";

export function EditorialFeature() {
  return (
    <section className="bg-off-white">
      <div className="grid lg:grid-cols-3">
        <div className="relative min-h-[280px] overflow-hidden lg:min-h-[360px]">
          <SmartImage
            src="/K_MEYLE_11062026_16-9_v4.webp"
            alt="MEYLE product highlights at Automechanika"
            fill
            loading="eager"
            fetchPriority="high"
            className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>

        <article className="flex min-h-[280px] flex-col justify-between border-t border-line/10 px-7 py-10 md:px-10 lg:min-h-[360px] lg:border-t-0 lg:border-l lg:px-12 lg:py-12">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Automechanika 2026: Our product highlights
            </p>
            <h2 className="mt-7 max-w-[26ch] font-sans text-[clamp(1.25rem,1.9vw,1.55rem)] font-normal leading-[1.45] tracking-[-0.01em] text-text">
              Discover our latest product innovations and highlights presented
              at Automechanika 2026 in Frankfurt.
            </h2>
          </div>
          <div className="mt-10">
            <Link
              href="/about/events"
              className="font-sans text-[14px] font-medium text-muted underline decoration-muted/50 underline-offset-[6px] transition-colors hover:text-text hover:decoration-text"
            >
              Discover Now
            </Link>
          </div>
        </article>

        <article className="flex min-h-[280px] flex-col justify-between border-t border-line/10 px-7 py-10 md:px-10 lg:min-h-[360px] lg:border-t-0 lg:border-l lg:px-12 lg:py-12">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Product highlight
            </p>
            <h2 className="mt-7 max-w-[26ch] font-sans text-[clamp(1.25rem,1.9vw,1.55rem)] font-normal leading-[1.45] tracking-[-0.01em] text-text">
              More comfort, less effort: The MEYLE shock absorber set for the
              Tesla Model 3.
            </h2>
          </div>
          <div className="mt-10">
            <Link
              href="/products/suspension-and-damping"
              className="font-sans text-[14px] font-medium text-muted underline decoration-muted/50 underline-offset-[6px] transition-colors hover:text-text hover:decoration-text"
            >
              All info
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
