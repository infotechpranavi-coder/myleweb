"use client";

import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { MainNavigation } from "@/components/MainNavigation";

export function Header() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <TopBar />
      <MainNavigation active={active} setActive={setActive} />
    </header>
  );
}
