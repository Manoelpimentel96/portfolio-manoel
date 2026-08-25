type AvailabilityBadgeProps = {
  label: string;
};

export default function AvailabilityBadge({
  label,
}: AvailabilityBadgeProps) {
  return (
    <div className="inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className="h-2.5 w-2.5 rounded-full bg-emerald-500"
      />

      <span className="text-sm text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
