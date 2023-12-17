import LeftPage from "@/modules/dashboard/layouts/LeftPage";
import RightPage from "@/modules/dashboard/layouts/RightPage";
import React, { Suspense } from "react";
import Loading from "../loading";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[78rem] mx-auto">
      <div className="gap-3 flex md:mt-5 flex-col md:flex-row justify-center">
        <LeftPage />
        <Suspense fallback={<Loading />}>
          
          {children}
          </Suspense>
        <RightPage />
      </div>
    </div>
  );
}
