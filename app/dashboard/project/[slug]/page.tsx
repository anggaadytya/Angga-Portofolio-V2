import React from "react";
import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import { PROJECTS } from "@/constant/projects";

import { METADATA } from "@/constant/metadata";

import ProjectDetail from "@/modules/project/components/ProjectDetail";

interface projectProps {
  params: { slug: string };
}

export function generateMetadata({ params }: projectProps) {
  const filter = PROJECTS.filter((project) => project.slug === params.slug);
  return {
    title: filter[0].title,
    description: filter[0].description,
    openGraph: {
      images: filter[0].image,
      url: `${METADATA.openGraph.url}/dashboard/project/${filter[0].slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: "article",
      authors: METADATA.creator,
    },
    keywords: filter[0].title,
    alternates: {
      canonical: `${process.env.DOMAIN}/dashboard/project/${filter[0].slug}`,
    },
  };
}

export default function Page({ params }: projectProps) {
  const { slug } = params;
  const filter = PROJECTS.filter((project) => project.slug === slug);

  return (
    <>
      <Container>
        <BackButton />
        <ProjectDetail {...filter[0]} />
      </Container>
    </>
  );
}
