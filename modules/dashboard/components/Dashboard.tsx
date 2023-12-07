"use client";
import React, { lazy } from "react";
import Image from "next/image";
import Link from "next/link";
import TitleDashboard from "@/components/TitleDashboard";
import LineBreak from "@/components/LineBreak";
import { motion } from "framer-motion";
import { FiBookmark, FiCode } from "react-icons/fi";
import { PROJECTS } from "@/constant/projects";
import { STACKS } from "@/constant/stacks";
import CardProject from "@/modules/project/components/CardProject";

const SkillList = lazy(() => import("./SkillList"));

const Dashboard = () => {
  const filter = PROJECTS.filter((project) => project?.is_show);
  return (
    <motion.main
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, type: "spring", stiffness: 120 },
      }}
      className=" w-full md:w-[50%] h-fit md:sticky top-5 rounded-2xl bg-neutral-100 dark:bg-[#1c1c1c] p-4 shadow shadow-neutral-800 dark:shadow-neutral-400 min-w-min"
    >
      <div>
        <section className="bg-cover bg-no-repeat space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-xl lg:text-xl font-medium font-sora">
              <h1>Hi, I&apos;m Angga Adytya</h1>{" "}
              <div className="ml-1 animate-waving-hand">👋</div>
            </div>
          </div>

          <div className="space-y-4">
            <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
              <li>
                Based in Aceh <span className="ml-1">🇮🇩</span>
              </li>
            </ul>
            <p className="text-sm md:text-md text-justify text-neutral-400 dark:text-neutral-400">
              I am a Frontend Developer. I have 2 years of experience. Focus on
              Web Development. I love coding. I love to learn new things.
            </p>
          </div>
        </section>
      </div>
      <LineBreak />
      <div className="">
        <TitleDashboard
          title="Projects"
          paragraf="Showcase my Project"
          icons={<FiBookmark />}
        />
        {filter.map((project) => (
          <CardProject key={project.id} {...project} />
        ))}
        <div className="flex items-center justify-center py-2 ">
          <Link
            href={"/dashboard/project"}
            className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-medium text-neutral-50 hover:bg-neutral-600 flex items-center justify-center"
          >
            Show More
          </Link>
        </div>
      </div>
      <LineBreak />
      <div className="">
        <TitleDashboard
          title="Skills"
          paragraf="My Coding Skills"
          icons={<FiCode />}
        />
        <SkillList />
      </div>
    </motion.main>
  );
};

export default Dashboard;
