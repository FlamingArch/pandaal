import React from "react";

export default function Scaffold({
  leading,
  appBar,
  sideBar,
  children,
  footer,
  styles,
  className,
}: {
  leading?: React.ReactNode;
  appBar?: React.ReactNode;
  sideBar?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  styles?: {
    appBar?: string;
    leading?: string;
    sideBar?: string;
    children?: string;
    footer?: string;
  };
}) {
  return (
    <div
      className={
        "bg-white dark:bg-black w-screen h-screen overflow-scroll flex flex-col " +
        className
      }
    >
      <div className={`${styles?.appBar} sticky top-0`}>{appBar}</div>
      <div className={`${styles?.leading}`}>{leading}</div>

      <div className="flex flex-grow">
        <div className={`${styles?.sideBar} fixed bottom-0 left-0 right-0 md:static`}>{sideBar}</div>
        <div className={`flex-grow ${styles?.children}`}>{children}</div>
      </div>
      <div className={`${styles?.footer}`}>{footer}</div>
    </div>
  );
}
