import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function handleSubmit(auth, phone, countryCode, completion) {
  const verifier = new RecaptchaVerifier("rcv", { size: "invisible" }, auth);
  signInWithPhoneNumber(auth, `${countryCode}${phone}`, verifier)
    .then((confirmation) => {
      window.confirmationResult = confirmation;
      completion();
    })
    .catch((error) => {
      console.error(error);
    });
}
