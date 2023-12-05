"use client";
import React, { lazy } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import LineBreak from "@/components/LineBreak";
import { FiBookmark, FiCode } from "react-icons/fi";
import TitleDashboard from "@/components/TitleDashboard";

const SkillList = lazy(() => import('./SkillList'))

const Dashboard = () => {
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

        <LineBreak />
        <div className="">
          <TitleDashboard
            title="Projects"
            paragraf="Showcase my Project"
            icons={<FiBookmark />}
          />
          <Link
            href={"/dashboard/project"}
            className="flex gap-x-4 items-center justify-between border border-neutral-400 rounded-lg p-3 my-2 hover:scale-105  hover:rounded-lg transition-all duration-200 ease-in-out cursor-pointer"
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

          <div className="flex gap-x-4 items-center  border border-neutral-400 rounded-lg p-3 my-2 hover:scale-101  hover:rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
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

        <LineBreak />

        <div className="w-full">
          <TitleDashboard
            title="Skills"
            paragraf="My Coding Skills"
            icons={<FiCode />}
          />
         
         <SkillList/>
        </div>
      </section>
    </motion.main>
  );
};

export default Dashboard;
