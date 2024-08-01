import React from "react";
import { TiLocationArrowOutline } from "react-icons/ti";

export default function LocationView(props: { children: React.ReactNode }) {
  return (
    <section className="py-6 gap-4 flex flex-col">
      <div className="px-6 flex items-center justify-between">
        <h2 className="text-xl">Events Near Me</h2>
        <button className="border flex border-black/10 p-2.5 px-6 rounded-full text-sm">
          <TiLocationArrowOutline className="w-4 h-4" />
          <p>Greater Noida</p>
        </button>
      </div>
      {props.children}
    </section>
  );
}
