import { IconPreloader } from "@/components/icons";
import React from "react";

export default function loading() {
  return (
    <main className="flex gap-4 w-full h-[50vh] items-center justify-center">
      <IconPreloader className="w-6 h-6 stroke-black" /> <p>Loading</p>
    </main>
  );
}
