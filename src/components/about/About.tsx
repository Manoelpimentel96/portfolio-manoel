import { Container } from "@/components/layout/Container";
import { useTranslations } from "next-intl";

import AboutDetails from "./AboutDetails";
import AboutImage from "./AboutImage";

export default function About() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="
        border-b border-border
        bg-background
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <Container>
        <div className="text-center">
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.2em]
              text-blue-600
              dark:text-yellow-400
            "
          >
            {t("label")}
          </p>
        </div>

        <div
          className="
            mt-12
            grid
            items-center
            gap-12
            lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)]
            lg:gap-16
            xl:gap-24
          "
        >
          <AboutImage />

          <AboutDetails />
        </div>
      </Container>
    </section>
  );
}
