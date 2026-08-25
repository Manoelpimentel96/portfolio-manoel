import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
      <div
        aria-hidden="true"
        className=" absolute -right-3 -bottom-3 h-full w-full
          rounded-3xl border border-blue-500/30 bg-blue-500/5
          dark:border-yellow-400/30 dark:bg-yellow-400/5
        "
      />
      <div
        className="
          relative aspect-square overflow-hidden rounded-3xl border
          border-border bg-muted shadow-2xl
        "
      >
        <Image
          src="/images/profile.jpeg"
          alt="Foto de Manoel Pimentel"
          fill
          priority
          sizes=" (max-width: 640px) 80vw, (max-width: 1024px) 40vw, 420px
          "
          className=" object-cover transition-transform duration-500 hover:scale-105
          "
        />
      </div>
    </div>
  );
}
