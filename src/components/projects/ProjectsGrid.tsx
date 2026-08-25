import ProjectCard from "./ProjectCard";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  inProgress: boolean;
};

type ProjectsGridProps = {
  projects: Project[];
  inProgressTitle: string;
  inProgressDescription: string;
  openProjectLabel: string;
};

export default function ProjectsGrid({
  projects,
  inProgressTitle,
  inProgressDescription,
  openProjectLabel,
}: ProjectsGridProps) {
  return (
    <div
      className="
        -mx-4
        flex
        snap-x
        snap-mandatory
        gap-4
        overflow-x-auto
        px-4
        pb-4
        sm:-mx-6
        sm:px-6
        lg:mx-0
        lg:grid
        lg:grid-cols-4
        lg:gap-5
        lg:overflow-visible
        lg:px-0
        lg:pb-0
      "
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className="
            w-[88%]
            shrink-0
            snap-center
            sm:w-[70%]
            lg:w-auto
            lg:shrink
          "
        >
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            tags={project.tags}
            inProgress={project.inProgress}
            inProgressTitle={inProgressTitle}
            inProgressDescription={inProgressDescription}
            openProjectLabel={openProjectLabel}
          />
        </div>
      ))}
    </div>
  );
}
