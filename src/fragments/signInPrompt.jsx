import React from "react";
import { motion } from "framer-motion";
import { AppBar, Button, Input, Page, Scaffold, Text } from "../components";
import { IconBack, IconPhone, IconPreloader } from "../components/icons";
import { FirebaseContext } from "../contexts/firebase";
import BackButton from "./backButton";
import { Branding } from ".";
import { useLocation, useNavigate } from "react-router-dom";
import illustration from "../assets/signin.svg";

export default function SignInPrompt({
  setPhoneNumber,
  onSubmit,
  disableSubmission,
}) {
  const [phone, setPhone] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("+91");
  const { auth, signInSendCode } = React.useContext(FirebaseContext);
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

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
    <Scaffold
      extendBehindAppBar
      leading={
        <div className="grid md:hidden bg-primary-50 h-[50vh] p-4 place-content-center place-items-center pt-16">
          <img
            src={illustration}
            className="h-full w-[1/2] max-w-[30vh] pt-12 pb-4"
          />
        </div>
      }
      sideBar={
        <div className="hidden md:grid bg-primary-50 h-full w-full p-4 place-content-center place-items-center">
          <img src={illustration} className="h-full w-2/3" />
        </div>
      }
      appBar={
        <AppBar
          padding={6}
          gap={6}
          background="clear"
          leading={
            <Button
              type="primary"
              onClick={() => navigate("/")}
              leading={<IconBack className="w-6 h-6" />}
            />
          }
          title={<Branding />}
        />
      }
    >
      <Page padding={8} gap={4} className="md:w-[50vw]">
        <div className="flex-grow" />
        <div className="flex-grow" />
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
          value={phone}
          leading={
            <div className="flex">
              <IconPhone className="w-6 h-6 fill-primary-500 ml-4" />
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
        <div className="flex-grow" />
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
        <div className="flex-grow" />
      </Page>
    </Scaffold>
  );
}
