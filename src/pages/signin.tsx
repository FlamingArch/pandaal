import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Page } from "../components";
import { BackButton, SignInPrompt } from "../fragments";
import _ from "lodash";

export default function PageSignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [codeSent, setCodeSent] = React.useState(false);

  const location = useLocation();
  const redirectPath = location.state?.path;

  const validatePhone = () => {
    if (phoneNumber.length == 13) return true;
    return false;
  };

  return (
    <Page padding={8} gap={8}>
      <div className="flex justify-between items-center">
        <BackButton customPath="/"/>
        <p className="text-3xl font-bold text-center text-primary-500">
          pandaal
        </p>
        <div className="w-12 h-12"></div>
      </div>
      {codeSent ? (
        <>Code Sent To {phoneNumber}</>
      ) : (
        <SignInPrompt
          setPhoneNumber={setPhoneNumber}
          onSubmit={validatePhone() ? () => setCodeSent(true) : null}
        />
      )}
    </Page>
  );
}
