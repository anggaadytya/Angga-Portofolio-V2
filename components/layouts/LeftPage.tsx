"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import {
  PiBookOpenTextLight,
  PiGoogleLogoThin,
  PiTwitterLogoThin,
  PiMagicWandThin,
  PiShapesThin,
  PiHouseLight,
  PiSunLight,
  PiMoonLight,
} from "react-icons/pi";
import { SiAdobe } from "react-icons/si";
import ToggleTheme from "../elements/ToggleTheme";
import WorkHistory from "../elements/WorkHistory";

function LeftPage() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");

  const controls = useAnimation();

  const skills = ["ReactJs", "NextJs", "TailwindCss", "Typescript"];

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const isValidateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidateEmail(email)) {
      setEmail("");
      alert("Please enter a valid email address");
    } else {
      controls.start({
        x: 0,
        transition: {
          type: "spring",
          velocity: 600,
          stiffness: 5000,
          damping: 15,
        },
      });
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, type: "spring", stiffness: 120 },
        }}
        className=" md:block bg-[#1c1c1c] w-full md:w-80 h-fit md:sticky top-5 rounded-2xl"
      >
        <div className="w-full md:w-80 p-3 border border-neutral-800 rounded-2xl h-full bg-[#1c1c1c] ">
          <div className="flex ">
            <div className="w-full relative">
              <Image
                src="https://avatars.githubusercontent.com/u/114200420?v=4"
                alt="logo"
                width={900}
                height={900}
                className="object-cover w-28 h-28 rounded-full"
              />
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
              <p className="text-xs font-medium text-neutral-300 mt-2">
                Frontend Developer
              </p>

              <div className="flex w-full">
                <div className="flex gap-x-1 text-xs my-4">
                  {skills.map((skill) => (
                    <p
                      key={skill}
                      className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-bold"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 right-0">
                <div className="flex gap-x-2 w-full h-fit ">
                  <Link href={"/"}>
                    <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                      <PiHouseLight className="text-neutral-100" />
                    </div>
                  </Link>
                  <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                    <PiBookOpenTextLight className="text-neutral-100" />
                  </div>
                  <div>
                    <ToggleTheme />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#282828] p-1 rounded-md md:flex items-center justify-between h-9 w-full hidden"
          >
            <input
              value={email}
              onChange={handleEmail}
              type="text"
              placeholder="name@email.com"
              className="w-36 focus:outline-none bg-transparent text-neutral-400 text-xs placeholder:text-neutral-600 h-full pt-2 placeholder:text-xs placeholder:font-medium"
            />
            <motion.button
              animate={controls}
              className="bg-[#696969] h-full p-1 px-3 rounded-md text-xs font-medium text-neutral-50"
              onClick={() => {
                controls.start({
                  scale: [1, 1.2, 1],
                  transition: { duration: 0.3, type: "spring" },
                });
                handleSubmit;
              }}
            >
              Contact
            </motion.button>
          </form>

          <div className="w-full mt-5 text-neutral-300">
            <h2 className="font-bold my-4">Bio</h2>
            <p className="text-[12px] font-medium my-3">
              I am a Frontend Developer. I have 2 years of experience.
            </p>
            <div className="mt-6 flex justify-between text-sm">
              <div className="flex items-center gap-x-1">
                <PiShapesThin />
                <span className="text-xs font-medium">
                  +2 years as a Frontend Developer
                </span>
              </div>
              <div className="flex items-center gap-x-1">
                <PiMagicWandThin />
                <span className="text-xs font-medium">7+ Projects</span>
              </div>
            </div>

            <div className="border border-[#282828] text-neutral-300 my-6" />

            <WorkHistory />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default LeftPage;
