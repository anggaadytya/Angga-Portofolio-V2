import React from "react";

const SkillText = () => {
  const skills = ["ReactJs", "NextJs", "TailwindCss", "Typescript"];

  return (
    <div className="flex w-full">
      <div className="flex gap-x-1 text-xs my-4">
        {skills.map((skill) => (
          <p
            key={skill}
            className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-bold"
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillText;
