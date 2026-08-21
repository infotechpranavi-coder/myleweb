"use client";

import Link from "next/link";
import { Hexagon, Mail, Search } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { MegaMenu } from "@/components/MegaMenu";
import { mainNav } from "@/data/site";
import { useUi } from "@/context/UiContext";
import { cn } from "@/lib/cn";

type MainNavigationProps = {
  active: string | null;
  setActive: (label: string | null) => void;
};

export function MainNavigation({ active, setActive }: MainNavigationProps) {
  const { openSearch, toggleMenu, menuOpen } = useUi();

  return (
    <div
      className="relative flex h-[72px] items-stretch border-b border-line/15 bg-white lg:h-[86px]"
      onMouseLeave={() => setActive(null)}
    >
      <BrandLogo
        priority
        className="h-full shrink-0 border-r border-line/15 bg-white px-3 lg:px-5"
        imageClassName="h-9 w-auto max-w-[168px] object-contain object-left lg:h-11 lg:max-w-[220px]"
      />

      <nav aria-label="Main" className="hidden h-full flex-1 items-stretch lg:flex">
        {mainNav.map((item) => (
          <div
            key={item.label}
            className="h-full"
            onMouseEnter={() => setActive(item.label)}
          >
            <Link
              href={item.href}
              className={cn(
                "flex h-full items-center border-r border-line/15 px-6 text-[13px] font-semibold uppercase tracking-[0.16em] xl:px-8",
                active === item.label ? "text-navy" : "text-text",
              )}
              onFocus={() => setActive(item.label)}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>

      <div className="ml-auto flex h-full items-stretch">
        <button
          type="button"
          onClick={openSearch}
          className="flex w-[72px] items-center justify-center border-l border-line/15 lg:w-[86px]"
          aria-label="Open search"
        >
          <Search className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <Link
          href="/parts-catalog"
          className="hidden items-center gap-2 border-l border-line/15 px-5 text-[12px] font-semibold uppercase tracking-[0.14em] lg:flex"
        >
          <Hexagon className="h-4 w-4" strokeWidth={1.6} />
          Parts Catalog
        </Link>
        <Link
          href="/contact"
          className="hidden items-center gap-2 border-l border-line/15 px-5 text-[12px] font-semibold uppercase tracking-[0.14em] lg:flex"
        >
          <Mail className="h-4 w-4" strokeWidth={1.6} />
          Contact
        </Link>
        <button
          type="button"
          className="flex w-[72px] items-center justify-center border-l border-line/15 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-6 bg-text" />
            <span className="block h-px w-6 bg-text" />
            <span className="block h-px w-6 bg-text" />
          </span>
        </button>
      </div>

      <MegaMenu active={active} />
    </div>
  );
}
