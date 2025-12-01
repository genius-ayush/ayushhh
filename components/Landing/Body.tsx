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
      <Header />
      <div className="relative mx-auto  flex max-w-4xl flex-col items-center justify-center ">

        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80"></div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80"></div>

        <DisplayPicture />
        <br />
        <Separator />

        <Introduction />

        <Separator />

        <Socials/>

        <Separator/>

        <About/>

        <Separator/>

        <Graph/>

        <Separator/>  

      <TechStack/>

        <Separator/>

        <Experience/>

        <Separator />

        <Projects/>

        <Separator />

        <Footer/>


      </div>



    </div>
  );
}

