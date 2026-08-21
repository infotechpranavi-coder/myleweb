import { ArrowButton } from "@/components/ArrowButton";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCTA() {
  return (
    <section className="bg-white px-5 py-16 lg:px-10 lg:py-24 xl:px-14">
      <Reveal>
        <div className="mx-auto grid max-w-6xl overflow-hidden bg-navy text-white lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[280px] lg:min-h-[420px]">
            <SmartImage
              src="/images/hero/contact.jpg"
              alt="AUTOPART technical specialist at a workshop workstation"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-12 lg:px-14">
            <p className="eyebrow text-turquoise">Contact us</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.8rem)] font-black italic uppercase leading-[0.95]">
              Questions, wishes, ideas?
            </h2>
            <p className="mt-5 max-w-sm text-white/75">
              We are happy to be there for you personally.
            </p>
            <div className="mt-8">
              <ArrowButton href="/contact">Contact us</ArrowButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
