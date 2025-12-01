import Image from "next/image";

import { cn } from "@/lib/utils";

import { Panel, PanelContent } from "./Panel";
import { SimpleTooltip } from "../ui/tooltip";

const TECH_STACK = [
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    urldark: "/typescript_dark.svg",
    urllight: "/typescript_dark.svg",
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    urldark: "/js.svg",
    urllight: "/js.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",

    categories: ["Language"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    urldark: "/nodejs.svg",
    urllight: "/nodejs.svg",
    categories: ["Runtime Environment"],
  },
  {
    key: "bun",
    title: "Bun",
    href: "https://bun.sh/",
    urldark: "/bun.svg",
    urllight: "/bun.svg",
    categories: ["Runtime Environment"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    urldark: "/react-navigation.svg", 
    urllight: "/react-navigation.svg",
    categories: ["Library", "UI Library"],
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    urldark: "/nextjs_dark.svg",
    urllight: "/nextjs_light.svg",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    urldark: "/tailwindcss.svg",
    urllight: "/tailwindcss.svg",
    categories: ["Framework"],
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    urldark: "/shadcn_dark.svg",
    urllight: "/shadcn_light.svg",
    categories: ["Library", "Component Library"],
    theme: true,
  },
  {
    key: "radixui",
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    urldark: "/radixui-dark.svg",
    urllight: "/radixui-light.svg",
    categories: ["Library", "Component Library"],
    theme: true,
  },
  {
    key: "motion",
    title: "Motion",
    href: "https://motion.dev/",
    urldark: "/motion.svg",
    urllight: "/motion.svg",
    categories: ["Library", "Animation"],
  },
  {
    key: "react-router",
    title: "React Router",
    href: "https://reactrouter.com/",
    urldark: "/react-router-dark.svg",
    urllight: "/react-router-light.svg",
    categories: ["Library", "Navigation"],
    theme: true,
  },
  {
    key: "react-navigation",
    title: "React Navigation",
    href: "https://reactnavigation.org/",
    urldark: "/react-navigation.svg",
    urllight: "/react-navigation.svg",
    categories: ["Library", "Navigation"],
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    urldark: "/git.svg",
    urllight: "/git.svg",
    categories: ["Version Control"],

  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    urldark: "/docker.svg",
    urllight: "/docker.svg",
    categories: ["Containerization"],
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    urldark: "/mysql.svg",
    urllight: "/mysql.svg",
    categories: ["Database"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    urldark: "/mongodb.svg",
    urllight: "/mongodb.svg",
    categories: ["Database"],
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    urldark: "/redis.svg",
    urllight: "/redis.svg",
    categories: ["Database"],
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    urldark: "/figma.svg",
    urllight: "/figma.svg",
    categories: ["Tools", "Design"],
  },
  {
    key: "ps",
    title: "Adobe Photoshop",
    href: "https://www.adobe.com/vn_en/products/photoshop.html",
    urldark: "/ps.svg",
    urllight: "/ps.svg",
    categories: ["Tools", "Design"],
  },
  {
    key: "chatgpt",
    title: "ChatGPT",
    href: "https://chatgpt.com/",
    urldark: "/chatgpt-dark.svg",
    urllight: "/chatgpt-light.svg",
    categories: ["Tools", "AI"],
    theme: true,
  },
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com/",
    urldark: "/awsdark.svg",
    urllight: "/awsdark.svg",
    categories: ["Tools"],
  },
  {
    key: "nginx",
    title: "Nginx",
    href: "https://nginx.org/",
    urldark: "/nginx-icon.svg",
    urllight: "/nginx-icon.svg",
    categories: ["Server"],
  },
  {
    key: "linux",
    title: "Linux",
    href: "https://www.linux.com/",
    urldark: "/linux.svg",
    urllight: "/linux.svg",
    categories: ["OS"],
  },
];

export default function TechStack() {
  return (
    <Panel id="stack" className="mb-6 border-b">
      <h1 className="text-3xl font-bold text-center p-2 border-t mt-6">Tech Stack</h1>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            const isThemeDependent = tech.urldark !== tech.urllight;
            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                  >
                    {isThemeDependent ? (
                      <>
                        {/* Light Mode */}
                        <Image
                          src={tech.urllight}
                          alt={`${tech.title} light icon`}
                          width={32}
                          height={32}
                          className="block dark:hidden"
                          unoptimized
                        />

                        {/* Dark Mode */}
                        <Image
                          src={tech.urldark}
                          alt={`${tech.title} dark icon`}
                          width={32}
                          height={32}
                          className="hidden dark:block"
                          unoptimized
                        />
                      </>
                    ) : (
                      <Image
                        src={tech.urldark}
                        alt={`${tech.title} icon`}
                        width={32}
                        height={32}
                        className="block"
                        unoptimized
                      />
                    )}
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
