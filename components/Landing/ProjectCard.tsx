"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import { SimpleTooltip } from "../ui/tooltip";

interface ProjectCardProps {
  logo: string
  title: string;
  period: string;
  description: string;
  features: string[];
  tags: string[];
  link?: string;
}

export function ProjectCard({
  logo,
  title,
  period,
  description,
  features,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <Card className="border border-zinc-200 bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white hover:bg-zinc-50 dark:hover:bg-[#0f0f11] transition rounded-none">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="px-4 py-1 hover:no-underline">
            <div className="flex items-center w-full">
              <Image
                src={logo}
                alt={title}
                width={40}
                height={40}
                className="mr-4 rounded-full"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{title}</h3>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{period}</span>
              </div>

              {link && (
                <div
                  className="ml-auto mr-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <SimpleTooltip content="View Project">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                    >
                      <LinkIcon size={20} />
                    </a>
                  </SimpleTooltip>
                </div>
              )}
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <CardContent className="space-y-4 pt-2 px-4 pb-4">
              <p className="text-zinc-600 dark:text-zinc-300">{description}</p>

              <ul className="list-disc ml-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-zinc-100 text-zinc-700 border border-zinc-200 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
