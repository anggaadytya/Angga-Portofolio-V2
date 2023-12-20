import React from "react";
import LineBreak from "@/components/LineBreak";
import Skills from "../skills/Skills";
import Project from "../project/Project";
import TagTitle from "@/components/TagTitle";

const Dashboard = () => {
  return (
    <>
      <TagTitle />
      <LineBreak />
      <Project />
      <LineBreak />
      <Skills />
      <LineBreak />
    </>
  );
};

export default Dashboard;
