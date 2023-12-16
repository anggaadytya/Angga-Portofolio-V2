import React from "react";
import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";
import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import Sharing from "@/modules/sharing";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Sharing Session`,
  alternates: {
    canonical: `${process.env.DOMAIN}/sharing`,
  },
};

export default function page() {
  return (
    <Container>
      <BackButton />
      <Sharing />
    </Container>
  );
}
