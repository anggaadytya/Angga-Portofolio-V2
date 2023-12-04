"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function MainContent() {
  return (
    <motion.main
      initial={{ y: -10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, type: "spring", stiffness: 120 },
      }}
      className=" w-full md:w-[50%] h-fit md:sticky top-5 rounded-2xl"
    >
      <section className="bg-[#1c1c1c] min-w-min rounded-2xl p-4 border border-neutral-800 ">
        <h1 className="font-bold text-neutral-200">Hello</h1>

        <div className="border border-neutral-700 my-5" />

        <h2 className="font-bold text-neutral-200 py-2">Projects</h2>

        <div className="flex flex-col gap-4 bg-neutral-800/50 rounded-md p-3">
          <Link
            href={"/dashboard/project"}
            className="flex gap-x-4 items-center justify-between  hover:scale-105 hover:shadow-sm hover:shadow-neutral-300 hover:rounded-lg transition-all duration-200 ease-in-out cursor-pointer"
          >
            <Image
              src="https://avatars.githubusercontent.com/u/114200420?v=4"
              alt="logo"
              width={900}
              height={900}
              className="object-cover w-28 h-28 rounded-lg"
            />

            <div>
              <h3 className="text-neutral-200 font-medium">Angga Adytya</h3>
              <p className="text-neutral-400 font-normal">
                This is my personal website
              </p>
            </div>
            <div className="text-neutral-400">ARROW </div>
          </Link>

          <div className="flex gap-x-4 items-center  hover:scale-105 hover:shadow-sm hover:shadow-neutral-300 hover:rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
            <Image
              src="https://avatars.githubusercontent.com/u/114200420?v=4"
              alt="logo"
              width={900}
              height={900}
              className="object-cover w-28 h-28 rounded-lg"
            />

            <div>
              <h3 className="text-neutral-200 font-medium">Angga</h3>
              <p className="text-neutral-400 font-normal">
                This is my personal website
              </p>
            </div>
          </div>
        </div>

      </section>

      <section className="bg-[#1c1c1c] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3 ">
        <Image
          src="https://avatars.githubusercontent.com/u/114200420?v=4"
          alt="logo"
          width={900}
          height={900}
          className="object-cover w-full h-full rounded-lg"
        />
      </section>
    </motion.main>
  );
}

export default MainContent;
