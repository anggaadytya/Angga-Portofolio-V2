import LineBreak from "@/components/LineBreak";
import { STACKS } from "@/constant/stacks";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import ProjectLink from "./ProjectLink";

interface ProjectPropsDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  link_demo?: string | null;
  link_github?: string | null;
  techs: string[];
}

const ProjectDetail = ({
  id,
  title,
  description,
  image,
  link_demo,
  link_github,
  techs,
}: ProjectPropsDetail) => {
  return (
    <div key={id} className="space-y-4 overflow-hidden">
      <h1 className="text-xl font-bold text-neutral-300">{title}</h1>
      <p className="text-xs font-medium text-neutral-400">{description}</p>
      <LineBreak />
      <Image
        src={image}
        alt={title}
        width={1000}
        height={1000}
        className="hover:scale-105 transition-all duration-300"
      />
      <div className="flex items-center flex-wrap justify-between">
        <div className="flex flex-wrap items-center gap-4 py-2">
          <span className="leading-3 tracking-wide font-medium text-neutral-300">
            Techs:
          </span>
          {techs?.map((stack: string, index: number) => (
            <div key={index}>
              <Tooltip content={stack}>
                <div className="w-5">{STACKS[stack]}</div>
              </Tooltip>
            </div>
          ))}
        </div>
        <ProjectLink
          title={title}
          link_demo={link_demo || ""}
          link_github={link_github || ""}
        />
      </div>
    </div>
  );
};

export default ProjectDetail;
