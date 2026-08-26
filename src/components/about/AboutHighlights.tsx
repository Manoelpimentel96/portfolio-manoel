"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const highlightKeys = [
  "technical",
  "current",
  "professional",
] as const;

export default function AboutHighlights() {
  const t = useTranslations("About");

  const [activeIndex, setActiveIndex] = useState(0);

  const total = highlightKeys.length;

  function next() {
    setActiveIndex((current) => (current + 1) % total);
  }

  function previous() {
    setActiveIndex((current) => (current - 1 + total) % total);
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, [total]);

  const activeKey = highlightKeys[activeIndex];

  return (
    <div className="w-full">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.article
            key={activeKey}
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -40,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              min-h-[190px]
              rounded-3xl
              border
              border-border
              bg-muted/40
              px-6
              py-8
              text-center
              shadow-sm
              sm:px-10
              sm:py-10
              lg:text-left
            "
          >
            <h3
              className="
                text-2xl
                font-semibold
                text-foreground
                sm:text-3xl
              "
            >
              {t(`highlights.${activeKey}.title`)}
            </h3>

            <p
              className="
                mt-4
                max-w-2xl
                text-justify
                text-sm
                leading-6
                text-muted-foreground
                sm:text-base
                sm:leading-7
                lg:text-left
              "
            >
              {t(`highlights.${activeKey}.description`)}
            </p>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={previous}
          aria-label={t("navigation.previous")}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-border
            text-muted-foreground
            transition-all
            hover:border-yellow-400
            hover:text-blue-500
            dark:hover:text-yellow-400
          "
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {highlightKeys.map((key, index) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={t("navigation.showCard", {
                index: index + 1,
              })}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${index === activeIndex
                  ? "w-7 bg-blue-600 dark:bg-yellow-400"
                  : "w-2 bg-muted-foreground/40"
                }
              `}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label={t("navigation.next")}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-border
            text-muted-foreground
            transition-all
            hover:border-yellow-400
            hover:text-blue-500
            dark:hover:text-yellow-400
          "
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
