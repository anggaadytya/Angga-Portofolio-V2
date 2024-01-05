import LineBreak from "@/components/LineBreak";
import TitleDashboard from "@/components/TitleDashboard";
import React from "react";
import { FiFile } from "react-icons/fi";

const Consume = () => {
  return (
    <>
      <TitleDashboard
        title="Consume APi"
        paragraf="This API Example Consume in my website"
        icons={<FiFile />}
      />
      <LineBreak />
      <div className=" h-40 w-full flex items-center justify-center text-center">
        <h1>Comming Soon</h1>
      </div>
    </>
  );
};

export default Consume;
