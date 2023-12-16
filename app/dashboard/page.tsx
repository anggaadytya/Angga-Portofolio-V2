import React from "react";
import Dashboard from "@/modules/dashboard";

import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Dashboard`,
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboard`,
  },
};

export default function page() {
  return <Dashboard />;
}
