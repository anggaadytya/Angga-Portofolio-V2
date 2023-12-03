import MainContent from "@/components/layouts/MainContent";
import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";
import React from "react";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Dashboard`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function page() {
  return <MainContent />;
}
