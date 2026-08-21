"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { productCategories, searchSuggestions } from "@/data/site";
import { useUi } from "@/context/UiContext";
import { easeOutExpo } from "@/lib/motion";

export function SearchOverlay() {
  const { searchOpen, closeSearch } = useUi();
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  function submit(term = query) {
    const value = term.trim();
    closeSearch();
    router.push(value ? `/search?q=${encodeURIComponent(value)}` : "/search");
  }

  return (
    <AnimatePresence>
      {searchOpen ? (
        <motion.div
          className="fixed inset-0 z-[70] bg-deep-navy text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
        >
          <div className="mx-auto flex min-h-full max-w-5xl flex-col px-6 py-8 md:px-10">
            <div className="flex justify-end">
              <button type="button" onClick={closeSearch} aria-label="Close search">
                <X className="h-8 w-8" />
              </button>
            </div>
            <motion.form
              className="mt-16 border-b border-white/20"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              onSubmit={(event) => {
                event.preventDefault();
                submit();
              }}
            >
              <label htmlFor="site-search" className="eyebrow text-turquoise">
                What are you looking for?
              </label>
              <div className="mt-4 flex items-center gap-4">
                <Search className="h-8 w-8 shrink-0" strokeWidth={1.4} />
                <input
                  id="site-search"
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search parts, topics, products..."
                  className="h-20 w-full bg-transparent font-display text-3xl font-black italic uppercase outline-none placeholder:text-white/25 md:text-5xl"
                />
              </div>
            </motion.form>
            <div className="mt-12 grid gap-12 md:grid-cols-2">
              <div>
                <p className="eyebrow text-white/50">Suggestions</p>
                <ul className="mt-4 space-y-3">
                  {searchSuggestions.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        className="text-left text-lg hover:text-turquoise"
                        onClick={() => submit(item)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow text-white/50">Categories</p>
                <ul className="mt-4 space-y-3">
                  {productCategories.slice(0, 6).map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-white/80 hover:text-turquoise"
                        onClick={closeSearch}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
