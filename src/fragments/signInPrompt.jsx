import React from "react";
import { motion } from "framer-motion";
import { Button, Input, Page, Text } from "../components";
import { IconPhone } from "../components/icons";
import { FirebaseContext } from "../contexts/firebase";

export default function SignInPrompt({
  setPhoneNumber,
  onSubmit,
  disableSubmission,
}) {
  const [phone, setPhone] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("+91");
  const { auth, signInSendCode } = React.useContext(FirebaseContext);

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
    <Page padding={8} className="justify-center items-center" gap={4}>
      <Text headingLevel={3} bold>
        Sign In
      </Text>
      <Text dimmed>Enter your phone number to continue</Text>
      <div className="flex gap-4 w-96">
        <Input
          type="number"
          className="w-32"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          placeholder="Code"
        />
        <Input
          type="number"
          className="flex-grow"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
        />
      </div>
      <div id="rcv"></div>
      <Button
        onClick={() =>
          signInSendCode(auth, "rcv", `${countryCode}${phone}`, onSubmit)
        }
        type="emphasis"
        disabled={disableSubmission}
        className="w-96"
      >
        Send Code
      </Button>
    </Page>
  );
}
