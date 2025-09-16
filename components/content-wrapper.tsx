import { cn } from "@/helpers/styles";
import { type ComponentProps } from "react";

export function ContentWrapper({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("max-w-7xl mx-auto", className)}
      {...props}
    />
  );
}
