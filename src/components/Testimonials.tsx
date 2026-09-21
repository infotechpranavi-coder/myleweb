"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { testimonials } from "@/data/site";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <section className="border-b border-line/15 bg-white px-5 py-16 lg:px-10 lg:py-24 xl:px-14">
      <div className="mx-auto max-w-[1680px]">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading title={"What our\ncustomers say"} />
          <div className="hidden md:flex">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center border border-line/20"
              onClick={() =>
                setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
              }
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center border border-l-0 border-line/20"
              onClick={() => setIndex((current) => (current + 1) % testimonials.length)}
            >
              →
            </button>
          </div>
        </div>
        <div className="mt-12 grid items-stretch border border-line/15 lg:grid-cols-[0.85fr_1.15fr]">
          <div
            className={cn(
              "relative overflow-hidden bg-off-white",
              item.imageFit === "cover"
                ? "min-h-[280px] lg:min-h-[420px]"
                : "flex min-h-[280px] items-center justify-center px-6 py-10 lg:min-h-[420px] lg:px-10",
            )}
          >
            {item.imageFit === "cover" ? (
              <SmartImage
                src={item.logo}
                alt={`${item.company}`}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            ) : (
              <div
                key={item.logo}
                className="relative h-56 w-full max-w-[42rem] shrink-0 sm:h-64 lg:h-80"
                style={
                  item.imageScale
                    ? { transform: `scale(${item.imageScale})` }
                    : undefined
                }
              >
                <SmartImage
                  src={item.logo}
                  alt={`${item.company} logo`}
                  fill
                  className={cn(
                    "object-contain",
                    !item.imageScale && "scale-125",
                  )}
                  sizes="(min-width: 1024px) 640px, 90vw"
                />
              </div>
            )}
          </div>
          <div className="relative overflow-hidden bg-deep-navy p-8 text-white md:p-14">
            <span className="pointer-events-none absolute right-6 top-0 font-display text-[9rem] leading-none text-turquoise/20">
              “
            </span>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: easeOutExpo }}
              >
                <p className="max-w-3xl font-display text-[clamp(1.5rem,3vw,2.4rem)] font-black italic leading-[1.15]">
                  {item.quote}
                </p>
                <footer className="mt-10 text-sm uppercase tracking-[0.12em] text-white/70">
                  <p className="text-white">{item.name}</p>
                  <p>{item.company}</p>
                  <p>{item.position}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-6 flex gap-2 md:hidden">
          {testimonials.map((entry, entryIndex) => (
            <button
              key={entry.name}
              type="button"
              aria-label={`Show testimonial ${entryIndex + 1}`}
              className={cn("h-2 w-8", entryIndex === index ? "bg-navy" : "bg-line/20")}
              onClick={() => setIndex(entryIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
