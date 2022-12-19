import React from "react";
import { useLocation } from "react-router-dom";

export default function Scaffold({
  appBar,
  sideBar,
  bottomBar,
  leading,
  trailing,
  backdrop,
  children,
  styles,
  className,
  isOverlay,
  scroll,
}: {
  appBar?: React.ReactNode;
  sideBar?: React.ReactNode;
  bottomBar?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  backdrop?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  isOverlay?: boolean;
  scroll?: "none" | "x" | "y" | "both";
  styles?: {
    appBar?: string;
    sideBar?: string;
    bottomBar?: string;
    leading?: string;
    trailing?: string;
    backdrop?: string;
    children?: string;
  };
}) {
  if (bottomBar && sideBar) {
    console.warn(
      `Warning: Both bottomBar and sideBar are present. Sidebar will overlap bottomBar on screen sizes < sm (666px).\n\nThis is a known issue, and will be fixed in a later version.`
    );
  }

  const location = useLocation();
  const zindex = location.pathname.split("/").length * 10;

  let scrollStyles;
  switch (scroll) {
    default:
    case "none":
      scrollStyles = "overflow-hidden";
      break;
    case "x":
      scrollStyles = "overflow-hidden overflow-x-scroll";
      break;
    case "y":
      scrollStyles = "overflow-hidden overflow-y-scroll";
      break;
    case "both":
      scrollStyles = "overflow-scroll";
      break;
  }

  const isOverlayStyles = isOverlay ? "fixed inset-0" : "";

  return (
    <div
      className={`relative bg-white z-[${zindex}] dark:bg-black w-screen h-screen flex flex-col max-w-[100vw] max-h-[100vh] ${scrollStyles} ${isOverlayStyles} ${className}`}
      style={{
        gridTemplateColumns: "",
      }}
    >
      <div className={`${styles?.backdrop} fixed z-0`}>{backdrop}</div>
      <div className={`${styles?.appBar} sticky top-0 z-20`}>{appBar}</div>
      <div className={`${styles?.leading} z-10`}>{leading}</div>
      <div className="flex flex-grow">
        <div className={`${styles?.sideBar} hidden md:flex flex-col z-10`}>
          {sideBar}
        </div>
        <div
          className={`flex-grow ${styles?.children} max-w-full max-h-full overflow-scroll z-10`}
        >
          {children}
        </div>
      </div>
      <div className={`${styles?.trailing}`}>{trailing}</div>
      <div className={`${styles?.bottomBar} sticky bottom-0 left-0 right-0`}>
        {bottomBar}
      </div>
      <div
        className={`${styles?.sideBar} sticky bottom-0 left-0 right-0 z-10 md:hidden`}
      >
        {sideBar}
      </div>
    </div>
  );
}
