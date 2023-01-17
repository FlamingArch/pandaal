import React from "react";

export default function Page({
  children,
  backdrop,
  cornerRadius,
  padding,
  margin,
  // responseFactor,
  responsive,
  gap,
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
  // responseFactor?: number;
  responsive?: boolean;
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
            ? `${padding / 4}rem`
            : `${(padding?.top ?? 0) / 4}rem ${(padding?.right ?? 0) / 4}rem ${
                (padding?.bottom ?? 0) / 4
              }rem ${(padding?.left ?? 0) / 4}rem`,
        margin:
          typeof margin == "number"
            ? `${margin / 4}rem`
            : `${(margin?.top ?? 0) / 4}rem ${(margin?.right ?? 0) / 4}rem ${
                (margin?.bottom ?? 0) / 4
              }rem ${(margin?.left ?? 0) / 4}rem`,
        gap: `${gap / 4}rem`,
      }}
      className={`flex flex-col mx-auto h-full transition-all ${getBackdropStyles(
        backdrop
      )} w-full md:w-3/4 lg:w-2/3`}
    >
      {children}
    </div>
  );
}
