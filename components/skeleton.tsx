import { cn } from "@/helpers/styles";

export function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-foreground/25 animate-pulse rounded-md", className)}
      {...props}
    />
  );
}
