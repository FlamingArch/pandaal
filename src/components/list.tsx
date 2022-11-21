import React from "react";

function Section({
  orientation,
  children,
  heading,
}: {
  orientation?: "column" | "row";
  children?: React.ReactNode;
  heading?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <p className="px-8 uppercase font-bold">{heading}</p>
      <div
        className={
          "flex overflow-scroll gap-10 p-8 " +
          (orientation == "column" ? "flex-col" : "")
        }
      >
        {children}
      </div>
    </div>
  );
}

function View({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen flex flex-col overflow-scroll">
      {children}
    </div>
  );
}

function Header({
  actions,
  heading,
}: {
  actions: React.ReactNode | [React.ReactNode];
  heading: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-center gap-4 p-8">
      <p className="text-3xl ">{heading}</p>
      {actions}
    </div>
  );
}

const ViewList = {
  Section: Section,
  View: View,
  Header: Header,
};

export default ViewList;
