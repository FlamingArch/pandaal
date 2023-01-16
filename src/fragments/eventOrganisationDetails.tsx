import React from "react";
import { IconClock, IconLocation, IconStreaming } from "../components/icons";
import { getFullDateRange } from "../helpers";

export default function EventOrganisationDetails({ event }: { event?: any }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {event?.onOff == 1 ? (
          <IconStreaming className="w-6 h-6 fill-primary-500" />
        ) : (
          <IconLocation className="w-6 h-6 fill-primary-500" />
        )}
        <p className="opacity-80">
          {event?.onOff == 1
            ? event?.onlinePlatform
            : event?.offlineLocationAddress}
        </p>
      </div>
      <div className="flex gap-2">
        <IconClock className="w-6 h-6 fill-primary-500" />
        <p className="opacity-80">{getFullDateRange(event)}</p>
      </div>
    </div>
  );
}
