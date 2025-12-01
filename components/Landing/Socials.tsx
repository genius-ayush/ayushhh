import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SocialLinkItem } from "../ui/social-link-items";
import { Panel, PanelHeader, PanelTitle } from "./Panel";

const links = [
  {
    title: "X (formerly Twitter)",
    description: "@ayushh_rawal_",
    icon: "https://assets.chanhdai.com/images/link-icons/x.webp",
    href: "https://x.com/ayushh_rawal_",
  },
  {
    title: "GitHub",
    description: "genius-ayush",
    icon: "https://assets.chanhdai.com/images/link-icons/github.webp",
    href: "https://github.com/genius-ayush",
  },
  {
    title: "LinkedIn",
    description: "ayush_rawal_",
    icon: "https://assets.chanhdai.com/images/link-icons/linkedin.webp",
    href: "https://www.linkedin.com/in/ayushrawal123/",
  },
  {
    title: "Instagram",
    description: "@ayushh_rawal_",
    icon: "/instagram.svg",
    href: "https://www.instagram.com/ayushh_rawal_",
  }
];

export default function Socials() {
  return (
    <Panel className="mt-6 mb-6">
      <h2 className="sr-only ">Social Links</h2>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        {/* <PanelHeader>
          <PanelTitle>Social Links</PanelTitle>
        </PanelHeader> */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          {links.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />;
          })}
        </div>
      </div>
    </Panel>
  );
}



