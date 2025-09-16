import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";

export const buttonVariants = cva(
  "rounded-sm h-10 text-base font-bold inline-flex gap-x-2 px-3 py-2 items-center justify-center transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-button-disabled disabled:border-button-disabled",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-button-disabled border border-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 disabled:bg-button-disabled border border-secondary",
        outline:
          "bg-background text-primary hover:bg-primary/10 border border-primary",
        pagination:
          "bg-button-disabled text-white disabled:bg-secondary disabled:text-secondary-foreground",
      },
    },
  }
);

export function Button({
  className,
  variant,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button className={buttonVariants({ variant, className })} {...props} />
  );
}
