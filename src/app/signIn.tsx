import {
  AppBar,
  Button,
  Card,
  ColorBackdrop,
  Input,
  Page,
} from "../components";
import { IconPhone } from "../components/icons";
import {
  Branding,
  Legal,
  IllustrationBanner,
  VerifySignInCode,
  SignInPromptText,
} from "../fragments";
import { useState } from "react";
import illustration from "../assets/signin.svg";
import constants from "../constants";
import Stack from "../components/Stack";
import InputPhoneNumber from "../components/inputPhoneNumber";
import Spacer from "../components/Spacer";

export default function PageSignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [codeSent, setCodeSent] = useState<boolean | null>(null);

  const sendCodeHandler = () => setCodeSent(true);

  const sendCodeButton = (
    <Button
      onClick={sendCodeHandler}
      disabled={
        phoneNumber.length !== 10 && constants.regexOnlyDigits.test(phoneNumber)
      }
      style="emphasis"
    >
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
        onClose={() => setCodeSent(false)}
        onVerifyCode={() => null}
        onError={(e) => console.log(e)}
      />
    </Page>
  );
}
