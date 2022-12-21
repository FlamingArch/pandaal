import React from "react";
import { Input } from "../components";
import { FirebaseContext } from "../contexts/firebase";

export default function signInVerifyCode({ phoneNumber, completion }) {
  const { signInVerifyCode } = React.useContext(FirebaseContext);
  const [code, setCode] = React.useState("");

  return (
    <div className="grid place-content-center h-[70vh] gap-8">
      <p className="text-3xl font-bold text-center">Enter Code</p>
      <div className="w-2/3 text-center mx-auto">
        A Verification Code has been sent to {phoneNumber}. Enter it below to
        sign in.
      </div>
      <Input
        type="number"
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        onClick={() => signInVerifyCode(code, completion)}
        className={
          "px-16 py-3 mt-20 w-fit mx-auto bg-primary-500 text-white rounded-2xl transition-all " +
          (code.length === 6
            ? "shadow-xl shadow-primary-300 dark:shadow-primary-700 hover:shadow-primary-500 hover:shadow-2xl hover:scale-105 hover:bg-primary-600"
            : "opacity-50 cursor-not-allowed")
        }
      >
        Verify Code
      </button>
    </div>
  );
}
