import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ProductIntro() {
  return (
    <section className="border-b border-line/15 bg-white px-5 py-16 lg:px-10 lg:py-24 xl:px-14">
      <Reveal>
        <div className="mx-auto flex max-w-[1680px] flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            title={
              "4 areas - one goal:\nPrecision that makes a\ndifference"
            }
          />
          <p className="max-w-md text-base leading-7 text-muted lg:mb-2 lg:text-lg">
            AUTOPART HD, AUTOPART PD, AUTOPART ORIGINAL and AUTOPART KITs offer spare parts for the highest demands: Yours. Discover the latest highlight products.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
