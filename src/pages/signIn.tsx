import { AppBar, Button, ColorBackdrop, Page } from "../components";
import { IconBack, IconPreloader } from "../components/icons";
import {
  Branding,
  Legal,
  IllustrationBanner,
  VerifySignInCode,
} from "../fragments";
import { useEffect, useState } from "react";
import illustration from "../assets/signin.svg";
import constants from "../constants";
import Stack from "../components/Stack";
import InputPhoneNumber from "../components/inputPhoneNumber";
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useAppStore } from "../hooks";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PageSignIn() {
  const { auth } = useAppStore((state) => ({
    auth: state.auth,
  }));

  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [codeSent, setCodeSent] = useState<boolean | null>(null);
  const [response, setResponse] = useState<ConfirmationResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => console.log(phoneNumber), [phoneNumber]);

  const sendCodeHandler = () => {
    setLoading(true);
    const recaptchaVerifier = new RecaptchaVerifier(
      "rcv",
      {
        size: "invisible",
        callback: () => {},
      },
      auth
    );

    signInWithPhoneNumber(auth, "+91" + phoneNumber, recaptchaVerifier).then(
      (result) => {
        setResponse(result);
        setCodeSent(true);
        setLoading(false);
      }
    );
  };

  const verifyCode = (code: string) => {
    response?.confirm(code).then((result) => {
      navigate("/");
    });
  };

  const sendCodeButton = (
    <Button
      onClick={sendCodeHandler}
      disabled={
        loading ||
        phoneNumber.length != 10 ||
        !constants.regexOnlyDigits.test(phoneNumber)
      }
      buttonStyle="emphasis"
    >
      {loading && <IconPreloader className="w-6 h-6 stroke-white" />}
      <p className="text-white font-medium">Send Code</p>
    </Button>
  );

  return (
    <Page
      padding={0}
      appBar={
        <AppBar
          responsive
          backdrop="clear"
          leading={
            <Button
              buttonStyle="actionSecondaryTransparentWhite"
              Icon={IconBack}
              onClick={() => navigate("/")}
            />
          }
        />
      }
      leading={
        <Branding
          color="white"
          padding={{ bottom: 20, top: 0 }}
          className="sticky top-0 fadeIn"
        />
      }
      backdrop={<ColorBackdrop />}
    >
      <div className="card nodark:bg-black nodark:text-white col fadeInBottom responsive gap-5 flex-grow md:flex-grow-0">
        <IllustrationBanner illustration={illustration} />
        <p className="font-medium text-2xl">Sign In</p>
        <p className="flex flex-col gap-2">
          <span className="font-medium">Enter your Phone Number</span> We need
          to validate your phone number by sending a 6-Digit Code
        </p>
        <InputPhoneNumber phoneNumber={phoneNumber} onChange={setPhoneNumber} />
        <Legal />
        <Stack className="hidden-mobile" gap={6}>
          {sendCodeButton}
        </Stack>
      </div>
      <div id="rcv"></div>
      <div className="md:flex-grow" />
      <AppBar className="md:hidden z-10 fixed bottom-0 left-0 right-0 bg-primary-50 bg-opacity-60 backdrop-blur-2xl shadow-xl">
        {sendCodeButton}
      </AppBar>

      <VerifySignInCode
        codeSent={!!codeSent}
        phoneNumber={"+91 " + phoneNumber}
        onClose={() =>
          navigate("/signin", {
            replace: true,
          })
        }
        onVerifyCode={verifyCode}
        onError={(e) => console.log(e)}
      />
    </Page>
  );
}
//
