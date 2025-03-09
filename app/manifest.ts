import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhammad Angga Adytya",
    short_name: "Muhammad Angga Adytya",
    description: "Personal website of Angga Adytya and Showcase my projects",
    keywords: [
      "Muhammad Angga Adytya",
      "Dashboard",
      "Muhammad angga adytya",
      "Personal Website",
    ],
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
