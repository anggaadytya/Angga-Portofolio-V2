interface ProjectProps {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  link_demo?: string | null;
  link_github?: string | null;
  techs: string[];
}

export const PROJECTS: ProjectProps[] = [
  {
    id: 1,
    title: "Car Hub ShowRoom",
    slug: "car-hub",
    description: "My personal car portofolio website",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1701778544/CarsLanding1_ubuuze.svg",
    link_demo: "",
    link_github: "",
    techs: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
  },
  {
    id: 2,
    title: "Angga Portfolio",
    slug: "angga-portofolio-v1",
    description: "My personal portfolio website v1",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1701778544/AnggaPorto1_nsbigz.svg",
    link_demo: "",
    link_github: "",
    techs: ["Vite.Js", "TailwindCSS", "JavaScript", "Vercel", "Material UI"],
  },
  {
    id: 3,
    title: "Sispar Cabai",
    slug: "sispar-cabai",
    description: "Sispar cabai by React",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1701778549/SisparCabai1_papj9c.svg",
    link_demo: "",
    link_github: "",
    techs: ["Vite.Js", "TailwindCSS", "JavaScript", "Vercel", "Material UI"],
  },
];
