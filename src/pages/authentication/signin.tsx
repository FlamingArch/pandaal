import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { BackButton, SignInPrompt, SignInVerifyCode } from "../../fragments";
import _ from "lodash";

export default function PageSignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [codeSent, setCodeSent] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path ?? "/";

  const validatePhone = () => {
    if (phoneNumber.length == 13) return true;
    return false;
  };

  return (
    <Page padding={8} gap={8}>
      <div className="flex justify-between items-center">
        <BackButton />
        <p className="text-3xl font-bold text-center text-primary-500">
          pandaal
        </p>
        <div className="w-12 h-12"></div>
      </div>
      {codeSent ? (
        <SignInVerifyCode
          phoneNumber={phoneNumber}
          completion={() => {
            navigate(redirectPath);
          }}
        />
      ) : (
        <SignInPrompt
          setPhoneNumber={setPhoneNumber}
          onSubmit={validatePhone() ? () => setCodeSent(true) : null}
        />
      )}
    </Page>
  );
}
