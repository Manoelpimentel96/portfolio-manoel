import { getTranslations } from "next-intl/server";

import { Container } from "@/components/layout/Container";
import { projects as projectConfig } from "@/config/projects";

import ProjectsGrid from "./ProjectsGrid";

export default async function Projects() {
  const t = await getTranslations("Projects");

  const projects = projectConfig.map((project) => ({
    ...project,
    title: t(`${project.id}.title`),
    description: t(`${project.id}.description`),
    tags: t(`${project.id}.tags`).split("|"),
  }));

  return (
    <section
      id="Projects"
      className="
        border-b
        border-border
        bg-background
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <Container>
        {/* Cabeçalho da seção */}
        <div
          className="
            mb-10
            max-w-2xl
            text-center
            text-gray-600
            sm:mb-12
            lg:mb-14
            lg:text-left
          "
        >
          <p
            className="
              mb-2
              text-sm
              font-medium
              tracking-wide
              text-blue-600
              dark:text-yellow-400
            "
          >
            {t("eyebrow")}
          </p>

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-foreground
              sm:text-4xl
              lg:text-5xl
            "
          >
            {t("title")}
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-6
              text-muted-foreground
              sm:text-base
              lg:mx-0
            "
          >
            {t("description")}
          </p>
        </div>

        {/* Projetos */}
        <ProjectsGrid
          projects={projects}
          inProgressTitle={t("inProgressTitle")}
          inProgressDescription={t("inProgressDescription")}
          openProjectLabel={t("openProject")}
        />
      </Container>
    </section>
  );
}
