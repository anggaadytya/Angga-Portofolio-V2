"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/react";
import { SocialLinks } from "@/constant";
import { PiGithubLogoLight } from "react-icons/pi";
import { SiFramer } from "react-icons/si";
import LineBreak from "../elements/LineBreak";

function RightPage() {
  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1jLuEFpR5mTxNBmQNbU2BnrzMyj7twgnD/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <motion.div
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
      <div className="w-full md:w-60 rounded-2xl h-fit md:sticky top-5">
        <div className="bg-[#1c1c1c] min-w-min rounded-2xl p-4 border border-neutral-800 ">
          <h2 className="font-bold text-neutral-200">Resume</h2>
          <p className="text-xs my-3 text-neutral-400 font-medium leading-1 tracking-tight text-justify">
            With a background in D4 Information Technology from the State
            Polytechnic of Lhokseumawe, I bring skills in website development
            with a specific focus on Frontend Development.
          </p>
          <button
            onClick={handleDownloadResume}
            className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-medium text-neutral-50"
          >
            Download
          </button>

          <LineBreak />

          <div className="text-neutral-400">
            <h1 className="font-medium text-neutral-200">Featured in</h1>
            <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800 p-2 rounded-md">
              <div className="bg-neutral-700/50 w-8 h-8 rounded-full flex items-center justify-center">
                <PiGithubLogoLight />
              </div>
              <h3 className="text-xs">
                Sispar Cabai by React <br />
                React
              </h3>
            </div>
            <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800 p-2 rounded-md">
              <div className="bg-neutral-700/50 w-8 h-8 rounded-full flex items-center justify-center">
                <SiFramer />
              </div>
              <h3 className="text-xs">
                animate to easy react <br />
                Framer Motion
              </h3>
            </div>
          </div>

          <LineBreak />

          <div className="flex items-center md:gap-x-4 justify-around md:justify-center">
            {SocialLinks.map((link, index) => (
              <Tooltip content={link.title} key={index}>
                <Link
                  href={link.href}
                  className="hover:scale-125 transition-all duration-300 ease-in-out"
                >
                  {link.icons}
                </Link>
              </Tooltip>
            ))}
          </div>
        </div>

        <div className="bg-[#1c1c1c] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3">
          <div>
            <Image
              src="https://avatars.githubusercontent.com/u/114200420?v=4"
              alt="logo"
              width={900}
              height={900}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="font-bold text-neutral-200">Spotify</h1>
        </div>
      </div>
    </motion.div>
  );
}

export default RightPage;
