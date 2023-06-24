import { Text } from "../components";

export default function Legal() {
  return (
    <Text headingLevel={0} className="link text-center">
      You agree to our <a href="pandaal.in/tnc">Terms and Conditions</a> and{" "}
      <a href="pandaal.in/privacy-policy">Privacy Policy</a>
    </Text>
  );
}
