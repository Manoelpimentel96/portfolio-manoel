"use client";

import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";

import DownloadCV from "@/components/header/DownloadCV";
import HeroInfo from "./HeroInfo";
import SocialLinks from "./SocialLinks";

type HeroContentProps = {
  image: ReactNode;
};

export default function HeroContent({
  image,
}: HeroContentProps) {
  const t = useTranslations("Hero");

  function handleProjectsClick() {
    document.getElementById("projetos")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div
      className="grid min-h-[calc(100vh-5rem)] items-center gap-10 py-16
        text-center lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20 lg:text-left
      "
    >

      <div
        className="order-1 lg:col-start-1 lg:row-start-1
        "
      >
        <p
          className="mb-3 text-sm font-medium tracking-wide text-blue-600 dark:text-yellow-400
          "
        >
          {t("greeting")}
        </p>
        <h1
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl
          "
        >
          Manoel Pimentel
        </h1>

        <h2
          className="mt-3 text-xlfont-semibold text-muted-foreground sm:text-2xl
          "
        >
          {t("role")}
        </h2>
      </div>
      <div
        className="order-2 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:self-center
        "
      >
        {image}
      </div>
      <div
        className="order-3 lg:col-start-1 lg:row-start-2
        "
      >
        <p
          className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground
            sm:text-lg lg:mx-0
          "
        >
          {t("description")}
        </p>
        <div
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row
            lg:items-start lg:justify-start
          "
        >
          <Button
            type="button"
            onClick={handleProjectsClick}
            className="bg-blue-600 text-white hover:border-blue-400 hover:bg-blue-700 hover:text-white
              dark:bg-yellow-400 dark:text-slate-950 dark:hover:bg-yellow-300 dark:hover:text-slate-950
            "

          >
            {t("projects")}

            <ArrowDown
              aria-hidden="true"
              className="ml-2 h-4 w-4"
            />
          </Button>

          <DownloadCV />
        </div>

        <div
          className="mt-8 flex justify-center lg:justify-start
          "
        >
          <SocialLinks />
        </div>

        <div
          className="mt-8 flex justify-center lg:justify-start
          "
        >
          <HeroInfo
            location={t("location")}
            availability={t("availability")}
          />
        </div>
      </div>
    </div>
  );
}
