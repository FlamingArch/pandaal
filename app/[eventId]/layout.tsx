import { IconBack } from "@/components/icons";
import Link from "next/link";
import React from "react";

export default function LayoutEvent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 flex flex-col gap-4 min-h-screen">
      <Link
        href="\home"
        className="rounded-xl w-fit bg-primary-50 hover:bg-primary-100 p-3 cursor-pointer text-primary-500 transition-colors backdrop-saturate-200 fill-primary-500 sticky top-6 bg-opacity-80 backdrop-blur-2xl"
      >
        <IconBack className="w-6 h-6" />
      </Link>
      {children}
    </div>
  );
}
