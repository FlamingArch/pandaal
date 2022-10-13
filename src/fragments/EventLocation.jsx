import React from "react";
import { IconFeedback, IconOrganisation } from "../components/icons";

const EventLocation = ({ event }) => {
  return (
    <div className="flex flex-row gap-3">
      {event.onOff == 1 ? (
        <>
          <IconFeedback className="w-6 h-6 fill-primary-400" />
          <p>{event.onlinePlatform}</p>
        </>
      ) : (
        <>
          <IconOrganisation className="w-6 h-6 fill-primary-400" />
          <p>{event.offlineLocationAddress}</p>
        </>
      )}
    </div>
  );
};

export default EventLocation;
