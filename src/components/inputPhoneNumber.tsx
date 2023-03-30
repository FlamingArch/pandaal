import constants from "../constants";
import { IconPhone } from "./icons";
import Input from "./input";

type InputPhoneNumberProps = {
  phoneNumber: string;
  onChange: (val: string) => void;
  countryCode?: string;
  placeholder?: string;
};

export default function InputPhoneNumber(props: InputPhoneNumberProps) {
  return (
    <Input
      type="tel"
      inputMode="tel"
      placeholder={props.placeholder ?? "Phone Number"}
      value={props.phoneNumber}
      leading={
        <>
          <IconPhone className="w-6 h-6 mx-3" />
          <p className="font-medium">{props.countryCode ?? "+91"}</p>
        </>
      }
      onChange={(e) => {
        const { value } = e.target;
        if (
          value.length < 11 &&
          (constants.regexOnlyDigits.test(value) || value === "")
        ) {
          props.onChange(value);
        }
      }}
    />
  );
}
