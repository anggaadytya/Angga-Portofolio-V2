"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Page() {
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
        <h1 className="text-neutral-400">INI ADALAH SKILL PAGE</h1>
      </div>
    </motion.div>
  );
}
