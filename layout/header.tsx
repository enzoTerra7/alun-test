import { Logo } from "@/components/logo";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-transparent">
      <Logo />
      <div className="flex items-center gap-x-12">
        <Navigation />
      </div>
    </header>
  );
}
