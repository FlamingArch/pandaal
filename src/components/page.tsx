import React from "react";

export default function Page({
  children,
  backdrop,
  cornerRadius,
  padding,
  margin,
  responsive,
  gap,
  className,
}: {
  children?: React.ReactNode;
  backdrop?: "clear" | "solid" | "material";
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
  responsive?: boolean;
  className?: String;
}) {
  function getBackdropStyles(Backdrop) {
    switch (Backdrop) {
      case "clear":
        return "bg-transparent";
      case "solid":
        return "bg-white";
      case "material":
        return "bg-white bg-opacity-60 backdrop-blur-3xl backdrop-saturate-200";
      default:
        return "bg-transparent";
    }
  }

  const responsiveStyles = responsive ? " md:w-2/3 lg:w-1/2 mx-auto" : "";

  return (
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
            : `${(padding?.top ?? 6) / 4}rem ${(padding?.right ?? 6) / 4}rem ${
                (padding?.bottom ?? 6) / 4
              }rem ${(padding?.left ?? 6) / 4}rem`,
        margin:
          typeof margin == "number"
            ? `${margin / 4}rem`
            : `${(margin?.top ?? 0) / 4}rem ${(margin?.right ?? 0) / 4}rem ${
                (margin?.bottom ?? 0) / 4
              }rem ${(margin?.left ?? 0) / 4}rem`,
        gap: `${(gap ?? 0) / 4}rem`,
      }}
      className={`flex flex-col mx-auto h-full flex-grow transition-all ${getBackdropStyles(
        backdrop
      )} w-full ${responsiveStyles} ${className}`}
    >
      {children}
    </div>
  );
}
