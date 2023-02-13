"use client";

import React from "react";
import { IconLocationEdit } from "@/components/icons";
import { useAppStore } from "@/context/app";
import Link from "next/link";

export default function location() {
  const currentCity = useAppStore((state) => state.currentCity);

  return (
    <div className="flex flex-col p-6 pt-0">
      <p>Hey, Wanderer</p>
      <p className="text-xl font-bold">Showing all the getaway spots near me</p>
      <Link
        href={"/location"}
        className="flex gap-3 text-secondary-500 fill-secondary-500 text-xl font-bold p-4 pl-0 hover:pl-4 hover:bg-secondary-50 transition-all rounded-xl"
      >
        <IconLocationEdit className="w-6 h-6" />
        {currentCity}
      </Link>
    </div>
  );
}
