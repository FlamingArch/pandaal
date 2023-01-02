import React from "react";

export default function eventInfo({ event }: { event?: any }) {
  return (
    <div className="flex flex-col gap-2">
      <p
        className="flex-col uppercase font-light opacity-80"
        style={{ letterSpacing: 4 }}
      >
        {event?.Category}
      </p>
      <p className="text-xl font-medium">{event?.Title}</p>
      <p className="text-primary-500">by {event?.organisationName}</p>
    </div>
  );
}
