import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        border
        border-transparent
        px-5
        py-2.5
        text-sm
        font-medium
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

/*import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full border border-transparent px-5
        py-2.5text-s mfont-medium transition-all duration-200 cursor-pointer hover:border-yellow-400
        hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
        focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
  */