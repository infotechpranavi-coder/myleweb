import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ProductIntro() {
  return (
    <section className="bg-off-white px-5 pt-16 lg:px-10 lg:pt-24 xl:px-14">
      <Reveal>
        <div className="mx-auto max-w-[1680px]">
          <SectionHeading
            title={"4 areas - one goal:\nPrecision that makes a\ndifference"}
            description="MEYLE HD, MEYLE PD, MEYLE ORIGINAL and MEYLE KITs offer spare parts for the highest demands: Yours. Discover the latest highlight products."
            className="max-w-5xl"
          />
        </div>
      </Reveal>
    </section>
  );
}
