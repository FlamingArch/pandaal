"use client";

import { useState } from "react";
import Link from "next/link";
import { Input, Text } from "../../components";
import { IconBack, IconPhone } from "../../components/icons";
import { initializeApp } from "firebase/app";
import constants from "../../constants";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

export default function ({ setPage }) {
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    const app = initializeApp(constants.firebaseConfig);
    const auth = getAuth(app);
    const verifier = new RecaptchaVerifier("rcv", { size: "invisible" }, auth);
    signInWithPhoneNumber(auth, `+91${phone}`, verifier)
      .then((confirmation) => {
        window.confirmationResult = confirmation;
        setPage(1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-screen min-h-screen p-6 flex flex-col gap-6 dark:bg-black dark:text-white">
      <Link
        href={`/`}
        className="p-4 rounded-2xl bg-primary-50 w-min dark:bg-primary-800"
      >
        <IconBack className="w-6 h-6 fill-primary-500 dark:fill-primary-200" />
      </Link>
      <Text headingLevel={2} bold>
        Sign in
      </Text>
      <div className="max-w-sm mx-auto">
        <Input
          placeholder="Phone"
          leading={
            <div className="flex gap-4 mr-[-24px]">
              <IconPhone className="w-6 h-6 fill-primary-500" />
              <p className="font-medium text-primary-500">+91</p>
            </div>
          }
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div id="rcv"></div>
      <div className="fixed bottom-0 left-0 right-0 p-12 md:w-1/2 lg:w-1/3 mx-auto transition-all">
        <div
          onClick={handleSubmit}
          className="bg-primary-500 hover:bg-primary-600 shadow-primary-300 dark:shadow-primary-700 shadow-xl hover:shadow-2xl hover:shadow-primary-500 transition-all px-8 py-4 grid place-content-center text-white rounded-2xl hover:scale-105"
        >
          Continue
        </div>
      </div>
    </div>
  );
}
