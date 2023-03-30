import React from "react";

type PageProps = {
  children: React.ReactNode;
};

export default function Page(props: PageProps) {
  return <div className="flex flex-col min-h-screen">{props.children}</div>;
}
