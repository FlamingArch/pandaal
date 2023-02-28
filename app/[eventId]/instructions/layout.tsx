import { IconBack } from "@/components/icons";
import Link from "next/link";
import React from "react";

type PageLayoutInstructionsProps = {
  children: React.ReactNode;
};

export default function PageLayoutInstructions(
  props: PageLayoutInstructionsProps
) {
  return (
    <>
      <header className="text-3xl font-bold">
        <h1>Instructions</h1>
      </header>
      {props.children}
    </>
  );
}
