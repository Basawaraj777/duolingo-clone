import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { SideBar } from "./sidebar";

type Props = {};

export const MobileSideBar = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 x-[100px] " side="left">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};
