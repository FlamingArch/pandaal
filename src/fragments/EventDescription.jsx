import React from "react";
import { LimitParagraph, Text } from "../components";
import { parseHTML } from "../helpers";

const EventDescription = ({ event }) => {
  return (
    <LimitParagraph heading="Event Description">
      {event.description}
    </LimitParagraph>
  );
};

export default EventDescription;
