"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";

const PROJECTS = [
    {
        logo: "/drift.png",
        title: "Drift",
        period: "2025 – ∞",
        description:
            "A Solana-based staking platform enabling seamless wallet connections, real-time on-chain interactions, and secure token transactions. Designed with a clean and intuitive UI, Drift offers fast performance and smooth user experience powered by modern frontend tooling.",
        features: [
            "Implemented wallet connect and on-chain staking interactions using @solana/web3.js",
            "Integrated real-time transaction data and program interactions",
            "Designed a clean, responsive UI using shadcn/ui, Tailwind CSS, and Framer Motion",
            "Boosted performance with smart caching and state management using React Query",
            "Delivered a secure and reliable staking flow with optimized user experience"
        ],
        tags: [
            "Solana",
            "@solana/web3.js",
            "React.js",
            "Next.js",
            "React Query",
            "Tailwind CSS",
            "shadcn/ui",
            "Framer Motion"
        ],
        link: "https://drift-lst-platform.vercel.app/"
    },
    {
        logo: "/solbot.png",
        title: "SolBot",
        period: "2025 – ∞",
        description:
            "A high-performance Telegram bot that delivers real-time Solana token prices, market analytics, and on-chain insights. Designed for speed and accuracy, SolBot provides instant token lookups with a seamless conversational interface.",
        features: [
            "Fetched real-time Solana token data, prices, and market statistics",
            "Used @solana/web3.js and custom RPC calls for fast on-chain lookups",
            "Implemented efficient bot command handlers for seamless user interactions",
            "Optimized API responses and caching for low-latency performance",
            "Built a scalable architecture suitable for token tracking and analytics"
        ],
        tags: [
            "Solana",
            "@solana/web3.js",
            "Telegram Bot",
            "RPC",
            "Caching",
            "API Optimization",
            "TypeScript"
        ],
        link: "https://github.com/your-repo"
    },
    {
        logo: "/quickmint.png",
        title: "QuickMint",
        period: "2025 – ∞",
        description:
            "A Solana token launchpad that enables users to instantly create and deploy SPL tokens without writing code. QuickMint streamlines token creation with an intuitive UI, automated on-chain interactions, and smooth transaction workflows.",
        features: [
            "Built a full launchpad for creating and deploying SPL tokens on Solana",
            "Used @solana/web3.js and on-chain program interactions for token deployment",
            "Designed a clean and responsive UI using shadcn/ui and Tailwind CSS",
            "Enabled smooth transaction flows with optimized user interactions",
            "Delivered a no-code token creation process accessible to all users"
        ],
        tags: [
            "Solana",
            "@solana/web3.js",
            "SPL Tokens",
            "Launchpad",
            "Tailwind CSS",
            "shadcn/ui",
            "UI/UX",
            "On-chain Programs"
        ],
        link: "https://github.com/your-repo"
    },
    {
        logo: "/bhaobhao.png",
        title: "PawGroom",
        period: "2025 – ∞",
        description:
            "A premium landing page for a home-based pet grooming startup, designed to build trust and elevate the brand identity. The platform showcases personalized grooming services delivered by certified experts, ensuring pets look and feel their best—all without leaving home.",
        features: [
            "Crafted a modern, visually appealing landing page focused on brand credibility and user trust",
            "Implemented responsive layouts and polished micro-interactions using React and Tailwind CSS",
            "Designed smooth motion effects and animated hero sections with Framer Motion",
            "Developed a user-centric interface with strong UX patterns to highlight services and offerings",
            "Built a consistent visual identity and component system directly from Figma prototypes"
        ],
        tags: [
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "UI/UX",
            "Figma",
            "Brand Design",
            "Landing Page"
        ],
        link: "https://bhowbhow.vercel.app/"
    },
    {
        logo: "/devdiaries.png",
        title: "Dev Diaries",
        period: "September 2024",
        description:
            "A feature-rich blogging platform built for developers to write, publish, and manage technical content. Dev Diaries provides a seamless reading and writing experience with secure authentication, dynamic blog workflows, and an engaging, responsive UI.",
        features: [
            "Developed a scalable backend capable of handling dynamic blog creation, editing, publishing, and deletion",
            "Implemented secure user authentication to protect user accounts and author content",
            "Designed an interactive frontend with smooth navigation and responsive layouts",
            "Integrated a content-driven dashboard for authors to manage blogs efficiently",
            "Created a polished user experience optimized for both desktop and mobile readers"
        ],
        tags: [
            "Blog Platform",
            "Authentication",
            "Fullstack Development",
            "Content Management",
            "Responsive UI",
            "Web App"
        ],
        link: "https://dev-diaries-one.vercel.app/  "
    },

    {
        logo: "/voiceHire.png",
        title: "VoiceHire AI",
        period: "2025 – ∞",
        description:
            "An AI-powered hiring automation platform that transforms the recruitment workflow by generating job posts, assigning role-specific interview questions, and ranking candidates intelligently. AutoHire AI streamlines evaluation using automated insights, reducing manual effort and improving hiring decisions.",
        features: [
            "Developed a full hiring pipeline with job creation, interview question assignment, and candidate evaluation",
            "Implemented AI-driven scoring and ranking models to analyze responses and surface top candidates",
            "Built a responsive dashboard using Next.js for recruiters to review, compare, and shortlist applicants",
            "Designed a scalable backend with Node.js, TypeScript, Prisma ORM, and PostgreSQL",
            "Integrated LLM-based insights to automate question generation and candidate assessment",
            "Ensured end-to-end type safety and performant database interactions with Prisma and PostgreSQL"
        ],
        tags: [
            "Next.js",
            "Node.js",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "LLM",
            "AI Interviewing",
            "Recruitment Automation"
        ],
        link: "https://your-project-link"
    }
    ,
    {
        logo: "/careerpitch.png",
        title: "CareerPitch",
        period: "2025 – ∞",
        description:
            "An AI-powered referral accelerator that helps job seekers stand out by generating personalized, high-impact messages for potential referrers. CareerPitch transforms the cold outreach experience into a compelling, conversion-ready interaction tailored to each company and recruiter.",
        features: [
            "Built a platform that generates tailored, professional referral messages using GPT-powered text generation",
            "Integrated secure authentication and user session management using NextAuth",
            "Developed a clean, modern interface with shadcn/ui and responsive layouts in Next.js",
            "Enabled users to customize outreach messages based on roles, companies, and tone",
            "Streamlined the referral process by reducing outreach friction and increasing response rates"
        ],
        tags: [
            "Next.js",
            "NextAuth",
            "GPT API",
            "AI",
            "shadcn/ui",
            "Tailwind CSS",
            "Job Referrals",
            "Personal Branding"
        ],
        link: "https://career-pitch.vercel.app/"
    }

    // add rest of your projects here...
    // Make sure PROJECTS.length > 4 to see the button
];

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

    return (
        <div className="mb-6 border-b w-full">
            <h1 className="text-3xl font-bold text-center p-2 border-t mt-6 mb-2">
                Projects <span className="text-sm text-zinc-500 dark:text-zinc-400">({PROJECTS.length})</span>
            </h1>

            <div className="space-y-2">
                {visibleProjects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>

            {PROJECTS.length > 4 && (
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
