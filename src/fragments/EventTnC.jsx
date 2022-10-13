import React from "react";
import { Text } from "../components";
import { parseHTML } from "../helpers";

const EventTnC = ({ event }) => {
  return (
    <div>
      <Text headingLevel={4}>Terms and Conditions</Text>
      <p className="flex gap-3 flex-col">
        {parseHTML(event.termsAndConditions)}
      </p>
    </div>
  );
};

export default EventTnC;
