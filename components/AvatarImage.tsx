"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageProps {
  className?: string;
}

const AvatarImage = ({ className }: ImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.div
        initial={{ filter: "blur(20px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`${className} rounded-full bg-neutral-600`}
      >
        <Image
          src="/heroImage.svg"
          alt="logo"
          width={900}
          height={900}
          className="object-cover w-full h-full rounded-full"
          loading="eager"
          priority={true}
        />
      </motion.div>
    </motion.div>
  );
};

export default AvatarImage;
