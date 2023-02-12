"use client";

import React from "react";
import { IconLocationEdit } from "@/components/icons";

const cities = ["Lucknow", "Delhi", "Greater Noida"];

export default function location() {
  const [showPopup, setShowPopup] = React.useState(false);
  const [city, setCity] = React.useState("Greater Noida");

  return (
    <div className="flex flex-col p-6 pt-0">
      <p>Hey, Harsh</p>
      <p className="text-xl font-bold">Showing all the getaway spots near me</p>
      <button
        className="flex gap-3 text-secondary-500 fill-secondary-500 text-xl font-bold p-4 pl-0 hover:pl-4 hover:bg-secondary-50 transition-all rounded-xl"
        onClick={() => setShowPopup(true)}
      >
        <IconLocationEdit className="w-6 h-6" />
        {city}
      </button>
      {showPopup && (
        <div
          className="w-screen h-screen bg-black bg-opacity-40 grid place-content-center absolute top-0 left-0"
          onClick={() => setShowPopup(false)}
        >
          <div className="flex flex-col bg-white rounded-2xl gap-4 p-4 shadow-xl min-w-[100vw] md:min-w-[25vw] animate-pop-in">
            <h1 className="text-2xl font-bold p-2">Chose your City</h1>
            <div className="rounded-xl overflow-hidden bg-primary-50">
              {cities.map((city) => (
                <option
                  className="p-3 rounded-xl hover:bg-primary-100 cursor-pointer hover:text-primary-500 transition-all"
                  onClick={() => {
                    setCity(city);
                    setShowPopup(false);
                  }}
                >
                  {city}
                </option>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
