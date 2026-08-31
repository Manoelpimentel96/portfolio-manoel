import { useTranslations } from "next-intl";

export default function ContactHeader() {
  const t = useTranslations("contact");

  return (
    <header className="flex w-full flex-col gap-4">
      <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
        {t("eyebrow")}
      </span>

      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {t("title")}
      </h2>

      <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
        {t("description")}
      </p>
    </header>
  );
}
