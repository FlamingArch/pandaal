import React from "react";

export default function AppBar({
  leading,
  title,
  actions,
  center,
  children,
  backdrop,
  background,
  responsive,
  className,
  padding,
  margin,
  cornerRadius,
  gap,
}: {
  leading?: React.ReactNode;
  title?: React.ReactNode;
  actions?: React.ReactNode | React.ReactNode[];
  center?: React.ReactNode | React.ReactNode;
  children?: React.ReactNode;
  responsive?: boolean;
  backdrop?:
    | "clear"
    | "gradient"
    | "gradientReverse"
    | "gradientBlack"
    | "material"
    | "materialShadow"
    | "solid"
    | "shadow";
  background?:
    | "clear"
    | "gradient"
    | "gradientReverse"
    | "gradientBlack"
    | "material"
    | "materialShadow"
    | "solid"
    | "shadow";
  className?: string;
  cornerRadius?:
    | number
    | {
        topLeft?: number;
        topRight?: number;
        bottomLeft?: number;
        bottomRight?: number;
      };
  padding?:
    | number
    | { top?: number; right?: number; bottom?: number; left?: number };
  margin?:
    | number
    | { top?: number; right?: number; bottom?: number; left?: number };
  gap?: number;
}) {
  const getBackdropStyles = (backdrop) => {
    switch (backdrop) {
      case "clear":
        return "bg-transparent";
      case "gradient":
        return "bg-gradient-to-b from-[#FFFFFFAA] to-transparent";
      case "gradientReverse":
        return "bg-gradient-to-b from-[#000000AA] to-transparent";
      case "gradientBlack":
        return "bg-gradient-to-b from-[#000000AA] to-transparent";
      case "material":
        return "bg-white bg-opacity-60 backdrop-filter backdrop-saturate-200 backdrop-blur-3xl";
      case "materialShadow":
        return "bg-white bg-opacity-60 backdrop-filter backdrop-saturate-200 backdrop-blur-3xl shadow-lg";
      case "solid":
        return "bg-white";
      case "shadow":
        return "bg-white shadow-lg";
      default:
        return "bg-white";
    }
  };

  const responsiveStyles = responsive ? " md:w-2/3 lg:w-1/2 mx-auto" : "";

  return (
    <div
      className={`flex-grow transition-all ${getBackdropStyles(
        backdrop ?? "clear"
      )} ${className}`}
    >
      <div
        style={{
          borderRadius:
            typeof cornerRadius == "number"
              ? `${cornerRadius / 4}rem`
              : `${(cornerRadius?.topLeft ?? 0) / 4}rem ${
                  (cornerRadius?.topRight ?? 0) / 4
                }rem ${(cornerRadius?.bottomLeft ?? 0) / 4}rem ${
                  (cornerRadius?.bottomRight ?? 0) / 4
                }rem`,
          padding:
            typeof padding == "number"
              ? `${(padding ?? 6) / 4}rem`
              : `${(padding?.top ?? 6) / 4}rem ${
                  (padding?.right ?? 6) / 4
                }rem ${(padding?.bottom ?? 6) / 4}rem ${
                  (padding?.left ?? 6) / 4
                }rem`,
          margin:
            typeof margin == "number"
              ? `${(margin ?? 0) / 4}rem`
              : `${(margin?.top ?? 0) / 4}rem ${(margin?.right ?? 0) / 4}rem ${
                  (margin?.bottom ?? 0) / 4
                }rem ${(margin?.left ?? 0) / 4}rem`,
          gap: `${(gap ?? 0) / 4}rem`,
        }}
        className={`flex flex-col flex-grow ${getBackdropStyles(background)} `}
      >
        <div
          style={{ gap: `${(gap ?? 0) / 4}rem` }}
          className={"flex w-full " + responsiveStyles}
        >
          <div
            style={{
              gap: `${(gap ?? 0) / 4}rem`,
            }}
            className="flex items-center"
          >
            {leading}
            {title}
          </div>
          <div className="flex items-center flex-grow justify-center">
            {center}
          </div>
          <div className="flex items-center justify-end">{actions}</div>
        </div>
        {children}
      </div>
    </div>
  );
}
