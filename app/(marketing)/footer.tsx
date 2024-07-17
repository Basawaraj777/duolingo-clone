import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size={"lg"} variant="ghost" className="w-full">
          <Image
            src="/hr.svg"
            alt="Coratian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          CORATIAN
        </Button>

        <Button size={"lg"} variant="ghost" className="w-full">
          <Image
            src="/es.svg"
            alt="Spanish"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          SPANISH
        </Button>

        <Button size={"lg"} variant="ghost" className="w-full">
          <Image
            src="/fr.svg"
            alt="French"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          FRENCH
        </Button>

        <Button size={"lg"} variant="ghost" className="w-full">
          <Image
            src="/it.svg"
            alt="Itailian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          ITALIAN
        </Button>

        <Button size={"lg"} variant="ghost" className="w-full">
          <Image
            src="/jp.svg"
            alt="Japanese"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          JAPANESE
        </Button>
      </div>
    </footer>
  );
};
