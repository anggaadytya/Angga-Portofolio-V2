import React from "react";
import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import { PROJECTS } from "@/constant/projects";
import Image from "next/image";
import { STACKS } from "@/constant/stacks";
import { Tooltip } from "@nextui-org/react";
import LineBreak from "@/components/LineBreak";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filter = PROJECTS.filter((project) => project.slug === slug);

  return (
    <>
      <Container>
        <BackButton />
        {filter.map((project) => (
          <div key={project.id}>
            <h1 className="text-3xl font-bold text-neutral-400">
              {project.title}
            </h1>
            <p>{project.description}</p>
            <LineBreak/>
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={1000}
            />
            <div className="flex items-center flex-wrap">
              <div className="flex flex-wrap items-center gap-4 py-2">
                <span>Techs:</span>
                {project.techs?.map((stack: string, index: number) => (
                  <div key={index}>
                    <Tooltip content={stack}>
                      <div className="w-5">{STACKS[stack]}</div>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
