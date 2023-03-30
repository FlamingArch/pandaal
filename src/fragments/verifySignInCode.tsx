import { useState } from "react";
import { Button, Input, Text } from "../components";
import { IconClose, IconPasskey } from "../components/icons";
import constants from "../constants";

type VerifySignInCodeProps = {
  codeSent: boolean;
  phoneNumber: string;
  onClose: () => void;
  onVerifyCode: () => void;
  onError: (error: string) => void;
};

export default function VerifySignInCode(props: VerifySignInCodeProps) {
  const [code, setCode] = useState("");

  return props.codeSent ? (
    <div className="dim-behind z-30">
      <div className="p-12 fixed bottom-0 card card-primary md:top-0 md:my-[20vh] left-0 right-0 responsive gap-8 flex flex-col md:max-w-[450px] md:max-h-[600px] slide-in">
        <Button onClick={props.onClose} style="action">
          <IconClose className="w-6 h-6" />
        </Button>
        <Text className="font-medium text-3xl">Verify Code</Text>
        <div className="flex flex-col gap-2">
          <Text headingLevel={0.5} className="font-medium">
            Code Sent
          </Text>
          <Text>
            A 6-Digit Code has been sent to{" "}
            <span className="text-primary-500 font-medium">
              {props.phoneNumber}
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
              (constants.regexOnlyDigits.test(value) || value === "")
            ) {
              setCode(value);
            }
          }}
        />

        <div className="hidden md:flex flex-grow"></div>

        <Button
          onClick={props.onVerifyCode}
          disabled={code.length !== 10 && constants.regexOnlyDigits.test(code)}
          style="emphasis"
        >
          <Text headingLevel={0.25}>Verify Code</Text>
        </Button>
      </div>
    </div>
  ) : (
    <></>
  );
}
