import LeftPage from "@/components/layouts/LeftPage";
import MainContent from "@/components/layouts/MainContent";
import RightPage from "@/components/layouts/RightPage";
import React from "react";

export default function page() {
  return (
    <div className="max-w-[78rem] mx-auto">
      <div className="gap-3 flex md:mt-5 flex-col md:flex-row justify-center">
        <LeftPage />
        <MainContent />
        <RightPage />
      </div>
    </div>
  );
}
