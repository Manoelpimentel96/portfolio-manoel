import Header from "@/components/header/Header";
import { getTranslations } from "next-intl/server";

export default async function LocalePage() {
  const t = await getTranslations("Header");
  const button = await getTranslations("Button");

  return (
    <>
      <Header />

      <main>
      
      </main>
    </>
  );
}
