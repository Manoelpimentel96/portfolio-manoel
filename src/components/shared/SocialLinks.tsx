import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { siteConfig } from "@/config/site";

const socialLinks = [
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: siteConfig.links.email,
    icon: FiMail,
  },
  {
    name: "WhatsApp",
    href: siteConfig.links.whatsapp,
    icon: FaWhatsapp,
  },
] as const;

export default function SocialLinks() {
  return (
    <nav
      aria-label="Redes sociais"
      className="mt-8 flex items-center gap-3"
    >
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.href}
            target={
              social.name === "Email"
                ? undefined
                : "_blank"
            }
            rel={
              social.name === "Email"
                ? undefined
                : "noopener noreferrer"
            }
            aria-label={social.name}
            className="flex h-10 w-10 items-center justify-center rounded-full border
              border-border text-muted-foreground transition-all duration-200
              hover:border-yellow-400 hover:text-blue-500 hover:-translate-y-0.5 focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:border-yellow-400
              dark:hover:text-yellow-400
            "
          >
            <Icon
              className="h-5 w-5"
              aria-hidden="true"
            />
          </a>
        );
      })}
    </nav>
  );
}
