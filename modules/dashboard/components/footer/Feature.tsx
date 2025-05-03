import Link from "next/link";
import React from "react";
import { MenuLinks } from "@/constant";

const Feature = () => {
  const filterMenu = MenuLinks.filter((menu) => menu.feature === true);
  return (
    <>
      <h1 className="font-bold dark:text-neutral-200 text-neutral-950 ">
        Featured in
      </h1>
      <div
        id="feature-show"
        className="overflow-y-auto max-h-[11rem] md:max-h-[13rem] flex flex-col gap-y-3 mt-4 scrollbar-hide"
      >
        {filterMenu.map((menu, index) => (
          <Link
            key={index}
            href={menu.href}
            className="flex flex-col gap-x-3 hover:bg-neutral-400  dark:hover:bg-neutral-800 p-2 rounded-md hover:cursor-pointer group transition-all duration-300 ease-in"
          >
            <div className="flex items-center gap-x-2">
              <div className="bg-neutral-400 dark:bg-neutral-700/50 w-8 h-8 rounded-full flex items-center justify-center text-white dark:text-neutral-300">
                {menu.icons}
              </div>
              <h2 className="text-xs dark:text-neutral-300 font-medium group-hover:text-neutral-100 dark:group-hover:text-neutral-200">
                {menu.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Feature;
