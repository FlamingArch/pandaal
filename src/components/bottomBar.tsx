import React from "react";

export default function bottomBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-0 z-50 left-0 right-0 w-full transition-all shadow-3xl bg-white bg-opacity-60 backdrop-filter backdrop-brightness-200 backdrop-saturate-200 backdrop-blur-3xl ">
      <div className="flex-grow flex justify-between items-center mx-auto px-8 p-4 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3">
        {children}
      </div>
    </div>
  );
}
