import React from "react";
import { motion } from "framer-motion";
import { Button, Input, Page, Text } from "../components";
import { IconPhone, IconPreloader } from "../components/icons";
import { FirebaseContext } from "../contexts/firebase";

export default function SignInPrompt({
  setPhoneNumber,
  onSubmit,
  disableSubmission,
}) {
  const [phone, setPhone] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("+91");
  const { auth, signInSendCode } = React.useContext(FirebaseContext);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setPhoneNumber(`${countryCode}${phone}`);
  }, [phone, countryCode]);

  React.useEffect(() => {
    if (!(countryCode[0] == "+")) {
      setCountryCode("+" + countryCode);
    }
    if (countryCode.length > 4) {
      setCountryCode(countryCode.substring(0, 4));
    }
  }, [countryCode]);

  return (
    <Page padding={8} gap={4}>
      <Text headingLevel={3} bold>
        Sign In
      </Text>
      <Text dimmed>Enter your phone number to continue</Text>
      {/* INFO:Enable this to add a country code input */}
      {/* <Input
          type="number"
          className="w-32"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          placeholder="Code"
        /> */}

      <Input
        type="number"
        className="flex-grow"
        value={phone}
        leading={
          <div className="flex">
            <IconPhone className="w-6 h-6 fill-primary-500" />
            <p className="text-primary-500 font-semibold">+91</p>
          </div>
        }
        onChange={(e) => {
          if (!loading) {
            setPhone(e.target.value);
          }
        }}
        placeholder="Phone Number"
      />

      <div id="rcv"></div>
      <div className="flex">
        <Button
          onClick={() => {
            if (!loading) {
              setLoading(true);
              signInSendCode(auth, "rcv", `${countryCode}${phone}`, onSubmit);
            }
          }}
          className="flex-grow"
          type="emphasis"
          disabled={disableSubmission}
        >
          {loading ? (
            <IconPreloader className="w-6 h-6 stroke-white" />
          ) : (
            "Send Code"
          )}
        </Button>
      </div>
    </Page>
  );
}
