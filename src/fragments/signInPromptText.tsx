import { Text } from "../components";

export default function SignInPromptText() {
  return (
    <>
      <Text className="font-medium text-2xl">Sign In</Text>

      <div className="flex flex-col gap-2">
        <Text headingLevel={0.5} className="font-medium">
          Enter your Phone Number
        </Text>
        <Text>
          We need to validate your phone number by sending a 6-Digit Code
        </Text>
      </div>
    </>
  );
}
