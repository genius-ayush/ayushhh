import { HeroSectionOne } from "@/components/Landing/Body";
import Separator from "@/components/ui/section-separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-mono">
      <HeroSectionOne />
      <Separator />
    </div>
  );
}
