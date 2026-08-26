type Experience = {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  points: string[];
};

type ExperienceItemProps = {
  experience: Experience;
  index: number;
};

export default function ExperienceItem({
  experience,
  index,
}: ExperienceItemProps) {
  const isEven = index % 2 === 0;

  return (
    <article
      className={`relative md:grid md:grid-cols-2 ${
        isEven ? "" : "md:[&>*:first-child]:order-2"
      }`}
    >
      <div
        className={`relative pl-10 md:pl-0 ${
          isEven
            ? "md:pr-16 md:text-right"
            : "md:pl-16 md:text-left"
        }`}
      >
        <div
          className={`absolute top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-yellow-400 bg-white ${
            isEven
              ? "left-auto right-[-16px]"
              : "left-[-15px]"
          }`}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
        </div>

        <span className="inline-flex rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-600">
          {experience.period}
        </span>

        <p className="mt-3 text-sm text-gray-500">
          {experience.location}
        </p>
      </div>

      <div
        className={`mt-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all
          duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md md:mt-0 ${
            isEven
              ? "md:ml-16"
              : "md:mr-16 md:col-start-1 md:row-start-1"
          }`}
      >
        <p className="text-sm font-medium text-blue-600">
          {experience.company}
        </p>

        <h3 className="mt-1 text-xl font-bold text-gray-900">
          {experience.role}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600 text-justify">
          {experience.description}
        </p>

        <ul className="mt-5 space-y-2">
          {experience.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm leading-6 text-gray-600 text-justify"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
