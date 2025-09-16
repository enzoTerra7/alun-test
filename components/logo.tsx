import { type ComponentProps } from "react";
import Image from "next/image";
import { cn } from "@/helpers/styles";

type LogoProps = Omit<
  ComponentProps<typeof Image>,
  "src" | "alt" | "width" | "height"
>;

export function LogoMark({ className, ...props }: LogoProps) {
  return (
    <Image
      src="/logo/logomark.svg"
      alt="Logo"
      width={46}
      height={46}
      className={cn("size-6 md:size-10 xl:size-12", className)}
      {...props}
    />
  );
}

export function Logotype(props: Omit<ComponentProps<"h5">, "children">) {
  return (
    <h5
      className="font-chakra-petch text-base md:text-xl xl:text-2xl font-bold text-secondary"
      {...props}
    >
      FERNANDA MASCHETI
    </h5>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      <LogoMark />
      <Logotype />
    </div>
  );
}
