import Card from "@/components/Card";
import TitleDashboard from "@/components/TitleDashboard";
import { CERTIF } from "@/constant/about";
import React from "react";
import { FiCpu } from "react-icons/fi";

const Certificate = () => {
  const FILTER = CERTIF.slice(0, 9);
  return (
    <>
      <TitleDashboard
        title="Certificate"
        paragraf="My certificate"
        icons={<FiCpu />}
      />
      <div>
        {FILTER.map((about, index) => (
          <Card key={index} {...about} />
        ))}
      </div>
    </>
  );
};

export default Certificate;
