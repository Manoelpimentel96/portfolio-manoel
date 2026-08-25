import { ReactNode } from "react";

interface ImageFrameProps {
    children: ReactNode;
    className?: string;
}

export default function ImageFrame({
    children,
    className = "",
}: ImageFrameProps) {
    return (
        <div className={`relative w-full ${className}`}>
            <div
                aria-hidden="true"
                className="
          absolute
          inset-3
          translate-x-3
          translate-y-3
          rounded-[2rem]
          border
          border-border/60
          bg-muted/30
        "
            />

            <div
                className="
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-border
          bg-muted
          shadow-xl
        "
            >
                {children}
            </div>
        </div>
    );
}