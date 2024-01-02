import Link from "next/link";
import React from "react";
import { FiBox, FiMessageCircle } from "react-icons/fi";
import { MenuLinks } from "@/constant";

const Feature = () => {
  const filterMenu = MenuLinks.filter((menu) => menu.feature === true);
  return (
    <>
      <h1 className="font-bold dark:text-neutral-200 text-neutral-950 ">
        Featured in
      </h1>
      <div className="overflow-y-auto maxh-[11rem] md:max-h-[13rem] flex flex-col gap-y-3 mt-6">
        {filterMenu.map((menu, index) => (
          <Link
          key={index}
            href={menu.href}
            className="flex items-center gap-x-3 hover:bg-neutral-800 p-2 rounded-md hover:cursor-pointer group transition-all duration-300 ease-in"
          >
            <div className="bg-neutral-700/50 w-8 h-8 rounded-full flex items-center justify-center">
              {menu.icons}
            </div>
            <h2 className="text-xs dark:text-neutral-300 font-medium group-hover:text-neutral-200">
              {menu.title}
              <br />
              <span className="text-neutral-400 text-xs">
                Muhammad Angga Adytya
              </span>
            </h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Feature;
