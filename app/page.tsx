import React from "react";
import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";
import Container from "@/components/Container";
import Dashboard from "@/modules/dashboard";

export const metadata: Metadata = {
  title: `${METADATA.creator}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function page() {
  return (
    <Container>
      <Dashboard />
    </Container>
  );
}
