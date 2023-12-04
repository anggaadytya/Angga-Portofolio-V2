import React from "react";
import { PiGithubLogoLight } from "react-icons/pi";

const Feature = () => {
  return (
    <div>
      <h1 className="font-medium text-neutral-200">Featured in</h1>

      <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800 p-2 rounded-md hover:cursor-pointer">
        <div className="bg-neutral-700/50 w-8 h-8 rounded-full flex items-center justify-center">
          <PiGithubLogoLight />
        </div>
        <h3 className="text-xs">
          Sispar Cabai by React <br />
          React
        </h3>
      </div>

      <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800 p-2 rounded-md hover:cursor-pointer">
        <div className="bg-neutral-700/50 w-8 h-8 rounded-full flex items-center justify-center">
          <PiGithubLogoLight />
        </div>
        <h3 className="text-xs">
          Sispar Cabai by React <br />
          React
        </h3>
      </div>
    </div>
  );
};

export default Feature;
