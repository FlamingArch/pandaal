import React from "react";
import { Button, Input, Page, Text } from "../components";
import { IconPasskey, IconPreloader } from "../components/icons";
import { FirebaseContext } from "../contexts/firebase";

export default function signInVerifyCode({ phoneNumber, completion }) {
  const { signInVerifyCode } = React.useContext(FirebaseContext);
  const [code, setCode] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  return (
    <Page padding={8} className="justify-center items-center" gap={4}>
      <Text headingLevel={3} bold>
        Verify Code
      </Text>
      <Text dimmed>
        A Verification Code has been sent to {phoneNumber}. Enter it below to
        sign in.
      </Text>
      <Input
        type="number"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        leading={<IconPasskey className="w-6 h-6 fill-primary-500" />}
        placeholder="Code"
      />
      <div className="flex">
        <Button
          onClick={() => {
            setLoading(true);
            signInVerifyCode(code, completion);
          }}
          type="emphasis"
          disabled={code.length !== 6}
          className="flex-grow"
        >
          {loading ? (
            <p className="flex gap-2">
              <IconPreloader className="w-6 h-6 stroke-white" /> Verifying
            </p>
          ) : (
            "Verify Code"
          )}
        </Button>
      </div>
    </Page>
  );
}
