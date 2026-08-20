import { Link } from "@/i18n/navigation";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Página inicial"
      className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
    >
      <span className="text-blue-600 dark:text-yellow-400">
        &lt;M
      </span>
      <span className="text-yellow-500 dark:text-blue-500">
        P 
      </span>
      <span className="text-foreground">
         /&gt;
      </span>
    </Link>
  );
}
