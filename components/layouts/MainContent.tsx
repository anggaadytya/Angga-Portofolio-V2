"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function MainContent() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, type: "spring", stiffness: 120 },
      }}
      className=" w-full md:w-[50%] h-fit md:sticky top-5 rounded-2xl"
    >
      <div className="bg-[#1c1c1c] min-w-min rounded-2xl p-4 border border-neutral-800 ">
        <h1 className="font-bold text-neutral-200">Hello</h1>

        <div className="border border-neutral-700 my-5" />
        <h2 className="font-bold text-neutral-200 py-2">Projects</h2>

        <div className="flex flex-col gap-4 bg-neutral-800/50 rounded-md p-3">
          <div className="flex gap-x-4 items-center">
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

          <div className="flex gap-x-4 items-center">
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
      </div>
      <div className="bg-[#1c1c1c] min-w-min rounded-2xl p-4 border border-neutral-800 mt-5 ">
        <Image
          src="https://avatars.githubusercontent.com/u/114200420?v=4"
          alt="logo"
          width={900}
          height={900}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </motion.div>
  );
}

export default MainContent;
