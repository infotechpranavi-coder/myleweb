import { ArrowButton } from "@/components/ArrowButton";
import { SmartImage } from "@/components/ui/SmartImage";

export function EditorialFeature() {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-3">
        <div className="relative min-h-[280px] overflow-hidden lg:min-h-[360px]">
          <SmartImage
            src="/images/hero/mechanic.jpg"
            alt="AUTOPART expert in the workshop"
            fill
            loading="eager"
            fetchPriority="high"
            className="object-cover object-[center_18%] transition-transform duration-700 hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>

        <article className="flex min-h-[280px] flex-col justify-between bg-off-white px-7 py-10 md:px-10 lg:min-h-[360px] lg:px-12 lg:py-12">
          <div>
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
              Automatic transmission oil: change it or not?
            </p>
            <h2 className="mt-6 max-w-[28ch] font-sans text-[clamp(1.35rem,2.1vw,1.75rem)] font-medium leading-[1.35] tracking-[-0.01em] text-text">
              Expert Andreas Raulf busts the myths – and explains why fresh oil is key to long service life.
            </h2>
          </div>
          <div className="mt-10">
            <ArrowButton href="/content">Read now</ArrowButton>
          </div>
        </article>

        <article className="flex min-h-[280px] flex-col justify-between border-t border-line/15 bg-white px-7 py-10 md:px-10 lg:min-h-[360px] lg:border-t-0 lg:border-l lg:px-12 lg:py-12">
          <div>
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
              Product highlight
            </p>
            <h2 className="mt-6 max-w-[28ch] font-sans text-[clamp(1.35rem,2.1vw,1.75rem)] font-medium leading-[1.35] tracking-[-0.01em] text-text">
              More comfort, less effort: The AUTOPART shock absorber set for the Tesla Model 3.
            </h2>
          </div>
          <div className="mt-10">
            <ArrowButton href="/products" variant="navy">
              All info
            </ArrowButton>
          </div>
        </article>
      </div>
    </section>
  );
}
