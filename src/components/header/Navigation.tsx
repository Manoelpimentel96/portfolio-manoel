"use client";

import { useTranslations } from "next-intl";

import { usePathname } from "@/i18n/navigation";

type NavigationProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

const navigationItems = [
  {
    key: "about",
    href: "#about",
  },
  {
    key: "projects",
    href: "#projects",
  },
  {
    key: "experience",
    href: "#experience",
  },
  {
    key: "contact",
    href: "#contact",
  },
] as const;

export default function Navigation({
  mobile = false,
  onNavigate,
}: NavigationProps) {
  const t = useTranslations("Header");
  const pathname = usePathname();

  function handleNavigation(href: string) {
    onNavigate?.();

    const hash = href.replace("#", "");

    const element = document.getElementById(hash);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <nav
      aria-label="Navegação principal"
      className={
        mobile
          ? "flex flex-col items-center gap-8"
          : "hidden items-center gap-8 lg:flex"
      }
    >
      {navigationItems.map((item) => (
        <button
          key={item.key}
          type="button"
          onClick={() => handleNavigation(item.href)}
          className="
            cursor-pointer
            text-sm
            font-medium
            text-gray-600
            transition-colors
            hover:text-blue-600
            dark:text-gray-300
            dark:hover:text-yellow-400
          "
        >
          {t(item.key)}
        </button>
      ))}
    </nav>
  );
}
