import _ from "lodash";
import React from "react";
import { motion } from "framer-motion";

export default function Scaffold({
  appBar,
  sideBar,
  bottomBar,
  leading,
  trailing,
  overlay,
  backdrop,
  children,
  styles,
  extendBehindAppBar,
  className,
}: {
  appBar?: React.ReactNode;
  sideBar?: React.ReactNode;
  bottomBar?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  overlay?: React.ReactNode;
  backdrop?: React.ReactNode;
  extendBehindAppBar?: boolean;
  children: React.ReactNode;
  styles?: {
    scaffold?: string;
    appBar?: string;
    sideBar?: string;
    bottomBar?: string;
    leading?: string;
    trailing?: string;
    overlay?: string;
    backdrop?: string;
    children?: string;
  };
  className?: string;
}) {
  return (
    <div
      className={`bg-white min-w-screen min-h-screen flex flex-col ${
        overlay && "overflow-hidden h-screen"
      } ${styles?.scaffold} ${className}`}
    >
      <div
        className={`fixed top-0 left-0 w-screen h-screen overflow-hidden ${styles?.backdrop}`}
      >
        {backdrop}
      </div>
      <div
        className={`w-screen z-20 ${
          extendBehindAppBar ? "fixed" : "sticky"
        } top-0 ${styles?.appBar}`}
      >
        {appBar}
      </div>
      <div className={`w-full z-10 ${styles?.leading}`}>{leading}</div>
      <div className={`w-full z-10 flex flex-grow justify-center`}>
        <div className={`flex flex-col ${styles?.sideBar}`}>{sideBar}</div>
        <div className="flex flex-col flex-grow items-center">{children}</div>
      </div>
      <div className={`w-full z-10 ${styles?.trailing}`}>{trailing}</div>
      <div className={`w-full z-20 sticky bottom-0 ${styles?.bottomBar}`}>
        {bottomBar}
      </div>
      {overlay && (
        <div
          // initial={{ opacity: 0, translateX: 200 }}
          // animate={{ opacity: 1, translateX: 0 }}
          // exit={{ opacity: 1, translateX: 200 }}
          // transition={{ duration: 0.15 }}
          className={`w-screen h-screen overflow-scroll z-30 absolute top-0 left-0 right-0 grid place-content-center ${styles?.overlay}`}
        >
          {overlay}
        </div>
      )}
    </div>
  );
}
