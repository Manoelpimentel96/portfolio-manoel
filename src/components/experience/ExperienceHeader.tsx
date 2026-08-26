import { getTranslations } from "next-intl/server";

export default async function ExperienceHeader() {
  const t = await getTranslations("experience");

  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <span
        className="inline-flex w-fit items-center rounded-full
        px-3 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-500"
      >
        {t("label")}
      </span>

      <h2 className="text-2xl font-bold md:text-3xl">
        {t("title")}
      </h2>

      <p className="max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
        {t("description")}
      </p>
    </header>
  );
}
