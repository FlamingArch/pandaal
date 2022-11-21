import React from "react";

export default function loadingList({ length }: { length: number }) {
  let items: Array<number> = [];
  for (let i = 0; i < length; i++) {
    items.push(i);
  }
  return items.map((_, i) => (
    <div key={i} className="w-[210px] aspect-[9/12] bg-gray-300 flex-shrink-0 rounded-3xl" />
  ));
}
