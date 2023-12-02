import React from "react";
import Link from "next/link";

import { PiHouseLight, PiGithubLogo } from "react-icons/pi";
import Image from "next/image";

// https://github.com/Joscriptt/portfolioo  ini nanti diambil
// TODO: menambahkan animasi
// TODO: membuat components reusable
// TODO: menambahkan project
// TODO: menambahkan skill
// TODO: menambahkan children components
// TODO: mendirect setiap link ke halaman yang benar
// TODO: menambahkan light dan dark mode

export default function page() {
  return (
    <>
      <div className="p-5 fixed bottom-28 flex flex-col items-center justify-center mx-auto w-full">
        <div className="bg-neutral-600 rounded-full h-60 w-60">
          <Image
            src="https://avatars.githubusercontent.com/u/114200420?v=4"
            alt="logo"
            width={900}
            height={900}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-5xl text-center my-9 btn-shine font-extrabold">
          Hello
        </h1>
        <p className="text-neutral-400 lg:max-w-lg text-center font-normal">
          This is my personal website
        </p>
      </div>

      <div className="flex justify-center">
        <div className="fixed bottom-7 flex border border-neutral-600 rounded-lg p-2 gap-x-5 text-neutral-500">
          <Link href={"/dashboard"}>
            <span>
              <PiHouseLight />
            </span>
          </Link>
          <Link href={"/"}>
            <span>
              <PiGithubLogo />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
