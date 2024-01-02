import LineBreak from "@/components/LineBreak";
import TitleDashboard from "@/components/TitleDashboard";
import React from "react";
import CardProject from "./CardProject";
import { PROJECTS } from "@/constant/projects";
import BackButton from "@/components/BackButton";
import { FiCpu } from "react-icons/fi";

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
      <TitleDashboard
        title="Project All"
        icons={<FiCpu />}
        paragraf="displays the entire project that has been built"
      />
      <LineBreak />
      {PROJECTS.map((project: CardProjectProps) => (
        <CardProject key={project.id} {...project} />
      ))}
    </>
  );
};

export default Project;
