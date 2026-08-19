import { getTranslations } from "next-intl/server";
export default async function LocalePage() {
  const t = await getTranslations("Header");
  const button = await getTranslations("Button");

  return (
    <>
   

    <main>
      <h1>{t("about")}</h1>

      <nav>
        <span>{t("projects")}</span>
        <span>{t("experience")}</span>
        <span>{t("contact")}</span>
      </nav>

      <p>{t("language")}</p>
      <p>{t("theme")}</p>

      <button>{button("downloadCV")}</button>
    </main>
    </>
  );
}
