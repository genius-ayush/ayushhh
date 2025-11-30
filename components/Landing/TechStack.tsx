import Image from "next/image";
import React from "react";

// import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./Panel";
import { SimpleTooltip } from "../ui/tooltip";

const TECH_STACK = [
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  // {
  //   key: "python",
  //   title: "Python",
  //   href: "https://www.python.org/",
  //   categories: ["Language"],
  // },
  // {
  //   key: "php",
  //   title: "PHP",
  //   href: "https://www.php.net/",
  //   categories: ["Language"],
  // },
  // {
  //   key: "java",
  //   title: "Java",
  //   href: "https://www.java.com/",
  //   categories: ["Language"],
  // },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },
  {
    key: "bun",
    title: "Bun",
    href: "https://bun.sh/",
    categories: ["Runtime Environment"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },
  {
    key: "radixui",
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },
  {
    key: "motion",
    title: "Motion",
    href: "https://motion.dev/",
    categories: ["Library", "Animation"],
  },
  // {
  //   key: "mobx-state-tree",
  //   title: "MobX-State-Tree",
  //   href: "https://mobx-state-tree.js.org/",
  //   categories: ["State Management"],
  // },
  // {
  //   key: "redux",
  //   title: "Redux",
  //   href: "https://redux.js.org/",
  //   categories: ["State Management"],
  // },
  // {
  //   key: "antd",
  //   title: "Ant Design",
  //   href: "https://ant.design/",
  //   categories: ["Library", "UI Library"],
  // },
  {
    key: "react-router",
    title: "React Router",
    href: "https://reactrouter.com/",
    categories: ["Library", "Navigation"],
    theme: true,
  },
  {
    key: "react-navigation",
    title: "React Navigation",
    href: "https://reactnavigation.org/",
    categories: ["Library", "Navigation"],
  },
  // {
  //   key: "loopback",
  //   title: "LoopBack",
  //   href: "https://loopback.io/",
  //   categories: ["Framework"],
  // },
  // {
  //   key: "laravel",
  //   title: "Laravel",
  //   href: "https://laravel.com/",
  //   categories: ["Framework"],
  // },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
    
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database"],
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Tools", "Design"],
  },
  {
    key: "ps",
    title: "Adobe Photoshop",
    href: "https://www.adobe.com/vn_en/products/photoshop.html",
    categories: ["Tools", "Design"],
  },
  {
    key: "chatgpt",
    title: "ChatGPT",
    href: "https://chatgpt.com/",
    categories: ["Tools", "AI"],
    theme: true,
  },
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com/",
    categories: ["Tools"],
  },
];

export default function TechStack() {
  return (
    <Panel id="stack">
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
            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                  >
                    {tech.theme ? (
                      <>
                        <Image
                          src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-light.svg`}
                          alt={`${tech.title} light icon`}
                          width={32}
                          height={32}
                          className="hidden [html.light_&]:block"
                          unoptimized
                        />
                        <Image
                          src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-dark.svg`}
                          alt={`${tech.title} dark icon`}
                          width={32}
                          height={32}
                          className="hidden [html.dark_&]:block"
                          unoptimized
                        />
                      </>
                    ) : (
                      <Image
                        src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}.svg`}
                        alt={`${tech.title} icon`}
                        width={32}
                        height={32}
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
