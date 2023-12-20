import TitleDashboard from "@/components/TitleDashboard";
import React from "react";
import { FiCpu } from "react-icons/fi";

const Certificate = () => {
  return (
    <>
      <TitleDashboard
        title="Certificate"
        paragraf="My certificate"
        icons={<FiCpu />}
      />
    </>
  );
};

export default Certificate;
