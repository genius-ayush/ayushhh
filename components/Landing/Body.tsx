"use client";


import { motion } from "motion/react";
import Header from "./Header";
import DisplayPicture from "./DisplayPicture";
import SectionSeparator from "../ui/section-separator";
import Introduction from "./Introduction";
import Separator from "../ui/section-separator";

export function HeroSectionOne() {
  return (
    <div>
    <Header/>
    <div className="relative mx-auto  flex max-w-4xl flex-col items-center justify-center ">
      
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80"></div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80"></div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80"></div>

      {/* <div className="px-4 py-10 md:py-20"> */}
        
         <DisplayPicture/>
        
         <Separator/>

         <Introduction/>
      {/* </div> */}
    </div>
    

    
    </div>
  );
}

