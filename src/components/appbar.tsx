import React from "react";

export default function ViewAppBar({
  leading,
  title,
  actions,
  backdrop,
  className,
}: {
  leading?: React.ReactNode;
  title?: string | React.ReactNode;
  backdrop?: "material" | "shadow" | "solid" | "transparent";
  actions?: React.ReactNode | [React.ReactNode];
  className?: string;
}) {
  let backdropStyles;
  switch (backdrop) {
    case "material":
      backdropStyles =
        "bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 backdrop-blur-3xl backdrop-saturate-200 dark:backdrop-blur-2xl dark:backdrop-saturate-200";
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
    <div className={`${defaultStyles} ${backdropStyles} ${className}`}>
      <div className="leading text-xl font-medium flex items-center gap-4">
        {leading}
        {title}
      </div>
      <div className="flex justify-end gap-4">{actions}</div>
    </div>
  );
}
