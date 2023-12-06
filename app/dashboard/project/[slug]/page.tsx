import React from "react";
import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import { PROJECTS } from "@/constant/projects";
import Image from "next/image";
import { STACKS } from "@/constant/stacks";
import { Tooltip } from "@nextui-org/react";
import LineBreak from "@/components/LineBreak";
import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";

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
        {filter?.map((project) => (
          <div key={project.id} className="space-y-4 overflow-hidden">
            <h1 className="text-xl font-bold text-neutral-300">
              {project.title}
            </h1>
            <p className="text-xs font-medium text-neutral-400">
              {project.description}
            </p>
            <LineBreak />
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={1000}
              className="hover:scale-105 transition-all duration-300"
            />
            <div className="flex items-center flex-wrap justify-between">
              <div className="flex flex-wrap items-center gap-4 py-2">
                <span className="leading-3 tracking-wide font-medium text-neutral-300">
                  Techs:
                </span>
                {project.techs?.map((stack: string, index: number) => (
                  <div key={index}>
                    <Tooltip content={stack}>
                      <div className="w-5">{STACKS[stack]}</div>
                    </Tooltip>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <button>Source Code</button>
                |
                <button>Link Demo</button>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
