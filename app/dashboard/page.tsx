import React from "react";
import Dashboard from "@/modules/dashboard";

import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Dashboard`,
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboard`,
  },
};

export default function page() {
  return (
    <Container>
      <Dashboard />
    </Container>
  );
}
