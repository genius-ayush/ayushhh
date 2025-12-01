import React from 'react'
import { Card, CardContent } from '../ui/card'
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { BadgeCheck, FileDown } from 'lucide-react';
import { StripedPattern } from '../magicui/striped-pattern';

const texts = [
    "Building better experiences",
    "Software engineer",
    "Code. Craft. Create",
];

function DisplayPicture() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Card className="w-full max-w-6xl mt-7 p-6 bg-[#ffffff] dark:bg-[#0a0a0a] rounded-none overflow-hidden h-auto md:h-[250px]">
            <div className="relative h-auto md:h-[250px] w-full flex flex-col md:flex-row">

                {/* Pattern */}
                <StripedPattern className="stroke-[0.1] [stroke-dasharray:8,4]" />

                {/* CONTENT ON TOP */}
                <CardContent className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-0">

                    {/* Avatar */}
                    <div className="relative w-52 h-52 rounded-none overflow-hidden border-2 border-zinc-700 shrink-0">
                        <Image
                            src="/ayushdp.png"
                            alt="Avatar"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0">
                        <div className="flex items-center gap-2">
                            <h1 className="text-3xl font-semibold">Ayush Rawal</h1>
                            <BadgeCheck className="w-5 h-5 text-sky-500" />
                        </div>

                        <div className="mt-1 h-6 overflow-hidden relative leading-none whitespace-nowrap w-full flex justify-center md:justify-start">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={index}
                                    initial={{ rotateX: 90, opacity: 0 }}
                                    animate={{ rotateX: 0, opacity: 1 }}
                                    exit={{ rotateX: -90, opacity: 0 }}
                                    transition={{ duration: 0.45, ease: "easeInOut" }}
                                    className="text-zinc-400 text-sm absolute"
                                >
                                    {texts[index]}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Resume Button – added here */}
                        <a
                            href="https://drive.google.com/file/d/1RvrYEinaMoMmTgyG2-W09jWAkZHzCdS2/view?usp=sharing" // or "/Ayush_Rawal_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium
                                       border border-zinc-300 dark:border-zinc-700 rounded-md
                                       hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black
                                       transition-colors"
                        >
                            <FileDown className="w-4 h-4" />
                            Download Resume
                        </a>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
}

export default DisplayPicture;
