import Link from "next/link";
import React from "react";
import { PiHouseLight } from "react-icons/pi";

interface HomeButtonProps {
  href: string;
  label: string;
}

const HomeButton = ({ href, label }: HomeButtonProps) => {
  return (
    <Link href={href} aria-label={label}>
      <span className="bg-neutral-800 dark:bg-neutral-700/50 h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
        <PiHouseLight className=" text-neutral-100 hover:scale-150 transition-all duration-300 ease-in-out" />
      </span>
    </Link>
  );
};

export default HomeButton;
