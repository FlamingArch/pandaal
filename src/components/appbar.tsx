import React from "react";
import { IconUser } from "./icons";

export default function ViewAppBar({
  leading,
  actions,
  backdrop,
}: {
  leading?: string | React.ReactNode;
  backdrop?: "material" | "shadow" | "solid" | "transparent";
  actions?: React.ReactNode | [React.ReactNode];
}) {
  let backdropStyles;
  switch (backdrop) {
    case "material":
      backdropStyles =
        "bg-white dark:bg-black bg-opacity-80 backdrop-blur-3xl backdrop-saturate-150";
      break;
    case "shadow":
      // TODO: Implement Shadow
      break;
    case "solid":
      backdropStyles = "bg-white dark:bg-black";
    default:
      backdropStyles = "";
  }
  const defaultStyles =
    "p-6 grid grid-cols-2 gap-4 sticky top-0 z-10 items-center ";

  return (
    <div className={`${defaultStyles} ${backdropStyles}`}>
      <div className="leading">{leading}</div>
      <div className="flex justify-end gap-4">{actions}</div>
    </div>
  );
}
