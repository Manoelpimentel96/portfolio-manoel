import { getTranslations } from "next-intl/server";
import ExperienceItem from "./ExperienceItem";

export default async function ExperienceTimeline() {
  const t = await getTranslations("experience.items");

  const experiences = [
    {
      id: 1,
      key: "technology",
    },
    {
      id: 2,
      key: "cdl",
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Linha central */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-200 md:block" />

      {/* Experiências */}
      <div className="flex flex-col gap-10 md:gap-16">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={experience.id}
            experience={{
              id: experience.id,
              company: t(`${experience.key}.company`),
              role: t(`${experience.key}.role`),
              period: t(`${experience.key}.period`),
              location: t(`${experience.key}.location`),
              description: t(`${experience.key}.description`),
              points: t.raw(`${experience.key}.points`) as string[],
            }}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
