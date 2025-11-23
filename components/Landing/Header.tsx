import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
const Header = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 ">
      <nav className="flex max-w-4xl mx-auto  items-center justify-between border-t  px-4 py-3 ">
        <div className="flex items-center gap-2">
          {/* <div className="size-7 rounded-full  " /> */}
          <h1 className="text-base font-semibold md:text-2xl font-logo px-1 py-2 rounded-full bg-blue-200 text-black">AR</h1>
        </div>
        <div className="flex gap-2 items-center">
          {/* <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          Login
        </button> */}
          <div>
            <div className="font-medium">Portfolio</div>

          </div>
          <AnimatedThemeToggler className="rounded-md border p-2 shadow-md" duration={500} />
        </div>
      </nav>
    </div>
  )
}

export default Header