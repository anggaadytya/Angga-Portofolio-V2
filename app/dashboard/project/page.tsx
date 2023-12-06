import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import { METADATA } from "@/constant/metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Project ${METADATA.exTitle}`,
  description: "Project All Showing Page",
  keywords: "portofolio frontend developer",
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboard/project`,
  },
};

export default function page() {
  return (
    <Container>
      <BackButton />
      <h1>PROJECT ALL</h1>
    </Container>
  );
}
