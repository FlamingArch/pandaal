import React from "react";
import { motion } from "framer-motion";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { IconBack, IconPasskey } from "../components/Icons";
import { Button, Input, Page, Scaffold } from "../components";
import FirebaseIntegration from "../contexts/Firebase";

import { BackButton } from "../fragments";

export default function PageAuth({ callback }) {
  const Navigator = React.useContext(Scaffold.Context);
  const Firebase = React.useContext(FirebaseIntegration.Context);
  const [phone, setPhone] = React.useState("9554442069");
  const [otp, setOTP] = React.useState("");
  const [pageIndex, setPageIndex] = React.useState(0);

  const generateRecaptchaVerifier = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          setPageIndex(1);
        },
      },
      Firebase.auth
    );
  };

  const requestOTP = (phone) => {
    generateRecaptchaVerifier();
    console.log("SUP BITCH");
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(Firebase.auth, phone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((e) => console.log(`Error Generating OTP: ${e}`));
  };

  const verifyOTP = (code, callback) => {
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        callback();
      })
      .catch((e) => console.log(`Error Verifying OTP: ${e}`));
  };

  const PageSignIn = (
    <Page.Full className="p-8">
      <BackButton />
      <div className="flex-grow grid place-items-center">
        <div className="grid gap-4 place-items-center">
          <div className="text-2xl font-bold max-w-[50%] pt-[auto]">
            Enter your Phone Number
          </div>
          <p className=" max-w-[80%]">
            We need to validate your phone number by sending you a 6 digit OTP.
          </p>
          <div className="w-full grid gap-4">
            <Input
              placeholder="Enter your phone number"
              leading={<div className="font-bold text-primary">+91</div>}
              value={phone}
              onChange={(evnt) => setPhone(evnt.target.value)}
            />
            <div
              id="recaptcha-container"
              className="grid place-items-center"
            ></div>
            <Button
              type="secondary"
              onClick={() => {
                if (phone.length == 10) {
                  requestOTP(`+91${phone}`);
                }
              }}
            >
              Send OTP
            </Button>
          </div>
        </div>
      </div>
    </Page.Full>
  );

  const PageOTP = (
    <>
      <div
        className="rounded-2xl p-4 fill-primary bg-primaryextralight w-fit hover:shadow-2xl hover:shadow-[#505BA570] transition-shadow"
        onClick={() => setPageIndex(0)}
      >
        <IconBack className="w-6 h-6" />
      </div>
      <div className="flex-grow grid place-items-center">
        <div className="grid gap-4 place-items-center">
          <div className="text-2xl font-bold max-w-[50%] pt-[auto]">
            Enter OTP
          </div>
          <p className=" max-w-[80%]">
            Enter the 6-digit OTP sent to +91 {phone}
          </p>
          <div className="w-full grid gap-4">
            <Input
              placeholder="Enter OTP"
              leading={
                <IconPasskey className="font-bold text-primary w-6 h-6" />
              }
              value={otp}
              onChange={(evnt) => setOTP(evnt.target.value)}
            />
            <Button
              type="secondary"
              onClick={() => {
                verifyOTP(otp, () => callback());
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      exit={{ opacity: 0 }}
      style={{ overscrollBehavior: "contain" }}
      className="flex flex-col gap-8 h-screen overflow-scroll text-center"
    >
      {pageIndex === 0 ? PageSignIn : PageOTP}
    </motion.div>
  );
}
