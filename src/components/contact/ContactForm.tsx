"use client";

import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-6 rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-foreground"
          >
            {t("name")}
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={t("namePlaceholder")}
            className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            {t("email")}
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={t("emailPlaceholder")}
            className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-foreground"
        >
          {t("subject")}
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder={t("subjectPlaceholder")}
          className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          {t("message")}
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder={t("messagePlaceholder")}
          className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-yellow-400 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow-400 hover:bg-blue-500 disabled:pointer-events-none disabled:opacity-60 sm:w-fit"
      >
        <Send
          className="size-4"
          aria-hidden="true"
        />

        {isSubmitting ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
