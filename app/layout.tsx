import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angga | Project",
  description: "My personal website, showing my projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#171717]">{children}</body>
    </html>
  );
}
