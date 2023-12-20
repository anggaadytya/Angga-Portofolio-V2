import React from 'react'

const LogOut = ({ signOut }: { signOut: () => void }) => {
  return (
    <button
      className="flex items-center justify-center gap-x-3 bg-[#696969] h-9 w-16 rounded-md text-xs font-medium text-neutral-50 tracking-wide transition-all "
      onClick={signOut}
    >
      Log Out
    </button>
  )
}

export default LogOut