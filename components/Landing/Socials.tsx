import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SocialLinkItem } from "../ui/social-link-items";
import { Panel, PanelHeader, PanelTitle } from "./Panel";

const links = [
  {
    title: "X (formerly Twitter)",
    description: "@iamcdai",
    icon: "https://assets.chanhdai.com/images/link-icons/x.webp",
    href: "https://twitter.com/iamcdai",
  },
  {
    title: "GitHub",
    description: "ncdai",
    icon: "https://assets.chanhdai.com/images/link-icons/github.webp",
    href: "https://github.com/ncdai",
  },
  {
    title: "LinkedIn",
    description: "ncdai",
    icon: "https://assets.chanhdai.com/images/link-icons/linkedin.webp",
    href: "https://linkedin.com/in/ncdai",
  },
  {
    title: "daily.dev",
    description: "@ncdai",
    icon: "https://assets.chanhdai.com/images/link-icons/dailydotdev.webp",
    href: "https://app.daily.dev/ncdai",
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



