"use client";

import { products } from "@/data/site";
import { ProductSlide } from "@/components/ProductSlide";
import { cn } from "@/lib/cn";
import { easeOutExpo } from "@/lib/motion";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export function ProductCarousel() {
  const [index, setIndex] = useState(0);
  const total = products.length;

  const go = useCallback(
    (direction: number) => {
      setIndex((current) => (current + direction + total) % total);
    },
    [total],
  );

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section className="border-b border-line/15 bg-off-white" aria-roledescription="carousel">
      <div className="mx-auto max-w-[1680px] px-5 pb-10 pt-10 lg:px-10 xl:px-14">
        <div className="mb-8 flex items-center justify-between border-y border-line/15">
          <div
            aria-hidden
            className="h-3 w-16 shrink-0 bg-turquoise md:w-24"
            style={{ clipPath: "polygon(12% 0, 100% 0, 88% 100%, 0 100%)" }}
          />
          <div className="flex items-stretch">
            <button
              type="button"
              aria-label="Previous product"
              onClick={() => go(-1)}
              className="flex h-14 w-14 items-center justify-center border-l border-line/15 text-xl transition-colors hover:bg-white hover:text-navy"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next product"
              onClick={() => go(1)}
              className="flex h-14 w-14 items-center justify-center border-l border-line/15 text-xl transition-colors hover:bg-white hover:text-navy"
            >
              →
            </button>
          </div>
        </div>
        <p className="mb-4 text-sm tracking-[0.16em] text-muted" aria-live="polite">
          {String(index + 1).padStart(2, "0")} – {String(total).padStart(2, "0")}
        </p>
        <div className="overflow-hidden">
          <motion.div
            className="flex cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) go(1);
              if (info.offset.x > 80) go(-1);
            }}
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
          >
            {products.map((product, productIndex) => (
              <div key={product.number} className="min-w-full">
                <ProductSlide
                  product={product}
                  index={productIndex}
                  total={total}
                  active={productIndex === index}
                />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mt-6 flex justify-center gap-2 lg:hidden">
          {products.map((product, productIndex) => (
            <button
              key={product.number}
              type="button"
              aria-label={`Go to product ${product.number}`}
              className={cn(
                "h-2 w-8",
                productIndex === index ? "bg-navy" : "bg-line/20",
              )}
              onClick={() => setIndex(productIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
