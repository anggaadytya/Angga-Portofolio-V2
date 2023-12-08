interface MusicProps {
  id: number;
  title: string;
  artist: string;
  image: string;
  sound: string;
}

export const MUSIC: MusicProps[] = [
  {
    id: 1,
    title: "Pulang",
    artist: "For Revenge",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1701778287/pulang_rhurl0.jpg",
    sound:
      "https://res.cloudinary.com/ddugt5n5v/video/upload/v1702000656/jiwaYangBersedih_dqeek9.mp3",
  },
  {
    id: 2,
    title: "Serana",
    artist: "For Revenge",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1701778286/serana_fhvqjr.jpg",
    sound:
      "https://res.cloudinary.com/ddugt5n5v/video/upload/v1702000647/selamatUlangTahun_fc6m2z.mp3",
  },
  {
    id: 3,
    title: "Jakarta Hari Ini",
    artist: "For Revenge",
    image:
      "https://res.cloudinary.com/ddugt5n5v/image/upload/v1701778285/jakartaHariIni_tvyt1j.jpg",
    sound:
      "https://res.cloudinary.com/ddugt5n5v/video/upload/v1702000647/selamatUlangTahun_fc6m2z.mp3",
  },
];
