import {
  GithubIcon,
  LinkedinIcon,
  type LucideIcon,
  MailIcon,
} from "lucide-react";

const FOOTER_CONTACT_ITEMS = [
  {
    Icon: MailIcon,
    label: "fernandamascheti@gmail.com",
    url: "mailto:fernandamascheti@gmail.com",
    ariaLabel: "Ícone de um envelope representando um email",
  },
  {
    Icon: LinkedinIcon,
    label: "Fernanda Mascheti",
    url: "https://www.linkedin.com/in/fernandamascheti/",
    ariaLabel: "Ícone de um linkedin representando um perfil de linkedin",
  },
  {
    Icon: GithubIcon,
    label: "fernandamascheti",
    url: "https://github.com/enzoTerra7",
    ariaLabel: "Ícone de um github representando um perfil de github",
  },
];

export function HomePageFooter() {
  return (
    <div className="grid grid-cols-3 gap-x-8">
      <div className="flex flex-col col-span-2 w-fit gap-y-3">
        <p className="text-primary text-base font-chakra-petch font-bold">
          Vamos conversar?
        </p>
        <p className="text-secondary text-6xl font-chakra-petch font-bold">
          Entre em contato
        </p>
      </div>
      <ul className="flex flex-col gap-y-3">
        {FOOTER_CONTACT_ITEMS.map((item) => (
          <FooterContactItem key={item.label} {...item} />
        ))}
      </ul>
    </div>
  );
}

function FooterContactItem({
  Icon,
  label,
  url,
  ariaLabel,
}: {
  Icon: LucideIcon;
  label: string;
  url: string;
  ariaLabel: string;
}) {
  return (
    <li className="flex items-center gap-x-2">
      <Icon className="size-6 text-primary" aria-label={ariaLabel} />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground text-base font-normal underline"
      >
        {label}
      </a>
    </li>
  );
}
