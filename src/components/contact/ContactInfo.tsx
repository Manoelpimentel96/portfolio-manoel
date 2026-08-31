import { Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import SocialLinks from "@/components/shared/SocialLinks";
import { siteConfig } from "@/config/site";

export default function ContactInfo() {
  const t = useTranslations("contact");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50">
            <MapPin
              className="size-5 text-primary"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">
              {t("location")}
            </span>

            <p className="text-base text-foreground">
              {siteConfig.contact.location}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/50">
            <Mail
              className="size-5 text-primary"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">
              {t("email")}
            </span>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-base text-foreground transition-colors hover:text-primary"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-sm font-medium text-muted-foreground">
          {t("socials")}
        </span>

        <SocialLinks />
      </div>
    </div>
  );
}