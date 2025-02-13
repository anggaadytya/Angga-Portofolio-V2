import type { Metadata } from "next";
import { METADATA } from "@/constant/metadata";
import { Sora } from "next/font/google";
import "./globals.css";
import { Provider } from "@/hooks/Provider";
import { Suspense } from "react";
import Loading from "./loading";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://angga-project.vercel.app/"),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.authors.name,
    url: METADATA.authors.url,
  },
  openGraph: {
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1704298938/metadata/Screenshot_2024-01-03_232042_dkbem2.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1704298938/metadata/Screenshot_2024-01-03_232042_dkbem2.png",
        width: 1200,
        height: 630,
      },
      {
        url: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1704298938/metadata/Screenshot_2024-01-03_232042_dkbem2.png",
        width: 1600,
        height: 900,
      },
    ],
  },
};

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--soraSans-font",
  display: "fallback",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`scrollbar-hide ${sora.className}`}>
        <Provider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Provider>
        <GoogleAnalytics
          measurementId={`${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        />
        <Analytics />
      </body>
    </html>
  );
}
