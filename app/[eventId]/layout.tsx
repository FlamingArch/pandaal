import { IconBack } from "@/components/icons";
import React from "react";

export default function LayoutEvent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="rounded-xl w-fit bg-primary-50 hover:bg-primary-100 p-3 cursor-pointer text-primary-500 fill-primary-500">
        <IconBack className="w-6 h-6" />
      </div>
      {children}
    </div>
  );
}
