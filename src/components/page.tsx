import React from "react";

export default function ViewPage({
  children,
  responsive,
  rounded,
  shadow,
  backdrop,
  padding,
  gap,
  className,
}: {
  children: React.ReactNode;
  backdrop?: "solid" | "transparent" | "material";
  responsive?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  padding?: number;
  gap?: number;
  className?: string;
}) {
  const responsiveStyles = responsive ? "mx-auto md:w-2/3 =xl:w-1/2" : "";
  const roundedStyles = rounded ? "rounded-3xl" : "";
  const shadowStyles = shadow ? "shadow-2xl" : "";
  const backdropStyles =
    backdrop == "material"
      ? "bg-white dark:bg-black backdrop-filter backdrop-blur-3xl bg-opacity-80 dark:bg-opacity-80 backdrop-brightness-200 dark:bg-brightness-50 backdrop-saturate-200"
      : backdrop == "solid"
      ? "bg-white dark:bg-black"
      : "";
  const defaultStyles =
    "text-black dark:text-white flex flex-col flex-grow w-full min-h-fit transition-all";

  return (
    <div
      className={`${defaultStyles} ${responsiveStyles} ${backdropStyles} ${shadowStyles} ${roundedStyles} ${
        padding ? `p-${padding}` : ""
      } ${gap ? `gap-${gap}` : ""} ${className}`}
    >
      {children}
    </div>
  );
}
