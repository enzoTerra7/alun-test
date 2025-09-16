import { cn } from "@/helpers/styles";
import { type ComponentProps } from "react";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "rounded-sm h-10 text-base placeholder:text-foreground font-normal text-secondary px-3.5 py-2 border border-primary focus:ring-1 focus:ring-primary/50 disabled:border-button-disabled disabled:bg-button-disabled/25 disabled:cursor-not-allowed focus:outline-none",
        className
      )}
      {...props}
    />
  );
}
