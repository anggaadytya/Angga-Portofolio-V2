const canonicalUrl = "https://angga-project.vercel.app";
const metaImage =
  "https://res.cloudinary.com/ddugt5n5v/image/upload/v1702039342/Screenshot_2023-12-08_194138_cug2if.png";
const metaDescription =
  "Personal website of Angga Adytya and Showcase my projects";

const defaultSEOConfig = {
  defaultTitle: "Angga Adytya - Personal Website",
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: "Angga Adytya - Personal Website",
    description: metaDescription,
    type: "website",
    images: [
      {
        url: metaImage,
        alt: "angga.adytya.com og-image",
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: "angga.adytya.com og-image",
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: "angga.adytya.com og-image",
        width: 1600,
        height: 900,
      },
    ],
    site_name: "angga.adytya.com",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
