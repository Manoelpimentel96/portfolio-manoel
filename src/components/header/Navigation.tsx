"use client";

import { useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";

type NavigationProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

const navigationItems = [
  {
    key: "about",
    href: "/",
  },
  {
    key: "projects",
    href: "/#projetos",
  },
  {
    key: "experience",
    href: "/#experiencias",
  },
  {
    key: "contact",
    href: "/#contato",
  },
] as const;

export default function Navigation({
  mobile = false,
  onNavigate,
}: NavigationProps) {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();

  function handleNavigation(href: string) {
    onNavigate?.();

    if (href.startsWith("/#")) {
      const [, hash] = href.split("#");

      document.getElementById(hash)?.scrollIntoView({
        behavior: "smooth",
      });

      return;
    }

    router.push(href as never);
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
          className="cursor-pointer text-sm font-medium text-gray-600 transition-colors
           hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
        >
          {t(item.key)}
        </button>
      ))}
    </nav>
  );
}



/*
"use client";

import { usePathname, useRouter } from "@/i18n/navigation";

type NavigationProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

const navigationItems = [
  {
    label: "Sobre",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/#projetos",
  },
  {
    label: "Experiências",
    href: "/#experiencias",
  },
  {
    label: "Contato",
    href: "/#contato",
  },
];

export default function Navigation({
  mobile = false,
  onNavigate,
}: NavigationProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleNavigation(href: string) {
    onNavigate?.();

    if (href.startsWith("/#")) {
      const [path, hash] = href.split("#");

      if (pathname === path || pathname === "/") {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
        });

        return;
      }
    }

    router.push(href as never);
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
          key={item.href}
          type="button"
          onClick={() => handleNavigation(item.href)}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}*/
