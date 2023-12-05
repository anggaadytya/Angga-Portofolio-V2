import React from "react";
import { PiGoogleLogoThin } from "react-icons/pi";
import { SiAdobe } from "react-icons/si";
import { WorkLinks } from "@/constant";

const WorkHistory = () => {
  return (
    <div className="my-4">
      <h1 className="font-medium">Work History</h1>
      {WorkLinks.map((link) => (
        <div key={link.title} className="mt-7 my-4 flex justify-between">
          <div className="flex gap-x-3">
            {link.icons}
            <div className="-mt-1">
              <h3 className="text-sm font-medium text-neutral-50">{link.title}</h3>
              <p className="text-[9px] text-neutral-300">{link.place}</p>
            </div>
          </div>
          <small className="text-[9px] text-neutral-300">
            {link.date}
          </small>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
