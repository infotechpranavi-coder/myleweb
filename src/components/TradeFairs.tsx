import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { tradeFairs } from "@/data/site";

export function TradeFairs() {
  return (
    <section className="border-b border-line/15 bg-white px-5 py-16 lg:px-10 lg:py-24 xl:px-14">
      <div className="mx-auto max-w-[1680px]">
        <SectionHeading title={"AUTOPART\ntrade fair dates"} />
        <div className="mt-12 grid border border-line/15 md:grid-cols-2">
          {tradeFairs.map((event, index) => (
            <Reveal key={event.title} delay={index * 0.08}>
              <article className="h-full border-b border-line/15 p-6 md:border-r md:p-10 even:md:border-r-0 md:[&:nth-child(n+3)]:border-b-0">
                <div className="flex flex-wrap gap-2">
                  <span className="border border-line/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
                    {event.dates}
                  </span>
                  <span className="bg-turquoise px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-deep-navy">
                    {event.location}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[clamp(1.7rem,2.6vw,2.4rem)] font-black italic uppercase leading-[0.95]">
                  {event.title}
                </h3>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">
                  {event.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
