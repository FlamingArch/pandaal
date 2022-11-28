import React from "react";

export default function ViewPage({
  children,
  responsive,
  rounded,
  shadow,
  material,
  padding,
  gap,
}: {
  children: React.ReactNode;
  material?: boolean;
  responsive?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  padding?: number;
  gap?: number;
  className?: string;
}) {
  const responsiveStyles = responsive ? "mx-auto md:w-2/3 p-6 xl:w-1/2" : "";
  const roundedStyles = rounded ? "rounded-3xl" : "";
  const shadowStyles = shadow ? "shadow-2xl" : "";
  const materialStyles = material
    ? "backdrop-filter backdrop-blur-3xl bg-opacity-80 dark:bg-opacity-80 backdrop-brightness-200 dark:bg-brightness-50 backdrop-saturate-200"
    : "";
  const defaultStyles =
    "bg-white dark:bg-black text-black dark:text-white flex flex-col flex-grow w-full min-h-fit transition-all";

  return (
    <div
      className={`${defaultStyles} ${responsiveStyles} ${materialStyles} ${shadowStyles} ${roundedStyles} ${
        padding ? `p-${padding}` : ""
      } ${gap ? `gap-${gap}` : ""}`}
    >
      {children}
    </div>
  );
}
