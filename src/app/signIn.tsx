import {
  AppBar,
  Button,
  Card,
  ColorBackdrop,
  Input,
  Page,
} from "../components";
import { IconPhone, IconPreloader } from "../components/icons";
import {
  Branding,
  Legal,
  IllustrationBanner,
  VerifySignInCode,
  SignInPromptText,
} from "../fragments";
import { useEffect, useState } from "react";
import illustration from "../assets/signin.svg";
import constants from "../constants";
import Stack from "../components/Stack";
import InputPhoneNumber from "../components/inputPhoneNumber";
import Spacer from "../components/Spacer";
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useAppStore } from "../hooks";
import { useNavigate } from "@tanstack/router";

export default function PageSignIn() {
  const { auth } = useAppStore((state) => ({
    auth: state.auth,
  }));

  const navigate = useNavigate({ from: "/signin" });

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
      navigate({ to: "/" });
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
      Send Code
    </Button>
  );

  return (
    <Page>
      <ColorBackdrop />
      <Branding padding={16} color="white" className="sticky top-0 flex-grow" />
      <Card>
        <IllustrationBanner illustration={illustration} />
        <Stack padding={8} gap={6}>
          <SignInPromptText />
          <InputPhoneNumber
            phoneNumber={phoneNumber}
            onChange={setPhoneNumber}
          />
          <Stack className="hidden-mobile" gap={6}>
            {<Legal />}
            {sendCodeButton}
          </Stack>
        </Stack>
      </Card>
      <div id="rcv"></div>
      <Spacer minHeight={48} />
      <AppBar
        className="md:hidden z-10 fixed bottom-0 left-0 right-0 bg-primary-50 bg-opacity-60 backdrop-blur-2xl shadow-xl"
        center={
          <div className="flex-grow grid">
            {sendCodeButton} {<Legal />}
          </div>
        }
      />

      <VerifySignInCode
        codeSent={!!codeSent}
        phoneNumber={"+91 " + phoneNumber}
        onClose={() => navigate({ to: "/signin", replace: true })}
        onVerifyCode={verifyCode}
        onError={(e) => console.log(e)}
      />
    </Page>
  );
}
