"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PiHouseLight } from "react-icons/pi";
import ToggleTheme from "../../../components/ToggleTheme";
import WorkHistory from "../components/WorkHistory";
import Bio from "../components/Bio";
import SkillText from "../components/SkillText";
import FormEmail from "../components/FormEmail";
import LineBreak from "../../../components/LineBreak";
import AvatarImage from "../../../components/AvatarImage";

function LeftPage() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, type: "spring", stiffness: 120 },
        }}
        className=" md:block bg-[#1c1c1c] w-full md:w-80 h-fit md:sticky top-5 rounded-2xl"
      >
        <section className="w-full md:w-80 p-3 border border-neutral-800 rounded-2xl h-full bg-[#1c1c1c] ">
          <div className="flex ">
            <div className="w-full relative">
              <AvatarImage className="w-28 h-28" />
              <div
                onClick={() => setOpen(!open)}
                className="bg-lime-400 w-3 h-3 cursor-pointer rounded-full absolute top-20 left-[6rem] animate-pulse"
              />
              {open && (
                <div className="border border-lime-400 h-6 flex items-center justify-center rounded-2xl w-fit px-4 absolute top-[4.2rem] left-[6.9rem] transition-all duration-300 ease-in">
                  <p className="text-[11px] font-medium text-lime-300">
                    Open to hire
                  </p>
                </div>
              )}
              <h1 className="font-medium text-xl text-neutral-300 mt-3">
                Muhammad Angga Adytya
              </h1>
              <p className="text-xs font-medium text-neutral-400 mt-2">
                Frontend Developer
              </p>

              <div className="absolute top-0 right-0">
                <div className="flex gap-x-2 w-full h-fit ">
                  <Link href={"/"}>
                    <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                      <PiHouseLight className="text-neutral-100" />
                    </div>
                  </Link>
                  <div>
                    <ToggleTheme />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SkillText />
          <FormEmail />
          <LineBreak />
          <Bio />
          <LineBreak />
          <WorkHistory />
        </section>
      </motion.header>
    </>
  );
}

export default LeftPage;
