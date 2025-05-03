import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import { METADATA } from "@/constant/metadata";
import Contributors from "@/modules/contributors";
import { getGithubData } from "@/services/github";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/consume`,
  },
};

export default async function ContributorPage() {
  const githubData = await getGithubData();
  return (
    <Container>
      <BackButton url="/" />
      <Contributors githubData={githubData} />
    </Container>
  );
}
