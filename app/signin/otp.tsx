"use client";

import { useState } from "react";
import Link from "next/link";
import { Input, Text } from "../../components";
import { IconBack, IconPhone } from "../../components/icons";

export default function ({ callback }: { callback: any }) {
  const [code, setCode] = useState("");

  const verifyOTP = (code, callback) => {
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        callback();
      })
      .catch((e) => console.log(`Error Verifying OTP: ${e}`));
  };

  return (
    <div className="w-screen min-h-screen p-6 flex flex-col gap-6">
      <Link
        href={`/`}
        className="p-4 rounded-2xl bg-primary-50 w-min dark:bg-primary-800"
      >
        <IconBack className="w-6 h-6 fill-primary-500 dark:fill-primary-200" />
      </Link>
      <Text headingLevel={2} bold>
        Verify OTP
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
          value={code}
          onChange={(e: any) => setCode(e.target.value)}
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-12 md:w-1/2 lg:w-1/3 mx-auto transition-all">
        <div
          onClick={() => verifyOTP(code, callback)}
          className="bg-primary-500 hover:bg-primary-600 shadow-primary-300 dark:shadow-primary-700 shadow-xl hover:shadow-2xl hover:shadow-primary-500 transition-all px-8 py-4 grid place-content-center text-white rounded-2xl hover:scale-105"
        >
          Verify OTP
        </div>
      </div>
    </div>
  );
}
