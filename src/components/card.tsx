import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card(props: CardProps) {
  return (
    <div className={"responsive card z-10 " + props.className}>
      {props.children}
    </div>
  );
}
