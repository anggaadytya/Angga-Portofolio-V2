import { lazy } from "react";
import LineBreak from "@/components/LineBreak";
import Skills from "../skills/Skills";
import TagTitle from "@/components/TagTitle";

const LazyProject = lazy(() => import("../project/Project"));

const Dashboard = () => {
  return (
    <>
      <TagTitle />
      <LineBreak />
      <LazyProject />
      <LineBreak />
      <Skills />
      <LineBreak />
    </>
  );
};

export default Dashboard;
