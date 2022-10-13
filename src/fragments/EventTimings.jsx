import React from "react";
import { Text } from "../components";
import { IconFeedback } from "../components/Icons";
import { getLongDate } from "../helpers";

const EventTimings = ({ event }) => {
  return (
    <div className="flex gap-3 items-center">
      <IconFeedback className="w-6 h-6 fill-primary-400" />
      <div className="flex flex-col">
        <Text>Start Time</Text>
        <p className="text-red-700 uppercase">{`
        ${event.startDate ? getLongDate(event.startDate) : ""} 
        ${event.startTime ? event.startTime : ""} 
        ${event.endDate || (event.endTime && "TO")} 
        ${event.endDate ? getLongDate(event.endDate) : ""}
        ${event.endTime ? event.endTime : ""}
        `}</p>
      </div>
    </div>
  );
};

export default EventTimings;
