"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { footerColumns, legalLinks } from "@/data/site";
import { cn } from "@/lib/cn";

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M6.5 9H4v11h2.5V9zM5.2 4.2A1.6 1.6 0 1 0 5.2 7.4 1.6 1.6 0 0 0 5.2 4.2zM20 20h-2.5v-5.6c0-1.6-.6-2.2-1.6-2.2s-1.7.8-1.7 2.3V20H12V9h2.4v1.5c.5-.9 1.6-1.8 3.3-1.8 2.2 0 4.3 1.3 4.3 4.5V20z" />
    </svg>
  );
}

const social = [
  { label: "YouTube", icon: YouTubeIcon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedInIcon, href: "#" },
];

export function Footer() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <footer>
      <div className="bg-navy text-white">
        <div className="mx-auto grid max-w-[1680px] gap-10 px-5 py-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] lg:px-10 lg:py-20 xl:px-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerColumns.map((column) => {
              const isOpen = open === column.title;
              return (
                <div key={column.title} className="border-b border-white/15 lg:border-none">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left lg:pointer-events-none lg:py-0"
                    onClick={() => setOpen(isOpen ? null : column.title)}
                  >
                    <span className="eyebrow">{column.title}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 lg:hidden",
                        isOpen ? "rotate-180" : "",
                      )}
                    />
                  </button>
                  <ul className={cn("space-y-2.5 pb-4 lg:mt-6 lg:block lg:pb-0", isOpen ? "block" : "hidden")}>
                    {column.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-[14px] leading-6 text-white/80 transition-colors hover:text-turquoise"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-between border-t border-white/15 pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <div className="inline-flex bg-white p-4">
              <BrandLogo
                href="/"
                imageClassName="h-14 w-auto max-w-[260px] object-contain object-left lg:h-16 lg:max-w-[300px]"
              />
            </div>
            <div className="mt-10">
              <div className="flex gap-3">
                {social.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-12 w-12 items-center justify-center border border-white/25 transition-colors hover:border-turquoise hover:text-turquoise"
                  >
                    <item.icon />
                  </a>
                ))}
              </div>
              <p className="mt-8 text-sm text-white/70">© VIR Group of Companies</p>
              <p className="text-sm text-white/70">Hamburg | Germany</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-line/10 bg-off-white">
        <nav
          aria-label="Legal"
          className="mx-auto flex max-w-[1680px] flex-wrap gap-x-6 gap-y-3 px-5 py-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-text lg:px-10 xl:px-14"
        >
          {legalLinks.map((link) => (
            <a key={link.href} href={link.href} className="link-underline">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
