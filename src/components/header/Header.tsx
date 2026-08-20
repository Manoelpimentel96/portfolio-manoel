"use client";

import { useState } from "react";

import DownloadCV from "./DownloadCV";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <Navigation />

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />

          <ThemeToggle />

          <DownloadCV />
        </div>

        <MobileMenu
          isOpen={isOpen}
          onToggle={() => setIsOpen((open) => !open)}
          onClose={closeMenu}
        />
      </div>
    </header>
  );
}
