import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardCommandKey } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const CommandButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const redDivRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (redDivRef.current && !redDivRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button aria-label={""} onClick={handleOpen}>
        <span className="bg-neutral-800 dark:bg-neutral-700/50 h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
          <MdKeyboardCommandKey className="text-neutral-100 hover:scale-150 transition-all duration-300 ease-in-out" />
        </span>
      </button>
      {isOpen && (
        <div className="h-screen w-screen fixed top-0 left-0 flex items-center justify-center bg-neutral-800/70 ">
          <div
            ref={redDivRef}
            className="h-min w-full md:w-[35rem] flex items-center rounded-md "
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
                <h1 className="rounded-md bg-[#696969] h-8 w-12 flex items-center justify-center text-neutral-50">
                  esc
                </h1>
              </div>
              <section className="h-[10rem] flex flex-col items-center justify-center">
                <h1 className="text-neutral-700 dark:text-neutral-400">
                  No recent searches
                </h1>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandButton;
