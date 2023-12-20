"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface AboutProps {
  title: string;
  description: string;
  major: string;
  image: string;
  date: string;
}

const Card = ({ title, description, major, image, date }: AboutProps) => {
  return (
    <div className="flex items-start rounded-md shadow-sm shadow-neutral-800 dark:shadow-neutral-400 p-3 gap-x-2 md:gap-x-8 mt-3 ">
      <motion.div
        initial={{ filter: "blur(20px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-24 w-32 bg-slate-600 rounded-md"
      >
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className="rounded-md w-full h-full object-cover"
        />
      </motion.div>
      <div className="w-full">
        <h1 className="font-bold text-sm md:text-base">{title}</h1>
        <div className="flex md:gap-x-4 items-center text-neutral-700 dark:text-neutral-400 text-xs md:text-sm py-2">
          <h2>{description}</h2>
          <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc ">
            <li>{major}</li>
          </ul>
        </div>
        <h3 className="text-neutral-700 dark:text-neutral-400 text-xs md:text-sm">
          {date}
        </h3>
      </div>
    </div>
  );
};

export default Card;
