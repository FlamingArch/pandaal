import { Text } from "../components";

export default function SignInPromptText() {
  return (
    <>
      <p className="font-medium text-2xl">Sign In</p>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-medium">Enter your Phone Number</p>
        <p>We need to validate your phone number by sending a 6-Digit Code</p>
      </div>
    </>
  );
}
