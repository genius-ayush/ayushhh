import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
const Header = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 border-t mt-2">
      <nav className="flex max-w-4xl border-l border-r mx-auto  items-center justify-between border-t  px-4 py-3 bg-[#ffffff] dark:bg-[#0a0a0a]">


        <div className="flex items-center gap-2">
          <h1 className="text-base font-semibold md:text-2xl font-logo  py-1 rounded-full dark:text-white text-black tracking-tighter">AR</h1>
        </div>
        <div className="flex gap-4 items-center">

          <div>
            <div className="font-semibold">Portfolio</div>

          </div>
          <div className="border-l">
          <AnimatedThemeToggler className="rounded-md border p-1 shadow-md ml-5" duration={1000} />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header