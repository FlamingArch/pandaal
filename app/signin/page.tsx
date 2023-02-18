"use client";

import React from "react";
import constants from "@/constants";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { IconPhone } from "@/components/icons";
import _ from "lodash";

export default function page() {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [phoneValidated, setPhoneValidated] = React.useState(true);
  const auth = getAuth(initializeApp(constants.firebaseConfig));

  const refreshValidation = () => {
    // Check if phone number contains 'e'
    if (phoneNumber.includes("e")) {
      setPhoneValidated(false);
      return;
    }
    // Check if phone number is number
    if (!_.isFinite(Number(phoneNumber))) {
      setPhoneValidated(false);
      return;
    }
    setPhoneValidated(true);
  };
  React.useEffect(() => refreshValidation(), [phoneNumber]);

  const fieldStyles = phoneValidated
    ? "border-primary-500 hover:shadow-2xl focus-within:shadow-primary-500 focus-within:shadow-2xl focus-within:hover:shadow-primary-500"
    : "border-red-500 shadow-2xl shadow-red-500";
  const iconStyles = phoneValidated ? "fill-primary-500" : "fill-red-500";

  return (
    <>
      <p className="text-3xl pb-3 font-bold">Sign In</p>
      <p className="opacity-60">Welcome! Please enter your phone number.</p>
      <div className="flex-grow"></div>
      <p className="font-semibold pb-2">Phone Number</p>
      <div
        className={
          "bg-white flex rounded-xl border-2 transition-all items-center mb-6 " +
          fieldStyles
        }
      >
        <IconPhone
          className={"w-6 h-6 m-3 transition-colors mr-0 " + iconStyles}
        />
        <p className={phoneValidated ? "text-primary-500" : "text-red-500"}>
          +91
        </p>
        <input
          type="tel"
          onChange={(e) => {
            if (e.target.value.length > 10)
              e.target.value = e.target.value.slice(0, 10);
            setPhoneNumber(e.target.value);
          }}
          className="flex-grow outline-none p-3 bg-transparent"
        />
      </div>
      <button className="bg-primary-500 justify-center fill-white text-white p-3 rounded-2xl flex gap-2 hover:bg-primary-600 transition-colors">
        <p>Register</p>
      </button>
    </>
  );
}
