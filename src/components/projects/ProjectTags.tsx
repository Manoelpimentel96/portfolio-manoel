type ProjectTagsProps = {
  tags: string[];
};

export default function ProjectTags({
  tags,
}: ProjectTagsProps) {
  return (
    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-2
        lg:justify-start
      "
    >
      {tags.map((tag, index) => (
        <span
          key={`${tag}-${index}`}
          className="
            rounded-full
            border
            border-border
            bg-muted/40
            px-2.5
            py-1
            text-xs
            font-medium
            text-muted-foreground
            transition-colors
            hover:border-blue-500/50
            hover:text-blue-600
            dark:hover:border-yellow-400/50
            dark:hover:text-yellow-400
          "
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
