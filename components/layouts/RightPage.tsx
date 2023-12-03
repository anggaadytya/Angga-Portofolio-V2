"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SocialLinks } from "@/constant";
import Link from "next/link";
import { PiGithubLogoLight } from "react-icons/pi";
import { SiFramer } from "react-icons/si";

function RightPage() {
  return (
    <>
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
          <div>
            <div className="bg-[#1c1c1c] min-w-min rounded-2xl p-4 border border-neutral-800 ">
              <h2 className="font-bold text-neutral-200">Skills</h2>
              <p className="text-xs my-3 text-neutral-400 font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                quibusdam modi itaque harum quaerat iste{" "}
              </p>
              <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-medium text-neutral-50">
                Download
              </button>

              <div className="border border-neutral-700 my-5" />

              <div className="text-neutral-400">
                <h1 className="font-medium text-neutral-200">Featured in</h1>
                <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800 p-2 rounded-md">
                  <div className="bg-neutral-700/50 w-8 h-8 rounded-full flex items-center justify-center">
                    <PiGithubLogoLight />
                  </div>
                  <h3 className="text-xs">
                    9 Essential Javascript <br />
                    Functions
                  </h3>
                </div>
                <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800 p-2 rounded-md">
                  <div className="bg-neutral-700/50 w-8 h-8 rounded-full flex items-center justify-center">
                    <SiFramer />
                  </div>
                  <h3 className="text-xs">
                    animate to easy create react <br />
                    Framer Motion
                  </h3>
                </div>
              </div>

              <div className="border border-neutral-700 my-5" />

              <div className="flex items-center gap-x-4 justify-center">
                {SocialLinks.map((link, index) => (
                  <Link href={"/"} key={index}>
                    {link.icons}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#1c1c1c] min-w-min rounded-2xl p-4 border border-neutral-800 mt-2">
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
    </>
  );
}

export default RightPage;
