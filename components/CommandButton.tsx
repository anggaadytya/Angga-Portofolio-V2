import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardCommandKey } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useCommandStore } from "@/stores/sharingStore";
import { SocialLinks } from "@/constant/index";

const CommandButton = () => {
  const { open, setOpen } = useCommandStore();
  const redDivRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event: any) => {
    if (redDivRef.current && !redDivRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleEscKey = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <>
      <button aria-label={""} onClick={handleOpen}>
        <span className="bg-neutral-800 dark:bg-neutral-700/50 h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
          <MdKeyboardCommandKey className="text-neutral-100 hover:scale-150 transition-all duration-300 ease-in-out" />
        </span>
      </button>
      {open && (
        <div
          className={`h-screen w-screen fixed top-0 left-0 flex items-center justify-center bg-neutral-800/70`}
        >
          <div
            ref={redDivRef}
            className="h-min w-[95%] md:w-[35rem] flex items-center rounded-md "
          >
            <div className="bg-neutral-100 dark:bg-neutral-800 w-full rounded-md border border-neutral-400">
              <div className="flex items-center border-b border-neutral-400 px-4">
                <CiSearch
                  size={30}
                  className="text-neutral-700 dark:text-neutral-400"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border rounded-md px-2 py-3 focus:outline-none placeholder:outline-none border-none bg-neutral-100 dark:bg-neutral-800"
                />
                <span className="rounded-md bg-[#696969] h-8 w-14 flex items-center justify-center text-neutral-50">
                  esc
                </span>
              </div>
              {/* <section className="h-[10rem] flex flex-col items-center justify-center">
                <h1 className="text-neutral-700 dark:text-neutral-400">
                  No recent searches
                </h1>
              </section> */}
              <section className="h-[10rem] flex flex-col py-4 overflow-y-auto ">
                <h1 className="px-4 text-neutral-700 dark:text-neutral-400 tracking-wider">
                  PAGES
                </h1>
                <div className="flex flex-col gap-4 mt-3">
                  <div className="flex items-center justify-between px-4">
                    <h1 className="text-neutral-400 dark:text-neutral-200 tracking-wider text-sm">
                      Home
                    </h1>
                    <span className="rounded-md bg-[#696969] h-7 w-12 flex items-center justify-center text-neutral-50 text-xs">
                      Pages
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-4">
                    <h1 className="text-neutral-400 dark:text-neutral-200 tracking-wider text-sm">
                      Project
                    </h1>
                    <span className="rounded-md bg-[#696969] h-7 w-12 flex items-center justify-center text-neutral-50 text-xs">
                      Pages
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-4">
                    <h1 className="text-neutral-400 dark:text-neutral-200 tracking-wider text-sm">
                      About
                    </h1>
                    <span className="rounded-md bg-[#696969] h-7 w-12 flex items-center justify-center text-neutral-50 text-xs">
                      Pages
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-4">
                    <h1 className="text-neutral-400 dark:text-neutral-200 tracking-wider text-sm">
                      Skill
                    </h1>
                    <span className="rounded-md bg-[#696969] h-7 w-12 flex items-center justify-center text-neutral-50 text-xs">
                      Pages
                    </span>
                  </div>
                </div>
                <h1 className="px-4 text-neutral-700 dark:text-neutral-400 tracking-wider mt-3">
                  SOCIAL
                </h1>
                <div className="flex flex-col gap-4 mt-3">
                  {SocialLinks.map((link, index) => (
                    <div
                      className="flex items-center justify-between px-4"
                      key={index}
                    >
                      <div className="flex items-center gap-x-2">
                        {link.icons}
                        <h1 className="text-neutral-400 dark:text-neutral-200 tracking-wider text-sm">
                          {link.title}
                        </h1>
                      </div>
                      <span className="rounded-md bg-[#696969] h-7 w-12 flex items-center justify-center text-neutral-50 text-xs">
                        Link
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandButton;
