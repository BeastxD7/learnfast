import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";


export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between ">
        <Logo />

      </div>

<div className="w-[4vw] flex justify-around">
  <ModeToggle />
        <UserButton afterSignOutUrl="/" /> 
</div>
    </div>
  );
};