import React, { lazy } from "react";
import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import { METADATA } from "@/constant/metadata";
import { Metadata } from "next";
const Lazy = lazy(() => import("@/modules/project"));

export const metadata: Metadata = {
  title: `${METADATA.creator}`,
  description: "Showcase Project Muhammad Angga Adytya",
  alternates: {
    canonical: `${process.env.DOMAIN}/project`,
  },
};

export default function page() {
  return (
    <Container>
      <BackButton url="/" />
      <Lazy />
    </Container>
  );
}
