import React from "react";

function ImageCard({ src }) {
  return (
    <img src={src} className="aspect-[9/12] w-[192px] rounded-3xl shadow-2xl" />
  );
}

export default ImageCard;
