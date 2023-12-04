import React from "react";
import HomePage from "@/modules/home";

import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";

// https://github.com/Joscriptt/portfolioo  ini nanti diambil

// TODO: membuat components reusable
// TODO: mendirect setiap link ke halaman yang benar
// TODO: menambahkan children components
// TODO: menambahkan project
// TODO: menambahkan skill
// TODO: menambahkan animasi

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function page() {
  return <HomePage />;
}
