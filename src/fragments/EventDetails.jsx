import React from "react";
import { Text } from "../components";

const EventDetails = ({ event }) => {
  return (
    <div className="flex flex-col h-fit w-fit">
      <p
        className="uppercase text-primary-400"
        style={{ letterSpacing: "0.2rem" }}
      >
        {event.Category}
      </p>
      <Text headingLevel={4}>{event.Title}</Text>
      <Text accented>by {event.organisationName}</Text>
    </div>
  );
};

export default EventDetails;
