"use client";
import { useEffect, useMemo, useState } from "react";
import ToggleTheme from "@/components/ToggleTheme";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AvatarImage from "@/components/AvatarImage";
import HomeButton from "@/components/HomeButton";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

const HomePage = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  const none = "none";
  const out = "out";

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: theme === "dark" ? "#111" : "#fff",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.6,
          },
        },
      },
      particles: {
        color: {
          value: theme === "dark" ? "#ffffff" : "#111111",
        },
        links: {
          color: theme === "dark" ? "#ffffff" : "#111111",
          distance: 170,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: none,
          enable: true,
          outModes: {
            default: out,
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [theme]);

  return (
    <main className="">
      <Particles id="tsparticles" options={options} className="-z-10 fixed" />
      <div className="p-5 flex flex-col items-center justify-center mx-auto w-full h-screen z-10">
        <AvatarImage />
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          className="pt-5"
        >
          <div className="font-bold text-xl md:text-4xl py-5">
            <TypeAnimation
              sequence={[
                "Muhammad Angga Adytya",
                2000,
                "Fullstack Web Developer",
                2000,
                "Frontend Developer",
                2000,
              ]}
              wrapper="span"
              speed={30}
              className="text-[1em] text-center flex justify-center"
              repeat={Infinity}
            />
          </div>
          <div>
            <p className="text-neutral-600 dark:text-neutral-400 lg:max-w-lg text-center font-normal">
              This is my personal website and showcase my project
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              stiffness: 260,
              type: "spring",
              damping: 20,
            },
          }}
          className="fixed bottom-7 flex border border-neutral-600 rounded-lg p-2 gap-x-5 text-neutral-500"
        >
          <HomeButton href="/dashboard" label="Dashboard" />
          <ToggleTheme className="hover:scale-150 transition-all duration-300 ease-in-out" />
        </motion.div>
      </div>
    </main>
  );
};

export default HomePage;
