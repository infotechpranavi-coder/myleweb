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
      <div className="mx-auto max-w-[1680px] px-5 py-8 lg:px-10 lg:py-10 xl:px-14">
        <div className="mb-6 flex items-center justify-end gap-4">
          <p className="text-sm tracking-[0.16em] text-muted" aria-live="polite">
            {String(index + 1).padStart(2, "0")} – {String(total).padStart(2, "0")}
          </p>
          <div className="flex">
            <button
              type="button"
              aria-label="Previous product"
              onClick={() => go(-1)}
              className="flex h-12 w-12 items-center justify-center border border-line/20 text-xl hover:border-navy hover:text-navy"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next product"
              onClick={() => go(1)}
              className="flex h-12 w-12 items-center justify-center border border-l-0 border-line/20 text-xl hover:border-navy hover:text-navy"
            >
              →
            </button>
          </div>
        </div>
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
