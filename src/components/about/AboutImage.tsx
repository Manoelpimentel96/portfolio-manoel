import Image from "next/image";

import ImageFrame from "@/components/ui/ImageFrame";

export default function AboutImage() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <ImageFrame>
        <div className="relative aspect-[4/5]">
          <Image
            src="/images/AboutImage.jpeg"
            alt="Foto de Manoel Pimentel"
            fill
            sizes="
              (max-width: 640px) 85vw,
              (max-width: 1024px) 45vw,
              420px
            "
            className="
              object-cover
              object-center
              transition-transform
              duration-700
              hover:scale-[1.03]
            "
          />
        </div>
      </ImageFrame>
    </div>
  );
}
