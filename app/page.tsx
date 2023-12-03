import React from "react";
import Link from "next/link";

import { PiHouseLight, PiGithubLogo } from "react-icons/pi";
import Image from "next/image";
import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";
import ToggleTheme from "@/components/elements/ToggleTheme";

// https://github.com/Joscriptt/portfolioo  ini nanti diambil

// TODO: membuat components reusable
// TODO: mendirect setiap link ke halaman yang benar
// TODO: menambahkan children components
// TODO: menambahkan project
// TODO: menambahkan skill
// TODO: menambahkan animasi

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function page() {
  return (
    <>
      <div className="p-5 fixed bottom-28 flex flex-col items-center justify-center mx-auto w-full">
        <div className="bg-neutral-600 rounded-full h-70 w-70 shadow-md shadow-neutral-800 dark:shadow-neutral-400">
          <Image
            src="https://avatars.githubusercontent.com/u/114200420?v=4"
            alt="logo"
            width={900}
            height={900}
            className="object-cover w-full h-full rounded-full "
          />
        </div>
        <h1 className="text-5xl text-center my-9 font-extrabold text-neutral-800 dark:text-neutral-400 animate-hover-animate">
          Muhammad Angga Adytya
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 lg:max-w-lg text-center font-normal">
          This is my personal website and showcase my project
        </p>
      </div>

      <div className="flex justify-center">
        <div className="fixed bottom-7 flex border border-neutral-600 rounded-lg p-2 gap-x-5 text-neutral-500">
          <Link href={"/dashboard"}>
            <span className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
              <PiHouseLight className="text-neutral-900 dark:text-neutral-100 hover:scale-150 transition-all duration-300 ease-in-out" />
            </span>
          </Link>
          <ToggleTheme className="hover:scale-150 transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </>
  );
}
