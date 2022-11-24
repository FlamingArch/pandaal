import React from "react";
import { BackButton } from "../fragments";

export default function ViewScaffold({
  children,
  appBar,
  padding,
  gap,
}: {
  children?: React.ReactNode;
  appBar?: React.ReactNode;
  padding?: number;
  gap?: number;
}) {
  return (
    <div className="w-screen h-screen flex-col flex overflow-hidden">
      {appBar && appBar}
      {children}
    </div>
  );
}
