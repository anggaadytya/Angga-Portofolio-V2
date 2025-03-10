import type { Metadata } from "next";
import { METADATA } from "@/constant/metadata";
import { Sora } from "next/font/google";
import "./globals.css";
import { Provider } from "@/hooks/Provider";
import { Suspense } from "react";
import Loading from "./loading";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import NextAuthProvider from "@/libs/nextAuth";
import LeftPage from "@/modules/dashboard/layouts/LeftPage";
import RightPage from "@/modules/dashboard/layouts/RightPage";
import Script from "next/script";
import AnalyticsG from "@/components/Analytics";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-NM368W55`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-NM368W55', { 
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <meta
          name="google-site-verification"
          content="FuhGMdxQ9lcHyhn5vouXd95_MY2W8I0uRLREm3gYPL8"
        />
      </head>
      <body className={`scrollbar-hide ${sora.className}`}>
        <Provider>
          <div className="max-w-[78rem] mx-auto">
            <div className="gap-3 flex md:mt-5 flex-col md:flex-row justify-center">
              <LeftPage />
              <NextAuthProvider>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </NextAuthProvider>
              <RightPage />
            </div>
          </div>
        </Provider>
        <GoogleAnalytics
          measurementId={`${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        />
        <AnalyticsG />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
