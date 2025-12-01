"use client";

import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ProjectCard } from "./ProjectCard";
import { Button } from "../ui/button";

const EXPERIENCES = [
    {
        company: "SquaredLabs",
        logo: "/squaredLabs.png", // replace with your logo
        role: "Fullstack Developer",
        type: "Full-time | Remote",
        period: "May 2024 – Present",
        bullets: [
            "Built and optimized frontend features using React.js, React Query, and reusable component patterns.",
            "Integrated Solana and Ethereum blockchain using ethers.js and @solana/web3.js.",
            "Delivered wallet connections, on-chain reads/writes, and secure transaction handling.",
            "Developed responsive UIs using shadcn/ui, Tailwind CSS, and Framer Motion.",
            "Improved performance with smart caching and optimized UI responsiveness.",
        ],
        tags: [
            "React.js",
            "Next.js",
            "Solana",
            "Ethereum",
            "React Query",
            "Tailwind CSS",
            "shadcn/ui",
            "Framer Motion",
            "Ethers.js",
            "@solana/web3.js",
        ],
    },
    {
        company: "Mizrebel",
        logo: "/mizrebel.png", // replace with your logo
        role: "Freelance Developer",
        type: "Contract | Remote",
        period: "Jan 2024 – Feb 2024",
        bullets: [
            "Developed a full-stack ecommerce platform using React.js, Next.js, and Tailwind CSS.",
            "Built the Node.js/Express backend with PostgreSQL Prisma.",
            "Integrated AWS — S3, EC2, and CloudFront for hosting and performance optimization.",
            "Enhanced UI with ShadCN, Framer Motion, and ensured type safety using TypeScript + Zod.",
        ],
        tags: [
            "React.js",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "Prisma",
            "AWS",
            "S3",
            "EC2",
            "CloudFront",
            "TypeScript",
            "Zod",
        ],
    },
];

export default function Experience() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? EXPERIENCES : EXPERIENCES.slice(0, 4);

    return (
        <div className="mb-6 border-b w-full">
            <h1 className="text-3xl font-bold text-center p-2 border-t mt-6 mb-2">
                Experience <span className="text-sm text-zinc-500 dark:text-zinc-400">({EXPERIENCES.length})</span>
            </h1>

            <div className="space-y-2">
                {visibleProjects.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        title={project.company}
                        description={`${project.role} • ${project.type}`}
                        features={project.bullets}
                        period={project.period}
                        tags={project.tags}
                        logo={project.logo}
                    />
                ))}
            </div>

            {EXPERIENCES.length > 4 && (
                <div className="flex justify-center py-4">
                    <Button
                        variant="secondary"
                        className="px-6 py-2 text-sm rounded-md border border-zinc-200 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Show Less ▲" : "Show More ▼"}
                    </Button>
                </div>
            )}
        </div>
    );
}
