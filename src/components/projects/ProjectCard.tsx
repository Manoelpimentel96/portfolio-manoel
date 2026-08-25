import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ProjectTags from "./ProjectTags";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  inProgress?: boolean;
  inProgressTitle: string;
  inProgressDescription: string;
  openProjectLabel: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
  inProgress = false,
  inProgressTitle,
  inProgressDescription,
  openProjectLabel,
}: ProjectCardProps) {
  const imageContent = (
    <div
      className="
        relative
        aspect-[16/9]
        overflow-hidden
        bg-muted
      "
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="
          (max-width: 1024px) 88vw,
          25vw
        "
        className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/40
          via-transparent
          to-transparent
        "
        aria-hidden="true"
      />

      {inProgress && (
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-black/60
            p-6
            text-center
            backdrop-blur-[2px]
            lg:opacity-0
            lg:transition-opacity
            lg:duration-300
            lg:group-hover:opacity-100
          "
        >
          <div>
            <p
              className="
                text-sm
                font-semibold
                text-white
                sm:text-base
              "
            >
              {inProgressTitle}
            </p>

            <p
              className="
                mt-1
                text-xs
                text-white/80
                sm:text-sm
              "
            >
              {inProgressDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  );

  const content = (
    <div
      className="
        flex
        min-h-[190px]
        flex-col
        p-5
        text-center
        sm:min-h-[205px]
        sm:p-6
        lg:text-left
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          gap-3
        "
      >
        <h3
          className="
            min-w-0
            text-base
            font-semibold
            tracking-tight
            text-foreground
            sm:text-lg
          "
        >
          {title}
        </h3>

        {!inProgress && (
          <span
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-border
              text-muted-foreground
              transition-all
              duration-200
              hover:border-yellow-400
              hover:text-blue-600
              dark:hover:text-yellow-400
            "
          >
            <ArrowUpRight
              aria-hidden="true"
              className="
                h-4
                w-4
                transition-transform
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </span>
        )}
      </div>

      <p
        className="
          mt-4
          text-sm
          leading-6
          text-muted-foreground
        "
      >
        {description}
      </p>

      <div className="mt-auto pt-5">
        <ProjectTags tags={tags} />
      </div>
    </div>
  );

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-background
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
        hover:shadow-xl
        dark:hover:border-yellow-400/40
      "
    >
      {inProgress ? (
        <>
          {imageContent}
          {content}
        </>
      ) : (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${openProjectLabel}: ${title}`}
          className="block h-full"
        >
          {imageContent}
          {content}
        </Link>
      )}
    </article>
  );
}
