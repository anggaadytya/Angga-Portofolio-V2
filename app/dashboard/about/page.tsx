import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import { METADATA } from "@/constant/metadata";
import About from "@/modules/about";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Dashboard`,
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboard/about`,
  },
};

export default function page() {
  return (
    <Container>
      <BackButton url="/dashboard" />
      <About />
    </Container>
  );
}
