import React from "react";

export default function DownloadPandaal() {
  return (
    <a href="https://play.google.com/store/apps/details?id=com.hoest.pandaal">
      <div className="rounded-2xl grid place-items-center text-center text-slate-700 fill-primary transition-all border-gray-100 cursor-pointer shadow-md p-4 border gap-3 hover:bg-indigo-50 hover:shadow-indigo-200 hover:shadow-xl">
        <IconGooglePlay className="w-16 h-16 fill-primary" />
        <p className="text-xl font-bold">Download pandaal from Play Store</p>
        <p className="opacity-80"></p>
      </div>
    </a>
  );
}
