import Link from 'next/link';
import React from 'react'
import { MdKeyboardCommandKey } from "react-icons/md";

const CommandButton = () => {
  return (
    <Link href={"/"} aria-label={""}>
      <span className="bg-neutral-800 dark:bg-neutral-700/50 h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out">
        <MdKeyboardCommandKey className=" text-neutral-100 hover:scale-150 transition-all duration-300 ease-in-out" />
      </span>
    </Link>
  )
}

export default CommandButton