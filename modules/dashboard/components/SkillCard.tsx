import React from "react";

interface SkillCardProps {
  name: string;
  icon: JSX.Element;
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className="px-1 md:px-2">
      <div className="w-full flex space-x-2 px-2 md:px-4 py-2 rounded-full shadow-neutral-800 bg-[#696969] ">
        <div className="h-4 w-4 md:h-6 md:w-6">{icon}</div>
        <h3 className="whitespace-nowrap text-xs md:text-base text-neutral-50">
          {name}
        </h3>
      </div>
    </div>
  );
}
