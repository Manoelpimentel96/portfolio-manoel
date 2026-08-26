"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useSyncExternalStore } from "react";

import { Link } from "@/i18n/navigation";

export default function Logo() {
  const { theme, resolvedTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => { },
    () => true,
    () => false,
  );

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!mounted) {
    return (
      <div
        className="relative h-10 w-[120px]"
        aria-hidden="true"
      />
    );
  }

  const currentTheme =
    theme === "system" ? resolvedTheme : theme;

  const logoSrc =
    currentTheme === "dark"
      ? "/logo/logo-dark.png"
      : "/logo/logo-light.png";

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label="Voltar ao topo"
      className="relative block h-[70px] w-[150px] cursor-pointer transition-opacity duration-200 hover:opacity-80"
    >
      <Image
        src={logoSrc}
        alt="Logo MP"
        fill
        priority
        sizes="150px"
        className="object-contain"
      />
    </Link>
  );
}
