"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  mobile?: boolean;
};

export default function ThemeToggle({
  mobile = false,
}: ThemeToggleProps) {
  const t = useTranslations("Header");

  const { theme, setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={t("theme")}
      title={t("theme")}
      className={
        mobile
          ? "cursor-pointer flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          : "cursor-pointer flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      }
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}

      {mobile && <span>{t("theme")}</span>}
    </button>
  );
}