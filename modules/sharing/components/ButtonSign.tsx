import React from 'react'
import { FaGithub } from 'react-icons/fa'

const ButtonSign = ({ signIn }: { signIn: () => void }) => {
  return (
    <button
    className="flex items-center justify-center gap-x-3 mt-4 bg-[#696969] h-9 w-full rounded-md text-xs font-medium text-neutral-50 tracking-wide transition-all"
    onClick={signIn}
  >
    <FaGithub /> Login With Github
  </button>
  )
}

export default ButtonSign