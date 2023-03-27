import { AppBar, Input, Text } from "../components";
import illustration from "../assets/signin.svg";
import { useState } from "react";
import { IconPasskey, IconPhone } from "../components/icons";

const regexOnlyDigits = /^\d+$/;

export default function PageSignIn() {
  const [phoneNumber, setPhoneNumber] = useState("8953642875");
  const [code, setCode] = useState("694206");
  const [codeSent, setCodeSent] = useState(false);

  const element = document.getElementsByTagName("body")[0];
  element.style.backgroundColor = "#3f4882";

  const verifyCode = (
    <div className="dim-behind z-30">
      <div className="p-12 fixed bottom-0 card card-primary md:top-0 md:my-[20vh] left-0 right-0 responsive gap-8 flex flex-col">
        <Text className="font-medium text-3xl">Verify Code</Text>
        <div className="flex flex-col gap-2">
          <Text headingLevel={0.5} className="font-medium">
            Code Sent
          </Text>
          <Text>
            A 6-Digit Code has been sent to{" "}
            <span className="text-primary-500 font-medium">
              +91 {phoneNumber}
            </span>
          </Text>
        </div>

        <Input
          type="tel"
          inputMode="tel"
          placeholder="Code"
          className="text-justify"
          value={code}
          leading={<IconPasskey className="w-6 h-6 mx-3" />}
          onChange={(e) => {
            const { value } = e.target;
            if (
              value.length < 7 &&
              (regexOnlyDigits.test(value) || value === "")
            ) {
              setCode(value);
            }
          }}
        />

        <div className="hidden md:flex flex-grow"></div>

        <button
          disabled={
            phoneNumber.length !== 10 && regexOnlyDigits.test(phoneNumber)
          }
          className="rounded-2xl bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-400 hover:shadow-xl hover:shadow-primary-500 transition p-3 px-16 text-white disabled:shadow-none disabled:opacity-50 disabled:hover:bg-primary-500 disabled:cursor-not-allowed"
        >
          <Text headingLevel={0.25}>Verify Code</Text>
        </button>
      </div>
    </div>
  );

  const bottomBar = (
    <AppBar
      responsive
      className="md:hidden z-10 fixed bottom-0 left-0 right-0 bg-primary-50 bg-opacity-60 backdrop-blur-2xl shadow-xl"
      center={
        <button
          disabled={
            phoneNumber.length !== 10 && regexOnlyDigits.test(phoneNumber)
          }
          onClick={() => setCodeSent(true)}
          className="flex-grow rounded-2xl bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-400 hover:shadow-xl transition p-3 px-16 text-white disabled:shadow-none disabled:opacity-50 disabled:hover:bg-primary-500 disabled:cursor-not-allowed md:mx-3"
        >
          <Text headingLevel={0.25}>Send Code</Text>
        </button>
      }
    />
  );

  return (
    <div className="bg-primary-500 w-screen min-h-screen flex flex-col">
      <Text
        accented="#fff"
        bold
        headingLevel={4}
        className="p-4 grid place-content-center top-6 sticky flex-grow my-16"
      >
        pandaal
      </Text>
      <div className="flex flex-col m-6 pb-32 md:pb-6 bg-white responsive card card-primary z-10 flex-grow md:flex-grow-0">
        <div className="bg-primary-50 rounded-t-2xl pt-12 pb-6 max-h-[30vh] overflow-hidden flex justify-center">
          <img src={illustration} className="w-auto h-auto" />
        </div>
        <div className="flex flex-grow flex-col p-10 gap-6">
          <Text className="font-medium text-3xl">Sign In</Text>

          <div className="flex flex-col gap-2">
            <Text headingLevel={0.5} className="font-medium">
              Enter your Phone Number
            </Text>
            <Text>
              We need to validate your phone number by sending a 6-Digit Code
            </Text>
          </div>

          <Input
            type="tel"
            inputMode="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            leading={
              <>
                <IconPhone className="w-6 h-6 mx-3" />
                <p className="font-medium">+91</p>
              </>
            }
            onChange={(e) => {
              const { value } = e.target;
              if (
                value.length < 11 &&
                (regexOnlyDigits.test(value) || value === "")
              ) {
                setPhoneNumber(value);
              }
            }}
          />
          <button
            disabled={
              phoneNumber.length !== 10 && regexOnlyDigits.test(phoneNumber)
            }
            className="hidden md:flex place-content-center flex-grow rounded-2xl bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-400 hover:shadow-xl hover:shadow-primary-500 transition p-3 px-16 text-white disabled:shadow-none disabled:opacity-50 disabled:hover:bg-primary-500 disabled:cursor-not-allowed"
          >
            <Text headingLevel={0.25}>Send Code</Text>
          </button>
        </div>
      </div>

      <div className="md:flex-grow"></div>

      {bottomBar}

      {codeSent && verifyCode}
    </div>
  );
}
