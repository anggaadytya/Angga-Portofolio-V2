import React from "react";
import HomePage from "@/modules/home";

import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";


export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function page() {
  return <HomePage />;
}
