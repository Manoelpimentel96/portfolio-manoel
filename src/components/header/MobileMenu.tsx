"use client";

import { Menu, X } from "lucide-react";

import DownloadCV from "./DownloadCV";
import LanguageSwitcher from "./LanguageSwitcher";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

type MobileMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export default function MobileMenu({
  isOpen,
  onToggle,
  onClose,
}: MobileMenuProps) {
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-20 w-full border-t border-border/50 bg-background lg:hidden">
          <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center px-6 py-12">
            <Navigation mobile onNavigate={onClose} />

            <div className="mt-12 flex flex-col items-center gap-7">
              <LanguageSwitcher mobile />

              <ThemeToggle mobile />

              <DownloadCV mobile onClick={onClose} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
