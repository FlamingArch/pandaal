import React from "react";

export default function ImageBackdrop({
  src,
  blur,
  dim,
}: {
  src: string;
  blur?: boolean;
  dim?: boolean;
}) {
  return (
    <img
      src={src}
      className={
        "fixed top-0 left-0 w-screen h-screen object-cover object-center -z-10" +
        (blur ? "filter blur-3xl scale-125 " : "") +
        (dim ? "brightness-150 " : "")
      }
    ></img>
  );
}
