import React from "react";
import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";
import Container from "@/components/Container";
import Consume from "@/modules/consume";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Consume API`,
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboard/consume`,
  },
};

export default function page() {
  return (
    <Container>
      <BackButton url="/dashboard" />
      <Consume />
    </Container>
  );
}
