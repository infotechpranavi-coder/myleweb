"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { mainNav } from "@/data/site";
import { useUi } from "@/context/UiContext";
import { easeOutExpo } from "@/lib/motion";

export function MobileMenu() {
  const { menuOpen, closeMenu } = useUi();
  const [openSection, setOpenSection] = useState<string | null>("Products");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <AnimatePresence>
      {menuOpen ? (
        <motion.div
          className="fixed inset-0 z-[60] overflow-y-auto bg-deep-navy text-white lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: easeOutExpo }}
        >
          <div className="flex h-[72px] items-center justify-between border-b border-white/10 bg-white px-5 text-text">
            <BrandLogo imageClassName="h-9 w-auto max-w-[180px] object-contain object-left" />
            <button type="button" onClick={closeMenu} aria-label="Close menu">
              <X className="h-7 w-7" />
            </button>
          </div>
          <nav className="px-5 py-8" aria-label="Mobile">
            {mainNav.map((item) => (
              <div key={item.label} className="border-b border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-5 text-left font-display text-4xl font-black italic uppercase"
                  onClick={() =>
                    setOpenSection((current) =>
                      current === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={`h-6 w-6 transition-transform ${
                      openSection === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === item.label
                  ? item.columns.flatMap((column) =>
                      column.items.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeMenu}
                          className="block py-2.5 text-sm uppercase tracking-[0.12em] text-white/70"
                        >
                          {child.label}
                        </Link>
                      )),
                    )
                  : null}
              </div>
            ))}
            <Link
              href="/parts-catalog"
              onClick={closeMenu}
              className="block border-b border-white/10 py-5 font-display text-4xl font-black italic uppercase"
            >
              Parts Catalog
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block py-5 font-display text-4xl font-black italic uppercase"
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
