import React from "react";
import { Branding } from ".";
import { AppBar, Button, Input, Page, Scaffold, Text } from "../components";
import { IconBack, IconPasskey, IconPreloader } from "../components/icons";
import { FirebaseContext } from "../contexts/firebase";
import illustration from "../assets/signin.svg";
import _ from "lodash";

export default function signInVerifyCode({
  phoneNumber,
  setCodeSent,
  completion,
}) {
  const { signInVerifyCode } = React.useContext(FirebaseContext);
  const [code, setCode] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (error) {
      document.getElementById("rcv")?.innerHTML = "";
      window.confirmationResult = undefined;
      setLoading(false);
    }
  }, [error]);

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
              onClick={() => setCodeSent(false)}
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
          Verify Code
        </Text>
        <Text dimmed>
          A Verification Code has been sent to {phoneNumber}. Enter it below to
          sign in.
        </Text>
        <Input
          type="number"
          value={code}
          className={error ? "border-red-500 shadow-red-500 shadow-2xl" : ""}
          onChange={(e) => {
            if (error) {
              setError(null);
            }
            setCode(e.target.value);
          }}
          leading={
            <div className="flex">
              <IconPasskey className="w-6 h-6 fill-primary-500 ml-4" />
            </div>
          }
          placeholder="Code"
        />
        {error && (
          <p className="mt-4 text-center text-red-500">{`${_.startCase(
            error?.code.split("/")[1]
          )}!`}</p>
        )}
        <div className="flex-grow" />
        <div className="flex">
          <Button
            onClick={() => {
              setLoading(true);
              signInVerifyCode(code, completion, (error) => {
                setError(error);
              });
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
        <div className="flex-grow" />
      </Page>
    </Scaffold>
  );
}
