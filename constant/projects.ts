interface ProjectProps {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  link_demo?: string | null;
  link_github?: string | null;
  techs: string[];
  is_show: boolean;
}

export const PROJECTS: ProjectProps[] = [
  {
    id: 1,
    title: "Angga Portfolio v2",
    slug: "angga-portofolio-v2",
    description: "My personal portfolio website v2",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1702039342/Screenshot_2023-12-08_194138_cug2if.png",
    link_demo: "https://angga-project.vercel.app/",
    link_github: "https://github.com/anggaadytya/Angga-Project",
    techs: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript", "Vercel"],
    is_show: true,
  },
  {
    id: 2,
    title: "Angga Portfolio",
    slug: "angga-portofolio-v1",
    description: "My personal portfolio website v1",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1701778544/AnggaPorto1_nsbigz.svg",
    link_demo: "https://angga-adytya.vercel.app/",
    link_github: "https://github.com/anggaadytya/Angga-PortofolioV1",
    techs: [
      "JavaScript",
      "TailwindCSS",
      "Material UI",
      "Framer Motion",
      "Vite",
      "Vercel",
    ],
    is_show: true,
  },
  {
    id: 3,
    title: "Sispar Cabai",
    slug: "sispar-cabai",
    description:
      "Sistem Pakar Deteksi Hama dan Penyakit Tanaman Cabai menggunakan metode case based reasoning",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1701778549/SisparCabai1_papj9c.svg",
    link_demo: "https://sispar-cabai.vercel.app/",
    link_github: "https://github.com/anggaadytya/SISPAR-CABAI",
    techs: [
      "MySql",
      "Express.js",
      "React.js",
      "Node JS",
      "JavaScript",
      "Material UI",
      "Vercel",
    ],
    is_show: true,
  },
  {
    id: 4,
    title: "Car Hub ShowRoom",
    slug: "car-hub",
    description: "My personal car portofolio website",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1701778544/CarsLanding1_ubuuze.svg",
    link_demo: "https://landing-page-rust-ten.vercel.app/",
    link_github: "https://github.com/anggaadytya/Cars-Landing-Page",
    techs: ["TypeScript", "TailwindCSS", "SASS", "Next.js", "Vercel"],
    is_show: false,
  },
  {
    id: 5,
    title: "Kas Apps ",
    slug: "kas-apps",
    description: "Kas Apps Manage your expenses and income with the website ",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1701778542/kassApps_vuhymd.svg",
    link_demo: "https://kas-apps.vercel.app/",
    link_github: "https://github.com/anggaadytya/kasApps",
    techs: ["JavaScript", "Vite", "TailwindCSS", "Vercel"],
    is_show: false,
  },
  {
    id: 6,
    title: "Notes Apps",
    slug: "notes-apps",
    description: "manage your notes with this apps",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1701778543/notesApps_l8wye0.svg",
    link_demo: "https://notes-apps-omega.vercel.app/",
    link_github: "https://github.com/anggaadytya/Submission-React-Notes-Apps",
    techs: ["JavaScript", "Vite", "TailwindCSS", "Vercel"],
    is_show: false,
  },
  {
    id: 7,
    title: "Games Dashboard",
    slug: "games-dashboard",
    description: "All Games for your favorite games",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1701778560/gamesDashboard_bqkh8m.svg",
    link_demo: "https://films-dashboard.vercel.app/",
    link_github: "https://github.com/anggaadytya/GamesDashboard",
    techs: ["JavaScript", "Vite", "TailwindCSS", "Vercel"],
    is_show: false,
  },
];
