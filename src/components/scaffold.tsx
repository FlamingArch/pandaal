import React from "react";

export default function ViewScaffold({
  children,
  appBar,
}: {
  children?: React.ReactNode;
  appBar?: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex-col flex overflow-hidden">
      {appBar && appBar}
      {children}
    </div>
  );
}
