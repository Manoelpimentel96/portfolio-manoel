"use client";

import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";

type LanguageSwitcherProps = {
  mobile?: boolean;
};

export default function LanguageSwitcher({
  mobile = false,
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const t = useTranslations("Header");

  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "pt" ? "en" : "pt";

  function handleChange() {
    router.replace(pathname, {
      locale: nextLocale,
    });
  }

  return (
    <button
      type="button"
      onClick={handleChange}
      aria-label={t("language")}
      className={
        mobile
          ? "cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          : "cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      }
    >
      {t("language")}
    </button>
  );
}
