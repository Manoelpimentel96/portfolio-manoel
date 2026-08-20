"use client";

import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

type DownloadCVProps = {
  mobile?: boolean;
  onClick?: () => void;
};

export default function DownloadCV({
  mobile = false,
  onClick,
}: DownloadCVProps) {
  const t = useTranslations("Button");

  return (
    <a
      href={siteConfig.links.resume}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={
        mobile
          ? "mt-4 rounded-lg bg-foreground px-8 py-3 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
          : "ml-2 inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
      }
    >
      {t("downloadCV")}
    </a>
  );
}

/*
import { siteConfig } from "@/config/site";

type DownloadCVProps = {
  mobile?: boolean;
  onClick?: () => void;
};

export default function DownloadCV({
  mobile = false,
  onClick,
}: DownloadCVProps) {
  return (
    <a
      href={siteConfig.links.resume}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={
        mobile
          ? "mt-4 rounded-lg bg-foreground px-8 py-3 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
          : "ml-2 inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
      }
    >
      Baixar CV
    </a>
  );
}
*/