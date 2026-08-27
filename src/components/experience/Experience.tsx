import { Container } from "@/components/layout/Container";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full border-b border-border bg-background py-20 md:py-24"
    >
      <Container>
        <div className="flex w-full flex-col gap-14">
          <ExperienceHeader />

          <ExperienceTimeline />
        </div>
      </Container>
    </section>
  );
}
