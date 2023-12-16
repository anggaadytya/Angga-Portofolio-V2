import React from "react";
import LineBreak from "@/components/LineBreak";

import About from "../about/About";
import Skills from "../skills/Skills";
import Project from "../project/Project";

const Dashboard = () => {
  return (
    <>
      <Project />
      <LineBreak />
      <Skills />
      <LineBreak />
      <About />
      <LineBreak />
    </>
  );
};

export default React.memo(Dashboard);
