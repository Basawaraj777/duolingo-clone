import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px] ">
      <Button>Default</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>

      <Button variant="secondary">Secaonday</Button>
      <Button variant="secondaryOutline">Secondary Outline Outline</Button>

      <Button variant="danger">DANGER</Button>
      <Button variant="dangerOutline">DANGER OUTLINE</Button>

      <Button variant="super">SUPER</Button>
      <Button variant="superOutline">SUPER OUTLINE</Button>

      <Button variant={"ghost"}>GHOST</Button>

      <Button variant="siderbar">SIDEBAR</Button>
      <Button variant="sidebarOutline">SIDEBAR OUTLINE</Button>
    </div>
  );
};

export default page;
