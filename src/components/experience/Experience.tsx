import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";
export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-4 py-20 md:px-6 md:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        <ExperienceHeader />
        <ExperienceTimeline />
      </div>
    </section>
  );

}
