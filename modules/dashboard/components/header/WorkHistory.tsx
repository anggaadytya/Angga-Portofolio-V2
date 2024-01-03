import React from "react";
import { WorkLinks } from "@/constant";

const WorkHistory = () => {
  return (
    <div className="my-4">
      <h1 className="font-medium text-neutral-800 dark:text-neutral-300">
        Work History
      </h1>
      {WorkLinks.map((link) => (
        <div key={link.title} className="mt-7 my-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between -mt-1">
              <div className="flex items-center gap-x-1">
                {link.icons}
                <h2 className="text-sm font-medium text-neutral-800 dark:text-neutral-50">
                  {link.title}
                </h2>
              </div>
              <small className="text-[9px] text-neutral-600 dark:text-neutral-400">
                {link.date}
              </small>
            </div>
            <p className="text-[9px] text-neutral-600 dark:text-neutral-400">
              {link.place}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
