import { Logo } from "@/components/logo";
import { Navigation } from "./navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-transparent">
      <Logo />
      <div className="flex items-center gap-x-6 lg:gap-x-12">
        <Navigation />
        <ThemeToggle />
      </div>
    </header>
  );
}
