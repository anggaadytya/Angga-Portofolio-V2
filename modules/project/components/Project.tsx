import LineBreak from "@/components/LineBreak";
import TitleDashboard from "@/components/TitleDashboard";
import React from "react";
import CardProject from "./CardProject";
import { PROJECTS } from "@/constant/projects";

interface CardProjectProps {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  techs: string[];
}

const Project = () => {
  return (
    <>
      <TitleDashboard title="Project All" paragraf="Project" />
      <LineBreak />
      {PROJECTS.map((project: CardProjectProps) => (
        <CardProject key={project.id} {...project} />
      ))}
    </>
  );
};

export default Project;
