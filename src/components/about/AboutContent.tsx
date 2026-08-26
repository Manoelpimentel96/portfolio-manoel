import { useTranslations } from "next-intl";

export default function AboutContent() {
  const t = useTranslations("About");

  return (
    <div className="w-full">
      <h2
        className="
          text-center
          text-2xl
          text-gray-600
          font-bold
          tracking-tight
          text-foreground
          sm:text-3xl
          lg:text-left
          lg:text-4xl
        "
      >
        {t("title")}
      </h2>

      <div
        className="
          mt-6
          space-y-5
          text-justify
          text-base
          leading-7
          text-muted-foreground
          sm:text-lg
          lg:text-left
        "
      >
        <p>{t("paragraph1")}</p>

        <p>{t("paragraph2")}</p>

        <p>{t("paragraph3")}</p>
      </div>
    </div>
  );
}
