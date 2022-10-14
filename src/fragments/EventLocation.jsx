import React from "react";
import { IconLocation, IconStreaming } from "../components/icons";

const EventLocation = ({ event }) => {
  return (
    <div className="flex flex-row gap-3">
      {event.onOff == 1 ? (
        <>
          <IconStreaming className="w-6 h-6 fill-primary-400" />
          <p>{event.onlinePlatform}</p>
        </>
      ) : (
        <>
          <IconLocation className="w-6 h-6 fill-primary-400" />
          <p>{event.offlineLocationAddress}</p>
        </>
      )}
    </div>
  );
};

export default EventLocation;
