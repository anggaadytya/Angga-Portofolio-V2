import React from "react";

const SkillText = () => {
  const skills = ["NextJs", "TailwindCss", "Typescript", "VueJs"];

  return (
    <div className="flex w-full">
      <div className="flex gap-x-2 text-xs my-4">
        {skills.map((skill) => (
          <p
            key={skill}
            className="text-neutral-800 dark:text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-bold shadow-sm shadow-neutral-800 dark:shadow-neutral-400"
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillText;
