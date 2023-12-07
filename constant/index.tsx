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

export const SocialLinks: SocialLinks[] = [
  {
    title: "Github",
    icons: <SiGithub />,
    href: "https://github.com/anggaadytya",
  },
  {
    title: "Instagram",
    icons: <SiInstagram />,
    href: "https://www.instagram.com/angga_adytya/",
  },
  {
    title: "Discord",
    icons: <SiDiscord />,
    href: "https://discord.gg/pns2x7w4",
  },
  {
    title: "Linkedin",
    icons: <SiLinkedin />,
    href: "https://www.linkedin.com/in/muhammad-angga-adytya/",
  },
  {
    title: "Twitter",
    icons: <SiTwitter />,
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
    icons: <SiGithub />,
    date: "May - Agust 2022",
  },
  {
    title: "Engineer Intern",
    place: "Logica Kreasi Computer",
    icons: <SiGithub />,
    date: "Jan - May 2018",
  },
];
