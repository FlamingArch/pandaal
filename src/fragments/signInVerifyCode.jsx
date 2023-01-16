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
        className="w-96"
      />
      <Button
        onClick={() => {
          setLoading(true);
          signInVerifyCode(code, completion);
        }}
        type="emphasis"
        disabled={code.length !== 6}
        className="w-96"
      >
        {loading ? (
          <p className="flex gap-2">
            <IconPreloader className="w-6 h-6 stroke-white" /> Verifying
          </p>
        ) : (
          "Verify Code"
        )}
      </Button>
    </Page>
    // <div className="grid place-content-center h-[70vh] gap-8">
    //   <p className="text-3xl font-bold text-center">Enter Code</p>
    //   <div className="w-2/3 text-center mx-auto">

    //   </div>
    //   <Input
    //     type="number"
    //     placeholder="Code"
    //     value={code}
    //     onChange={(e) => setCode(e.target.value)}
    //   />
    //   <button
    //     className={
    //       "px-16 py-3 mt-20 w-fit mx-auto bg-primary-500 text-white rounded-2xl transition-all " +
    //       (code.length === 6
    //         ? "shadow-xl shadow-primary-300 hover:shadow-primary-500 hover:shadow-2xl hover:scale-105 hover:bg-primary-600"
    //         : "opacity-50 cursor-not-allowed")
    //     }
    //   >
    //     Verify Code
    //   </button>
    // </div>
  );
}
