"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ToggleTheme from "@/components/elements/ToggleTheme";

import { motion } from "framer-motion";
import { PiHouseLight } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <>
      <div className="p-5 fixed bottom-28 flex flex-col items-center justify-center mx-auto w-full">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.5,
              stiffness: 200,
              delay: 0.2,
              type: "spring",
              damping: 10,
            },
          }}
          className="bg-neutral-600 rounded-full h-70 w-70 shadow-md shadow-neutral-800 dark:shadow-neutral-400"
        >
          <Image
            src="/heroImage.svg"
            alt="logo"
            width={900}
            height={900}
            className="object-cover w-full h-full rounded-full "
          />
        </motion.div>

        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          className="font-bold text-xl md:text-4xl py-5"
        >
          <TypeAnimation
            sequence={[
              "Muhammad Angga Adytya",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "Fullstack Web Developer",
              2000,
              "Frontend Developer",
              2000,
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
        >
          <p className="text-neutral-600 dark:text-neutral-400 lg:max-w-lg text-center font-normal">
            This is my personal website and showcase my project
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              stiffness: 260,
              type: "spring",
              damping: 20,
            },
          }}
          className="fixed bottom-7 flex border border-neutral-600 rounded-lg p-2 gap-x-5 text-neutral-500"
        >
          <Link href={"/dashboard"}>
            <span className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
              <PiHouseLight className="text-neutral-900 dark:text-neutral-100 hover:scale-150 transition-all duration-300 ease-in-out" />
            </span>
          </Link>
          <ToggleTheme className="hover:scale-150 transition-all duration-300 ease-in-out" />
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
