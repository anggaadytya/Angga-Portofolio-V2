import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiDiscord,
  SiTwitter,
} from "react-icons/si";
import { PiHouseLight } from "react-icons/pi";
import {
  FiBox,
  FiCpu,
  FiDatabase,
  FiGrid,
  FiMessageCircle,
} from "react-icons/fi";
import { GrAnalytics } from "react-icons/gr";

interface SocialLinks {
  toLowerCase(): unknown;
  title: string;
  icons: JSX.Element;
  href: string;
  menu: string;
  feature?: boolean;
  externalLink?: boolean;
}

export const SocialLinks: SocialLinks[] = [
  {
    toLowerCase() {
      return "";
    },
    title: "Github",
    icons: <SiGithub />,
    href: "https://github.com/anggaadytya",
    menu: "Link",
  },
  {
    toLowerCase() {
      return "";
    },
    title: "Instagram",
    icons: <SiInstagram />,
    href: "https://www.instagram.com/angga_adytya/",
    menu: "Link",
  },
  {
    toLowerCase() {
      return "";
    },
    title: "Discord",
    icons: <SiDiscord />,
    href: "https://discord.gg/pns2x7w4",
    menu: "Link",
  },
  {
    toLowerCase() {
      return "";
    },
    title: "Linkedin",
    icons: <SiLinkedin />,
    href: "https://www.linkedin.com/in/muhammad-angga-adytya/",
    menu: "Link",
  },
  {
    toLowerCase() {
      return "";
    },
    title: "Twitter",
    icons: <SiTwitter />,
    href: "https://twitter.com/",
    menu: "Link",
  },
];

export const MenuLinks: SocialLinks[] = [
  {
    toLowerCase() {
      return "";
    },
    title: "Home",
    icons: <PiHouseLight />,
    href: "/",
    menu: "Pages",
  },
  {
    toLowerCase() {
      return "";
    },
    title: "Dashboard",
    icons: <FiGrid />,
    href: "/dashboard",
    menu: "Pages",
  },
  {
    toLowerCase() {
      return "";
    },
    title: "About",
    icons: <FiBox />,
    href: "/dashboard/about",
    menu: "Pages",
    feature: true,
  },
  {
    toLowerCase() {
      return "";
    },
    title: "Project",
    icons: <FiCpu />,
    href: "/dashboard/project",
    menu: "Pages",
  },
  {
    toLowerCase() {
      return "";
    },
    title: "Sharing",
    icons: <FiMessageCircle />,
    href: "/dashboard/sharing",
    menu: "Pages",
    feature: true,
  },
];

export const AnalyticsLink: SocialLinks[] = [
  {
    toLowerCase() {
      return "";
    },
    title: "Google Analytics",
    icons: <GrAnalytics />,
    href: "https://analytics.google.com/analytics/web/#/p415378193/reports/intelligenthome",
    menu: "Links",
    externalLink: true,
  },
  {
    toLowerCase() {
      return "";
    },
    title: "PageSpeed Insights",
    icons: <FiDatabase />,
    href: "https://github.com/anggaadytya",
    menu: "Links",
    externalLink: true,
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
