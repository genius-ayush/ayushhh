import React from "react";

const Separator = () => {
  return (
    <div className="w-full h-8 relative overflow-hidden bg-white dark:bg-[#0a0a0a] border-y border-neutral-200 dark:border-white/5 border-l border-r border-neutral-200 dark:border-white/10 ">
      <div
        className="absolute inset-0 block dark:hidden"
        style={{
          backgroundImage: "repeating-linear-gradient(-40deg, transparent, transparent 10px, rgba(0,0,0,0.12) 10px, rgba(0,0,0,0.12) 11px)"
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: "repeating-linear-gradient(-40deg, transparent, transparent 10px, rgba(255, 255, 255, 0.12) 10px, rgba(255,255,255,0.12) 11px)"
        }}
      />
    </div>
  );
};

export default Separator;
