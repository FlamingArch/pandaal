import React from "react";
import Input from "../components/input";
import Text from "../components/text";

export default function ViewAttendeeInput({ onChange }) {
  const [value, setValue] = React.useState(",");

  React.useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <div className="bg-primary-50 rounded-2xl flex-col p-4 gap-3 flex">
      <Text accented>Attendee 1 </Text>
      <div className="flex gap-4">
        <Input
          placeholder="Name"
          onChange={(e) => setValue(`${e.target.value},${value.split(",")[1]}`)}
          className="flex-grow"
        />
        <Input
          placeholder="Age"
          onChange={(e) => setValue(`${value.split(",")[0]},${e.target.value}`)}
          className="w-32"
        />
      </div>
    </div>
  );
}
