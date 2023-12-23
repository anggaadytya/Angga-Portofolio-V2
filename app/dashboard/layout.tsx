import NextAuthProvider from "@/libs/nextAuth";
import LeftPage from "@/modules/dashboard/layouts/LeftPage";
import RightPage from "@/modules/dashboard/layouts/RightPage";
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "../loading";
import "react-toastify/dist/ReactToastify.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[78rem] mx-auto">
      <div className="gap-3 flex md:mt-5 flex-col md:flex-row justify-center">
        <LeftPage />
        <NextAuthProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextAuthProvider>
        <RightPage />
      </div>
      <ToastContainer />
    </div>
  );
}
