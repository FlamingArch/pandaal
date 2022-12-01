import React from "react";
import { motion } from "framer-motion";
import { Input } from "../components";
import { IconPhone } from "../components/icons";

export default function SignInPrompt({ setPhoneNumber, onSubmit }) {
  const [phone, setPhone] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("+91");

  React.useEffect(() => {
    setPhoneNumber(`${countryCode}${phone}`);
  }, [phone, countryCode]);

  React.useEffect(() => {
    if (!(countryCode[0] == "+")) {
      setCountryCode("+" + countryCode);
    }
  }, [countryCode]);

  return (
    <motion.div
      animate={{ opacity: [0, 1], scale: [1.2, 1] }}
      exit={{ opacity: [1, 0], scale: [1, 0.9] }}
      className="grid place-content-center h-[70vh] gap-8"
    >
      <p className="text-3xl font-bold text-center">Sign In</p>
      <div className="w-2/3 text-center mx-auto">
        Enter your Phone Number. A code will be sent to verify the number.
      </div>

      <div className="flex gap-4 mx-auto">
        <Input
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="min-w-[4rem] w-min"
        />
        <Input
          leading={
            <IconPhone className="w-6 h-6 fill-primary-500 dark:fill-primary-400" />
          }
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button
        onClick={onSubmit}
        className={
          "px-16 py-3 mt-20 w-fit mx-auto bg-primary-500 text-white rounded-2xl transition-all " +
          (onSubmit !== null
            ? "shadow-xl shadow-primary-300 dark:shadow-primary-700 hover:shadow-primary-500 hover:shadow-2xl hover:scale-105 hover:bg-primary-600"
            : "opacity-50 cursor-not-allowed")
        }
      >
        Send Code
      </button>
    </motion.div>
  );
}
