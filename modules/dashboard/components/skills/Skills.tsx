import TitleDashboard from "@/components/TitleDashboard";
import React from "react";
import { FiCode } from "react-icons/fi";
import SkillList from "./SkillList";

const Skills = () => {
  return (
    <>
      <TitleDashboard
        title="Skills"
        paragraf="My Coding Skills"
        icons={<FiCode />}
      />
      <SkillList />
    </>
  );
};

export default Skills;
