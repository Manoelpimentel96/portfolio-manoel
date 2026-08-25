"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

type ThemeToggleProps = {
  mobile?: boolean;
};

export default function ThemeToggle({
  mobile = false,
}: ThemeToggleProps) {
  const t = useTranslations("Header");

  const { theme, setTheme, resolvedTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => { },
    () => true,
    () => false,
  );

  if (!mounted) {
    return null;
  }

  const currentTheme =
    theme === "system" ? resolvedTheme : theme;

  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      aria-label={t("theme")}
      title={t("theme")}
      className={
        mobile
          ? `
            flex
            cursor-pointer
            items-center
            gap-2
            text-sm
            font-medium
            text-muted-foreground
            transition-colors
            hover:text-foreground
          `
          : `
            flex
            h-10
            w-10
            cursor-pointer
            items-center
            justify-center
            rounded-lg
            text-muted-foreground
            transition-colors
            hover:bg-muted
            hover:text-foreground
          `
      }
    >
      {isDark ? (
        <Sun
          aria-hidden="true"
          className="h-5 w-5"
        />
      ) : (
        <Moon
          aria-hidden="true"
          className="h-5 w-5"
        />
      )}

      {mobile && <span>{t("theme")}</span>}
    </button>
  );
}
