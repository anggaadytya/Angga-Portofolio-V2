interface AboutProps {
  title: string;
  description: string;
  major: string;
  image: string;
  date: string;
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
    title: "University of Indonesia",
    description: "Bachelor of Science",
    major: "Computer Science",
    image: "/heroImage.svg",
    date: "2015 - 2019",
  },
];
