import React, { lazy } from "react";
import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import { PROJECTS } from "@/constant/projects";
import { METADATA } from "@/constant/metadata";

const Lazy = lazy(() => import("@/modules/project/components/ProjectDetail"));

interface projectProps {
  params: { slug: string };
}

export function generateMetadata({ params }: projectProps) {
  const filter = PROJECTS.filter((project) => project.slug === params.slug);
  return {
    title: filter[0].title,
    description: filter[0].description,
    keywords: (
      filter[0]?.techs?.map((tech: string) => tech) || ["Muhammad Angga Adytya"]
    ).concat(["Rawat.ID", "blog", "artikel"]),
    openGraph: {
      type: "article",
      locale: METADATA.openGraph.locale,
      article: {
        authors: METADATA.creator,
      },
      images: [
        {
          url: filter[0].image,
          width: 800,
          height: 600,
        },
        {
          url: filter[0].image,
          width: 1200,
          height: 630,
        },
        {
          url: filter[0].image,
          width: 1600,
          height: 900,
        },
      ],
    },
    alternates: {
      canonical: `${process.env.DOMAIN}/project/${filter[0].slug}`,
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
        <Lazy {...filter[0]} />
      </Container>
    </>
  );
}
