import React from "react";
import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <Spinner size="lg" />
    </div>
  );
}
