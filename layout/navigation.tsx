"use client";

import { navigationConfig } from "./navigation.config";
import { NavigationItem } from "./navigation.item";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  function isCurrent(href: string) {
    return pathname === href;
  }

  return (
    <nav>
      <ul className="flex items-center gap-4 md:gap-8">
        {navigationConfig.map((item) => (
          <NavigationItem
            key={item.href}
            href={item.href}
            isCurrent={isCurrent(item.href)}
          >
            {item.label}
          </NavigationItem>
        ))}
      </ul>
    </nav>
  );
}
