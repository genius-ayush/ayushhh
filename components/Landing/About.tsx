import { Panel, PanelContent, PanelHeader, PanelTitle } from "./Panel"

export default function About() {
    return (
     <section className="text-sm leading-6  pb-4 border-b mb-6">
        <h1 className="text-3xl font-bold text-center p-2 border-t mt-6">About</h1>
      <ul className="list-disc pl-5 space-y-3 ml-4 pr-6">
        <li>
          <strong>Full-Stack Developer</strong> focused on shipping fast,
          reliable, and scalable web & blockchain applications.
        </li>

        <li>
          Skilled in <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
          <strong>TypeScript</strong>, <strong>Node.js</strong>,{" "}
          <strong>Solana</strong>, and <strong>Ethereum</strong> ecosystems —
          building performant UIs and secure on-chain interactions.
        </li>

        <li>
          Currently at <strong>SquaredLabs</strong>, developing production-grade
          interfaces using <strong>React Query</strong>,{" "}
          <strong>Tailwind CSS</strong>, <strong>shadcn/ui</strong>, and{" "}
          <strong>Framer Motion</strong> while optimizing rendering and user
          flows.
        </li>

        <li>
          Previously built a full e-commerce platform at{" "}
          <strong>Mizrebel</strong> using <strong>Next.js</strong>,{" "}
          <strong>Node.js</strong>, <strong>PostgreSQL</strong>, and{" "}
          <strong>AWS</strong>.
        </li>

        <li>
          Creator of blockchain tools and products:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Drift</strong> — Solana staking platform
            </li>
            <li>
              <strong>SolBot</strong> — Telegram bot for token insights
            </li>
            <li>
              <strong>QuickMint</strong> — SPL token launch utility
            </li>
          </ul>
        </li>

        <li>
          Passionate about clean architectures, developer experience, and
          turning ideas into polished, user-centric products.
        </li>
      </ul>
    </section>
  );
}