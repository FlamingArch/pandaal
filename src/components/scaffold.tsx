import React from "react";

export default function Scaffold({
  appBar,
  sideBar,
  bottomBar,
  leading,
  trailing,
  children,
  styles,
  className,
}: {
  appBar?: React.ReactNode;
  sideBar?: React.ReactNode;
  bottomBar?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  styles?: {
    appBar?: string;
    sideBar?: string;
    bottomBar?: string;
    leading?: string;
    trailing?: string;
    children?: string;
  };
}) {
  if (bottomBar && sideBar) {
    console.warn(
      `Warning: Both bottomBar and sideBar are present. Sidebar will overlap bottomBar on screen sizes < sm (666px).\n\nThis is a known issue, and will be fixed in a later version.`
    );
  }

  return (
    <div
      className={
        "bg-white dark:bg-black w-screen h-screen overflow-hidden overflow-y-scroll flex flex-col max-w-[100vw] max-h-[100vh] " +
        className
      }
      style={{
        gridTemplateColumns: "",
      }}
    >
      <div className={`${styles?.appBar} sticky top-0 z-10`}>{appBar}</div>
      <div className={`${styles?.leading}`}>{leading}</div>

      <div className="flex flex-grow">
        <div className={`${styles?.sideBar} hidden md:flex flex-col`}>
          {sideBar}
        </div>
        <div
          className={`flex-grow ${styles?.children} max-w-full max-h-full overflow-scroll`}
        >
          {children}
        </div>
      </div>
      <div className={`${styles?.trailing}`}>{trailing}</div>
      <div className={`${styles?.bottomBar} sticky bottom-0 left-0 right-0`}>
        {bottomBar}
      </div>
      <div
        className={`${styles?.sideBar} sticky bottom-0 left-0 right-0 z-20 md:hidden`}
      >
        {sideBar}
      </div>
    </div>
  );
}
