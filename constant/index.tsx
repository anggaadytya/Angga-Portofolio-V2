import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiDiscord,
  SiTwitter,
} from "react-icons/si";

interface SocialLinks {
  title: string;
  icons: JSX.Element;
  href: string;
}

const textColor = "text-neutral-300";

export const SocialLinks: SocialLinks[] = [
  {
    title: "Github",
    icons: <SiGithub className={textColor} />,
    href: "https://github.com/anggaadytya",
  },
  {
    title: "Instagram",
    icons: <SiInstagram className={textColor} />,
    href: "https://www.instagram.com/angga_adytya/",
  },
  {
    title: "Discord",
    icons: <SiDiscord className={textColor} />,
    href: "https://discord.gg/pns2x7w4",
  },
  {
    title: "Linkedin",
    icons: <SiLinkedin className={textColor} />,
    href: "https://www.linkedin.com/in/muhammad-angga-adytya/",
  },
  {
    title: "Twitter",
    icons: <SiTwitter className={textColor} />,
    href: "https://twitter.com/",
  },
];

interface workLinks {
  title: string;
  place: string;
  icons: JSX.Element;
  date: string;
}

export const WorkLinks: workLinks[] = [
  {
    title: "Web Developer Intern",
    place: "PT. Pertamina Hulu Rokan Zona 1 Field Rantau",
    icons: <SiGithub className={textColor} />,
    date: "May - Agust 2022",
  },
  {
    title: "Engineer Intern",
    place: "Logica Kreasi Computer",
    icons: <SiGithub className={textColor} />,
    date: "Jan - May 2018",
  },
];
