"use client";
import React from "react";
import { useTheme } from "next-themes";
import { PiSunLight, PiMoonLight } from "react-icons/pi";

interface ToggleThemeProps {
  className?: string;
}

export default function ToggleTheme({ className }: ToggleThemeProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      id="dark-mode-switcher"
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="dark:bg-neutral-700/50 bg-neutral-800 h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
    >
      {theme === "light" ? (
        <PiSunLight className={`text-neutral-100 ${className}`} />
      ) : (
        <PiMoonLight className={`text-neutral-100 ${className}`} />
      )}
    </button>
  );
}
