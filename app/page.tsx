import React from "react";
import HomePage from "@/modules/home";

import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";

// https://github.com/Joscriptt/portfolioo  ini nanti diambil

// TODO: membuat components reusable
// TODO: menambahkan project
// TODO: menambahkan skill
// TODO: menambahkan animasi
// TODO: marquee animasi fix

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function page() {
  return <HomePage />;
}
