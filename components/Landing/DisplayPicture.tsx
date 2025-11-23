import React from 'react'
import { Card, CardContent } from '../ui/card'
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';
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
        <Card className="w-full max-w-6xl   mt-10  p-6  bg-[#ffffff] dark:bg-[#0a0a0a]">
            <CardContent className="flex items-center gap-4 p-0">
                {/* Avatar */}

                <div className="relative w-52 h-52 rounded-full overflow-hidden border-2 border-zinc-700 ">
                    <Image
                        src="/ayushdp.png"
                        alt="Avatar"
                        fill
                        className="object-cover"
                    />
                </div>


                {/* Text Section */}
                <div className="flex flex-col">
                    {/* <span className="text-xs text-zinc-500 font-medium mb-1">
                        text-3xl text-zinc-50 font-medium
                    </span> */}


                    <div className="flex items-center gap-2">
                        <h1 className="text-3xl font-semibold">Ayush Rawal</h1>
                        <BadgeCheck className="w-5 h-5 text-sky-500" />
                    </div>


                    <div className="mt-1 h-6 overflow-hidden relative leading-none whitespace-nowrap">
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
                </div>
            </CardContent>
        </Card>
    )
}

export default DisplayPicture