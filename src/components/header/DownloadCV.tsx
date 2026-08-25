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
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        border
        border-yellow-400
        bg-transparent
        px-5
        py-2.5
        text-sm
        font-medium
        text-foreground
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-blue-500
        hover:text-blue-500
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500
        focus-visible:ring-offset-2
        dark:border-yellow-400
        dark:hover:border-blue-400
        dark:hover:text-blue-400
        ${mobile ? "mt-4 w-full" : ""}
      `}
    >
      {t("downloadCV")}
    </a>
  );
}
