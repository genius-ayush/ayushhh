"use client";


import { motion } from "motion/react";
import Header from "./Header";
import DisplayPicture from "./DisplayPicture";
import Introduction from "./Introduction";
import Separator from "../ui/section-separator";
import Socials from "./Socials";
import About from "./About";
import Graph from "./Graph";
import TechStack from "./TechStack";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

export function HeroSectionOne() {
  return (
    <div>

      {/* <div
      style={{
          backgroundImage: "repeating-linear-gradient(-40deg, transparent, transparent 10px, rgba(255, 255, 255, 0.12) 10px, rgba(255,255,255,0.12) 11px)"
        }}
        className="pointer-events-none absolute inset-y-0 left-0 w-10 
        
        border-r border-neutral-800/60 dark:border-neutral-700/60"
      /> */}

      {/* RIGHT BORDER */}
      {/* <div
        className="pointer-events-none absolute inset-y-0 right-0 w-10
        bg-[repeating-linear-gradient(180deg,#0d0d0d_0px,#0d0d0d_2px,#111_2px,#111_6px)]
        border-l border-neutral-800/60 dark:border-neutral-700/60"
      /> */}
      
      <Header />
      <div className="relative mx-auto  flex max-w-4xl flex-col items-center justify-center px-4 md:px-0">

        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80"></div>
        <div className="absolute inset-y-0 right-0  h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80"></div>
        {/* <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80"></div> */}

        <DisplayPicture />
        <br />
        <Separator />

        <Introduction />

        <Separator />

        <Socials />

        <Separator />

        <About />

        <Separator />

        <Graph />

        <Separator />

        <TechStack />

        <Separator />

        <Experience />

        <Separator />

        <Projects />

        <Separator />

        <Footer />


      </div>



    </div>
  );
}

