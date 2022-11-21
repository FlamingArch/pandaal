import React from "react";
import { IconUser } from "./icons";

export default function ViewAppBar({
  branding,
  actions,
}: {
  branding?: string;
  actions?: React.ReactNode | [React.ReactNode];
}) {
  return (
    <div className="p-8 grid grid-cols-2 gap-4 sticky top-0 z-10 items-center bg-white bg-opacity-80 backdrop-blur-3xl backdrop-saturate-150">
      <div className="branding">{branding}</div>

      <div className="flex justify-end gap-4">{actions}</div>
    </div>
  );
}
