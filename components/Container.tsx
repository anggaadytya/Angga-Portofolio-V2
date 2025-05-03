"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useCommandStore } from "@/stores/sharingStore";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  const { open } = useCommandStore();
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.2, type: "spring", stiffness: 110 },
      }}
      className={` w-full md:w-[50%] h-fit md:sticky top-5 rounded-2xl bg-neutral-100 dark:bg-[#1c1c1c] p-4 shadow shadow-neutral-700 dark:shadow-neutral-400 min-w-min ${
        open ? "-z-10" : "z-0"
      } `}
    >
      {children}
    </motion.div>
  );
}
