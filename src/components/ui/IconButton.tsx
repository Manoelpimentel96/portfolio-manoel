import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label: string;
}

export function IconButton({
  children,
  label,
  className = "",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={`
        inline-flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-transparent
        text-muted-foreground
        transition-all
        duration-200
        cursor-pointer
        hover:border-yellow-400
        hover:text-blue-500
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500
        focus-visible:ring-offset-2
        disabled:pointer-events-none
        disabled:opacity-50
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}