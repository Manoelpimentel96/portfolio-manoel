import { MapPin } from "lucide-react";

import AvailabilityBadge from "./AvailabilityBadge";

type HeroInfoProps = {
  location: string;
  availability: string;
};

export default function HeroInfo({
  location,
  availability,
}: HeroInfoProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <MapPin
          aria-hidden="true"
          className="h-5 w-5 text-muted-foreground"
        />

        <span className="text-sm text-muted-foreground">
          {location}
        </span>
      </div>

      <AvailabilityBadge label={availability} />
    </div>
  );
}

