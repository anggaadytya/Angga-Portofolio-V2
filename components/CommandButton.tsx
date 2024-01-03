"use client";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardCommandKey } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useCommandStore } from "@/stores/sharingStore";
import { SocialLinks, MenuLinks, AnalyticsLink } from "@/constant/index";
import Link from "next/link";

const CommandButton = () => {
  const { open, setOpen } = useCommandStore();
  const redDivRef = useRef<HTMLDivElement | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");

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

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();

      setOpen(true);
    }
  };

  const handleCloseCommand = () => {
    setOpen(false);
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
      document.addEventListener("keydown", handleKeyPress);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscKey);
        document.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, []);

  const filterLinks = [...MenuLinks, ...SocialLinks, ...AnalyticsLink].filter(
    (link) => link.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const pagesLinks = filterLinks.filter((link) => link.menu === "Pages");
  const socialLinks = filterLinks.filter((link) => link.menu === "Link");
  const analyticLinks = filterLinks.filter(
    (link) => link.externalLink === true
  );

  return (
    <>
      <button
        id="command-button"
        aria-label="Command Button"
        onClick={handleOpen}
      >
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
                  onChange={handleSearchInput}
                  className="w-full border rounded-md px-2 py-3 focus:outline-none placeholder:outline-none border-none bg-neutral-100 dark:bg-neutral-800"
                />
                <span className="rounded-md bg-[#696969] h-8 w-14 flex items-center justify-center text-neutral-50">
                  esc
                </span>
              </div>

              <section className="h-[15rem] flex flex-col py-4 overflow-y-auto scrollbar-hide">
                {pagesLinks.length > 0 && (
                  <>
                    <h1 className="px-4 text-neutral-700 dark:text-neutral-400 tracking-wider">
                      PAGES
                    </h1>
                    {pagesLinks.map((link, index) => (
                      <Link
                        href={link.href}
                        className="flex items-center justify-between py-2 px-4 hover:bg-neutral-600 hover:cursor-pointer hover:rounded-md"
                        key={index}
                        onClick={handleCloseCommand}
                      >
                        <div className="flex items-center gap-x-2">
                          {link.icons ? link.icons : null}
                          <h1 className="text-neutral-400 dark:text-neutral-200 tracking-wider text-sm">
                            {link.title}
                          </h1>
                        </div>
                        <span className="rounded-md bg-[#696969] h-7 w-12 flex items-center justify-center text-neutral-50 text-xs">
                          {link.menu}
                        </span>
                      </Link>
                    ))}
                  </>
                )}

                {socialLinks.length > 0 && (
                  <>
                    <h1 className="px-4 text-neutral-700 dark:text-neutral-400 tracking-wider pt-4">
                      SOCIAL
                    </h1>
                    {socialLinks.map((link, index) => (
                      <Link
                        href={link.href}
                        className="flex items-center justify-between py-2 px-4 hover:bg-neutral-600 hover:cursor-pointer hover:rounded-md"
                        key={index}
                        onClick={handleCloseCommand}
                      >
                        <div className="flex items-center gap-x-2">
                          {link.icons ? link.icons : null}
                          <h1 className="text-neutral-400 dark:text-neutral-200 tracking-wider text-sm">
                            {link.title}
                          </h1>
                        </div>
                        <span className="rounded-md bg-[#696969] h-7 w-12 flex items-center justify-center text-neutral-50 text-xs">
                          {link.menu}
                        </span>
                      </Link>
                    ))}
                  </>
                )}

                {analyticLinks.length > 0 && (
                  <>
                    <h1 className="px-4 text-neutral-700 dark:text-neutral-400 tracking-wider pt-4">
                      ANALYTICS
                    </h1>
                    {analyticLinks.map((link, index) => (
                      <Link
                        href={link.href}
                        className="flex items-center justify-between py-2 px-4 hover:bg-neutral-600 hover:cursor-pointer hover:rounded-md"
                        key={index}
                        onClick={handleCloseCommand}
                      >
                        <div className="flex items-center gap-x-2">
                          {link.icons ? link.icons : null}
                          <h1 className="text-neutral-400 dark:text-neutral-200 tracking-wider text-sm">
                            {link.title}
                          </h1>
                        </div>
                        <span className="rounded-md bg-[#696969] h-7 w-12 flex items-center justify-center text-neutral-50 text-xs">
                          {link.menu}
                        </span>
                      </Link>
                    ))}
                  </>
                )}

                {filterLinks.length === 0 && (
                  <section className="h-[15rem] flex flex-col items-center justify-center">
                    <h1 className="text-neutral-700 dark:text-neutral-400">
                      No recent searches
                    </h1>
                  </section>
                )}
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandButton;
