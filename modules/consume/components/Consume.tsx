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
      <div>Github</div>
      <LineBreak/>
      <div>PageSpeed Insight</div>
      <LineBreak/>
      <div>Pokemon</div>
    </>
  );
};

export default Consume;
