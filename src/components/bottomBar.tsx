import React from "react";

export default function bottomBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-0 z-50 left-0 right-0 w-full transition-all shadow-3xl bg-white dark:bg-black dark:text-white dark:bg-opacity-80 bg-opacity-80 backdrop-filter backdrop-brightness-200 dark:bg-brightness-50 backdrop-saturate-200 backdrop-blur-3xl ">
      <div className="flex-grow flex justify-between items-center mx-auto md:w-2/3 px-8 p-4 xl:w-1/2">
        {children}
      </div>
    </div>
  );
}
