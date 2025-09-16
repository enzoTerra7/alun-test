import { cn } from "@/helpers/styles";
import Link from "next/link";

export function NavigationItem({
  href,
  children,
  isCurrent,
}: {
  href: string;
  children: React.ReactNode;
  isCurrent: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "font-chakra-petch text-lg md:text-2xl font-bold",
          isCurrent ? "text-primary pointer-events-none" : "text-secondary"
        )}
      >
        {children}
      </Link>
    </li>
  );
}
