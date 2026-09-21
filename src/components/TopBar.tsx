"use client";

import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { languages, topLinks } from "@/data/site";

export function TopBar() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className="hidden h-14 items-center justify-end border-b border-line/15 bg-white lg:flex">
      <nav aria-label="Utility" className="flex h-full items-center">
        {topLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="link-underline flex h-full items-center px-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-text"
          >
            {link.label}
          </a>
        ))}
        <div className="relative h-full">
          <button
            type="button"
            className="flex h-full items-center gap-2 border-l border-line/15 px-5 text-[11px] font-semibold uppercase tracking-[0.16em]"
            aria-expanded={open}
            aria-haspopup="listbox"
            onClick={() => setOpen((value) => !value)}
          >
            <Globe className="h-3.5 w-3.5" strokeWidth={1.6} />
            {language}
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
          {open ? (
            <ul
              role="listbox"
              className="absolute right-0 z-50 min-w-44 border border-line/15 bg-white py-2 shadow-none"
            >
              {languages
                .filter((item) => item !== language)
                .map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      role="option"
                      className="block w-full px-4 py-2 text-left text-xs uppercase tracking-[0.12em] hover:bg-off-white"
                      onClick={() => {
                        setLanguage(item);
                        setOpen(false);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
            </ul>
          ) : null}
        </div>
      </nav>
    </div>
  );
}
