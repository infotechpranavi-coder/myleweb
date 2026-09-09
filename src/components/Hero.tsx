"use client";

import { motion } from "framer-motion";
import { ArrowButton } from "@/components/ArrowButton";
import { DiagonalAccent } from "@/components/ui/Geometry";
import { SmartImage } from "@/components/ui/SmartImage";
import { easeOutExpo } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-deep-navy text-white lg:min-h-[min(78vh,860px)]">
      <div className="grid lg:min-h-[min(78vh,860px)] lg:block">
        <div className="relative z-10 mx-auto flex max-w-[1680px] flex-col justify-center px-5 py-14 lg:absolute lg:inset-0 lg:px-10 lg:py-16 xl:px-14">
          <motion.div
            className="max-w-xl lg:max-w-[54%]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
          >
            <p className="eyebrow text-white/70">Driven by partnership</p>
            <h1 className="hero-title mt-5 text-[clamp(3rem,7.4vw,6.6rem)]">
              MEYLE:
              <br />
              Partnership.
              <br />
              Reimagined.
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-white/75 md:text-lg">
              MEYLE is your partner in the independent aftermarket – with
              high-quality parts, reliable data, and true collaboration.
              Engineered in Hamburg, trusted worldwide.
            </p>
            <div className="mt-10">
              <ArrowButton href="/about">Learn more</ArrowButton>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative h-[320px] lg:absolute lg:inset-0 lg:left-[48%] lg:h-auto"
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: easeOutExpo }}
        >
          <SmartImage
            src="/taklaphto/Raulf_Startseite_Querlenker.webp"
            alt="MEYLE partner in an independent automotive workshop"
            fill
            loading="eager"
            fetchPriority="high"
            className="object-cover object-[center_20%]"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden bg-deep-navy lg:block"
        style={{ clipPath: "polygon(0 0, 68% 0, 52% 100%, 0 100%)" }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 z-[2] hidden lg:block"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: easeOutExpo }}
      >
        <DiagonalAccent />
      </motion.div>

      <div className="h-2 w-full bg-turquoise lg:hidden" />
    </section>
  );
}
