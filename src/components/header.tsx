"use client";

import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-#181A1B">
    <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
      <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
        <ScrollLink
          to="hero" 
          smooth={true}
          duration={500} 
          offset={-50} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <p className="text-white text-[18px] font-bold flex">
            <span className="sm:block hidden">LA Driving School</span>
          </p>
        </ScrollLink>
      </div>
  
      <div className="flex lg:justify-left"></div>
      <div className="flex justify-end w-full gap-4">
        <ScrollLink
          to="contacts" 
          smooth={true} 
          duration={500} 
          offset={-50} 
          className="no-underline"
        >
          <Button>Contact Us</Button>
        </ScrollLink>
      </div>
  
    </div>
  </header>
  
  );
};
