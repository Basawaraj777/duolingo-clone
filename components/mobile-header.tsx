import React from "react";
import { MobileSideBar } from "./mobile-sidebar";

type Props = {};

export const MobileHeader = (props: Props) => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center bg-green-500 border-b fixed top-0 w-full z-50">
      <MobileSideBar />
    </nav>
  );
};
