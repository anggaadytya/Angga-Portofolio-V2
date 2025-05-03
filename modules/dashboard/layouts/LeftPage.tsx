"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ToggleTheme from "../../../components/ToggleTheme";
import WorkHistory from "../components/header/WorkHistory";
import Bio from "../components/header/Bio";
import SkillText from "../components/header/SkillText";
import LineBreak from "../../../components/LineBreak";
import AvatarImage from "../../../components/AvatarImage";
import { PROJECTS } from "../../../constant/projects";
import HomeButton from "@/components/HomeButton";
import CommandButton from "@/components/CommandButton";
import createDrivers from "@/libs/driver";
import { tourGuideWEB } from "@/constant/driver";

function LeftPage() {
  const [open, setOpen] = useState<boolean>(false);
  const All_Projects = PROJECTS.length + 3;

  const { runDriver, isProductTour } = createDrivers({ steps: tourGuideWEB });

  useEffect(() => {
    const dialogElement = document.getElementById("driver-popover-content");
    const closeButton = dialogElement?.getElementsByClassName(
      "driver-popover-close-btn"
    )[0] as HTMLButtonElement;
    const dialogTitle = document.getElementById("driver-popover-title");

  
    if (typeof document !== "undefined") {
      if (dialogElement) {
        dialogElement.setAttribute("aria-labelledby", "driver-popover-title");
        dialogElement.setAttribute(
          "aria-describedby",
          "driver-popover-description"
        );
        dialogElement.setAttribute("role", "alertdialog");
      }
      if (closeButton) {
        closeButton!.setAttribute("aria-label", "close");
      }
      if (dialogTitle) {
        dialogTitle.textContent = "Dark Mode Switcher";
      }
    }

    if (isProductTour) {
      runDriver();
    }
  });

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, type: "spring", stiffness: 120 },
        }}
        className=" md:block bg-neutral-100 dark:bg-[#1c1c1c] w-full md:w-80 h-fit md:sticky top-5 rounded-2xl shadow shadow-neutral-700 dark:shadow-neutral-400 p-3"
      >
        <section>
          <div className="flex">
            <div className="w-full relative">
              <AvatarImage className="w-28 h-28" />
              <div
                onClick={() => setOpen(!open)}
                className="bg-lime-400 w-3 h-3 cursor-pointer rounded-full absolute top-20 left-[6rem] animate-pulse"
              />
              {open && (
                <div className="border bg-black dark:bg-transparent border-lime-400 h-6 flex items-center justify-center rounded-2xl w-fit px-4 absolute top-[4.2rem] left-[6.9rem] transition-all duration-300 ease-in">
                  <p className="text-[11px] font-medium text-lime-300 ">
                    Open to hire
                  </p>
                </div>
              )}
              <h1 className="font-medium text-xl dark:text-neutral-300 mt-3">
                Muhammad Angga Adytya
              </h1>
              <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mt-2">
                Frontend Developer
              </p>

              <div className="absolute top-0 right-0">
                <div className="flex gap-x-2 w-full h-fit ">
                  <HomeButton href="/" label="Home" />
                  <ToggleTheme className="text-neutral-100 hover:scale-150 transition-all duration-300 ease-in-out" />
                  <CommandButton />
                </div>
              </div>
            </div>
          </div>
          <SkillText />
          <LineBreak />
          <Bio project={All_Projects} />
          <LineBreak />
          <WorkHistory />
        </section>
      </motion.header>
    </>
  );
}

export default LeftPage;
