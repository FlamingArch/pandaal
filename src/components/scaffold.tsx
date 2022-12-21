import React from "react";

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
  className,
}: {
  appBar?: React.ReactNode;
  sideBar?: React.ReactNode;
  bottomBar?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  overlay?: React.ReactNode;
  backdrop?: React.ReactNode;
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
      className={`bg-white dark:bg-black min-w-screen min-h-screen flex flex-col ${
        overlay && "overflow-hidden h-screen"
      } ${styles?.scaffold} ${className}`}
    >
      <div
        className={`fixed top-0 left-0 w-screen h-screen overflow-hidden ${styles?.backdrop}`}
      >
        {backdrop}
      </div>
      <div className={`w-screen z-20 sticky top-0 ${styles?.appBar}`}>{appBar}</div>
      <div className={`w-full z-10 ${styles?.leading}`}>{leading}</div>
      <div className={`w-full z-10 flex flex-grow`}>
        <div className={`flex flex-col ${styles?.sideBar}`}>{sideBar}</div>
        {children}
      </div>
      <div className={`w-full z-10 ${styles?.trailing}`}>{trailing}</div>
      <div className={`w-full z-20 sticky bottom-0 ${styles?.bottomBar}`}>
        {bottomBar}
      </div>
      {overlay && (
        <div
          className={`w-screen h-screen overflow-scroll z-30 absolute top-0 left-0 right-0 grid place-content-center ${styles?.overlay}`}
        >
          {overlay}
        </div>
      )}
    </div>
  );
}
