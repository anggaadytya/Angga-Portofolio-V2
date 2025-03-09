import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import { METADATA } from "@/constant/metadata";
import About from "@/modules/about";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

export default function page() {
  return (
    <Container>
      <BackButton url="/" />
      <About />
    </Container>
  );
}
