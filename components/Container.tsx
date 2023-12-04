"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, type: "spring", stiffness: 120 },
      }}
      className=" w-full md:w-[50%] h-fit md:sticky top-5 rounded-2xl bg-[#1c1c1c] p-4 border border-neutral-800 min-w-min"
    >
      {children}
    </motion.div>
  );
}
