import React from "react";
import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen text-black dark:text-white">
      <Spinner size="lg" className="text-black dark:text-white"/>
    </div>
  );
}
