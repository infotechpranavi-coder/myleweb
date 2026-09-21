"use client";

import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/cn";

const tabs = [
  {
    id: "competent",
    label: "Competent",
    image: "/images/meyle/quality/dev/commitment-competent.webp",
    imageAlt: "A car drives on a wet test track",
    body: "When developing MEYLE parts, we always think from the customer and workshop perspective. Because our aim is to always be so good that we are happy to install our parts ourselves. We observe, we analyze, we develop - everything for what we consider to be the perfect spare part.",
  },
  {
    id: "innovative",
    label: "Innovative",
    image: "/images/meyle/quality/dev/commitment-innovative.webp",
    imageAlt: "Two people show each other something on the laptop",
    body: "Our experts are passionate about their work every day. Their eyes and ears are close to the market. We combine theory with practice and (further) develop parts in such a way that they are innovative and offer real added value - whether for wholesalers, workshops or ambitious mechanics.",
  },
  {
    id: "solution",
    label: "Solution-oriented",
    image: "/images/meyle/quality/dev/commitment-solution.webp",
    imageAlt: "Fingers point to a spot on a MEYLE HD control arm",
    body: "For us, customer-centric product development means not only (further) developing a product, but also thinking about processes. So that we can optimize ordering processes, for example, and save our customers time and money. Our products are therefore exactly what our customers need: solution-oriented!",
  },
] as const;

export function CommitmentTabs() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section id="commitment" className="border-b border-line/15 bg-white">
      <div className="mx-auto grid max-w-[1680px] lg:grid-cols-2">
        {/* MEYLE: copy left, image right */}
        <div className="order-2 flex flex-col justify-center px-5 py-14 lg:order-1 lg:px-12 lg:py-20 xl:px-16">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black italic uppercase leading-[0.95] text-deep-navy">
            Our Commitment
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
            For us, manufacturing means more than just producing parts: It starts
            with the initial idea for a new or improved MEYLE HD or MEYLE PD part.
            A lot of time and energy goes into research, agreeing the
            specifications, sample and quality tests as well as the entire
            coordination before the part can go into series production.
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-text/75">
            Thanks to the great commitment of our product developers and
            engineers, we can proudly say that our parts are{" "}
            <strong className="font-semibold text-deep-navy">
              &quot;ENGINEERED AND QUALITY APPROVED IN GERMANY&quot;
            </strong>
            . They are developed precisely according to our specifications in
            Hamburg, monitored during the production process and comprehensively
            tested. See the quality that goes into every MEYLE part for yourself!
          </p>

          <div className="mt-10 flex flex-wrap gap-6 border-b border-line/15">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "border-b-2 pb-3 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors",
                  index === active
                    ? "border-deep-navy text-deep-navy"
                    : "border-transparent text-muted hover:text-deep-navy",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-text/75">
            {current.body}
          </p>
        </div>

        <div className="relative order-1 min-h-80 aspect-[4/3] lg:order-2 lg:aspect-auto lg:min-h-[560px]">
          <SmartImage
            key={current.id}
            src={current.image}
            alt={current.imageAlt}
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>
    </section>
  );
}
