import TitleDashboard from "@/components/TitleDashboard";
import CardProject from "@/modules/project/components/CardProject";
import Link from "next/link";
import React from "react";
import { FiBookmark } from "react-icons/fi";
import { PROJECTS } from "@/constant/projects";

const Project = () => {
  const filter = PROJECTS.filter((project) => project?.is_show);

  return (
    <div>
      <TitleDashboard
        title="Projects"
        paragraf="Showcase my Project"
        icons={<FiBookmark />}
      />
      {filter.map((project) => (
        <CardProject key={project.id} {...project} />
      ))}
      <div className="flex items-center justify-center py-2 ">
        <Link
          href={"/dashboard/project"}
          className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-medium text-neutral-50 hover:bg-neutral-600 flex items-center justify-center"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Project;
