import { cn } from "@/helpers/styles";
import {
  GithubIcon,
  LinkedinIcon,
  type LucideIcon,
  MailIcon,
} from "lucide-react";

const FOOTER_CONTACT_ITEMS = [
  {
    Icon: MailIcon,
    children: "fernandamascheti@gmail.com",
    ariaLabel: "Ícone de um envelope representando um email",
  },
  {
    Icon: LinkedinIcon,
    children: (
      <a
        href="https://www.linkedin.com/in/fernandamascheti/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        /Fernanda Mascheti
      </a>
    ),
    ariaLabel: "Ícone de um linkedin representando um perfil de linkedin",
  },
  {
    Icon: GithubIcon,
    children: (
      <a
        href="https://github.com/enzoTerra7"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        /Fernanda Mascheti
      </a>
    ),
    ariaLabel: "Ícone de um github representando um perfil de github",
  },
];

export function HomePageFooter() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mt-12 mb-8 md:mt-32 md:mb-16">
      <div className="flex flex-col lg:col-span-2 w-fit md:gap-y-3">
        <p className="text-primary text-xs md:text-base font-chakra-petch font-bold">
          Vamos conversar?
        </p>
        <p className="text-secondary text-2xl md:text-4xl xl:text-6xl font-chakra-petch font-bold">
          Entre em contato
        </p>
      </div>
      <ul className="flex flex-col gap-y-3">
        {FOOTER_CONTACT_ITEMS.map((item, index) => (
          <FooterContactItem key={`${item.children}-${index}`} {...item} />
        ))}
      </ul>
    </div>
  );
}

function FooterContactItem({
  Icon,
  ariaLabel,
  children,
  className,
}: {
  Icon: LucideIcon;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li className="flex items-center gap-x-2">
      <Icon className="size-6 text-primary" aria-label={ariaLabel} />
      <p
        className={cn(
          "text-foreground text-xs md:text-base font-normal",
          className
        )}
      >
        {children}
      </p>
    </li>
  );
}
