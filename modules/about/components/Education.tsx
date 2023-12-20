import Card from "@/components/Card";
import TitleDashboard from "@/components/TitleDashboard";
import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { ABOUT } from "@/constant/about";

const Education = () => {
  return (
    <>
      <TitleDashboard
        title="Education"
        paragraf="My Education"
        icons={<FiBookOpen />}
      />
      <div className="py-2">
        {ABOUT.map((about, index) => (
          <Card key={index} {...about} />
        ))}
      </div>
    </>
  );
};

export default Education;
