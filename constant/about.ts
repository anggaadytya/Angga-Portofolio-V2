interface AboutProps {
  title: string;
  description: string;
  major?: string;
  image: string;
  date?: string;
}

export const ABOUT: AboutProps[] = [
  {
    title: "Polytechnic State Lhokseumawe",
    description: "Vocational College",
    major: "Informatics Engineering",
    image: "/heroImage.svg",
    date: "2019 - 2023",
  },
  {
    title: "SMK Negeri 1 Bendahara",
    description: "Vocational High School",
    major: "Engineering",
    image: "/heroImage.svg",
    date: "2016 - 2019",
  },
];

export const CERTIF: AboutProps[] = [
  {
    image: "/heroImage.svg",
    title: "Belajar Membuat Aplikasi Web dengan React",
    description: "Dicoding Indonesia",
  },
  {
    image: "/heroImage.svg",
    title: "Belajar Membuat Front-End Web untuk Pemula",
    description: "Dicoding Indonesia",
  },
  {
    image: "/heroImage.svg",
    title: "Belajar Dasar Pemograman Web",
    description: "Dicoding Indonesia",
  },
  {
    image: "/heroImage.svg",
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    description: "Dicoding Indonesia",
  },
  {
    image: "",
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    description: "Dicoding Indonesia",
  },
  {
    image: "",
    title: "Belajar Dasar Pemograman JavaScript",
    description: "Dicoding Indonesia",
  },
  {
    image: "",
    title: "Memulai Pemograman Dengan Java",
    description: "Dicoding Indonesia",
  },
  {
    image: "",
    title: "Memulai Pemograman Dengan C",
    description: "Dicoding Indonesia",
  },
  {
    image: "",
    title: "Network Administrator",
    description: "BNSP",
  },
];
