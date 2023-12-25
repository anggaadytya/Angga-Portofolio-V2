interface AboutProps {
  title: string;
  description: string;
  major?: string;
  image?: string;
  date?: string;
}

export const ABOUT: AboutProps[] = [
  {
    title: "Polytechnic State Lhokseumawe",
    description: "Vocational College",
    major: "Informatics Engineering",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1703404129/about/education/pnl-removebg-preview_1_ctmqzq.png",
    date: "2019 - 2023",
  },
  {
    title: "SMK Negeri 1 Bendahara",
    description: "Vocational High School",
    major: "Engineering",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1703403795/about/education/smkn1-removebg-preview_ejr7ij.png",
    date: "2016 - 2019",
  },
];

export const CERTIF: AboutProps[] = [
  {
    image: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1703403479/about/certificate/certifReact_zmgqwq.png",
    title: "Belajar Membuat Aplikasi Web dengan React",
    description: "Dicoding Indonesia",
  },
  {
    image: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1703403481/about/certificate/certifFrontEnd_moalom.png",
    title: "Belajar Membuat Front-End Web untuk Pemula",
    description: "Dicoding Indonesia",
  },
  {
    image: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1703403477/about/certificate/certifDasarWeb_m6agkx.png",
    title: "Belajar Dasar Pemograman Web",
    description: "Dicoding Indonesia",
  },
  {
    image: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1703403477/about/certificate/certifBackEnd_gwa6uk.png",
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    description: "Dicoding Indonesia",
  },
  {
    image: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1703403478/about/certificate/certifCloud_yarrzs.png",
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    description: "Dicoding Indonesia",
  },
  {
    image: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1703403478/about/certificate/certifJavascript_khchga.png",
    title: "Belajar Dasar Pemograman JavaScript",
    description: "Dicoding Indonesia",
  },
  {
    image: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1703403478/about/certificate/certifJava_pro4qo.png",
    title: "Memulai Pemograman Dengan Java",
    description: "Dicoding Indonesia",
  },
  {
    image: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1703403474/about/certificate/certifC_ezkvkr.png",
    title: "Memulai Pemograman Dengan C",
    description: "Dicoding Indonesia",
  },
  {
    image: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1703403483/about/certificate/certifNetwork_mqhfrc.png",
    title: "Network Administrator",
    description: "BNSP",
  },
];
