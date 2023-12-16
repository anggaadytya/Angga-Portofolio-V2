"use client";
import React from "react";
import LineBreak from "../../../components/LineBreak";
import Resume from "@/modules/dashboard/components/footer/Resume";
import Feature from "@/modules/dashboard/components/footer/Feature";

import { motion } from "framer-motion";
import SocialMedia from "@/modules/dashboard/components/footer/SocialMedia";
import MusicPlayer from "@/components/MusicPlayer";


function RightPage() {
  return (
    <motion.footer
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
      className=" lg:block w-full lg:w-fit "
    >
      <section className="w-full md:w-60 rounded-2xl h-fit md:sticky top-5">
        <div className="dark:bg-[#1c1c1c] bg-neutral-100 min-w-min rounded-2xl p-4 shadow shadow-neutral-800 dark:shadow-neutral-400 mt-3">
          <Resume />
          <LineBreak />
          <Feature />
          <LineBreak />
          <SocialMedia />
        </div>

        <div className="dark:bg-[#1c1c1c] bg-neutral-100 min-w-min rounded-2xl p-4 shadow shadow-neutral-800 dark:shadow-neutral-400 mt-3">
          <MusicPlayer />
        </div>
      </section>
    </motion.footer>
  );
}

export default React.memo(RightPage);
