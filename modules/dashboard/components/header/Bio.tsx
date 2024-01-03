import React from "react";
import { PiMagicWandThin, PiShapesThin } from "react-icons/pi";

interface BioProps {
  project: number;
}

const Bio = ({ project }: BioProps) => {
  return (
    <div className="w-full mt-5 text-neutral-800 dark:text-neutral-300">
      <h2 className="font-bold my-4">Bio</h2>
      <p className="text-[12px] font-medium my-3">
        I am a Frontend Developer. I have 2 years of experience.
      </p>
      <div className="mt-6 flex justify-between text-sm">
        <div className="flex items-center gap-x-1">
          <PiShapesThin />
          <span className="text-xs font-medium dark:text-neutral-400 text-neutral-600">
            +2 years as a Frontend
          </span>
        </div>
        <div className="flex items-center gap-x-1">
          <PiMagicWandThin />
          <span className="text-xs font-medium dark:text-neutral-400 text-neutral-600">
            +{project} Projects
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bio;
