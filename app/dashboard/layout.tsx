"use client";
import LeftPage from "@/modules/dashboard/layouts/LeftPage";
import RightPage from "@/modules/dashboard/layouts/RightPage";
import React, { Suspense } from "react";
import Loading from "../loading";
import { SessionProvider } from "next-auth/react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[78rem] mx-auto">
      <div className="gap-3 flex md:mt-5 flex-col md:flex-row justify-center">
        <LeftPage />
        <Suspense fallback={<Loading />}>
          <SessionProvider>{children}</SessionProvider>
        </Suspense>
        <RightPage />
      </div>
    </div>
  );
}
