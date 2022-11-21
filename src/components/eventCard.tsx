import React from "react";

export default function ViewEventCard({ event }: { event: any }) {
  return (
    <div
      key={event.id}
      className="flex flex-col flex-shrink-0 w-[210px] transition-all hover:bg-primary-50 hover:scale-110 hover:rounded-3xl cursor-pointer hover:p-2"
    >
      <img
        src={event.bannerURL}
        className="aspect-[9/12] object-cover object-center rounded-3xl"
      />
      <div className="flex flex-col p-4 gap-2">
        <p className="text-xl font-medium">{event.Title}</p>
        <p className="">{event.organisationName}</p>
        <p className="font-bold text-primary-500">
          {event.price === "0" ? "Free" : event.price}
        </p>
      </div>
    </div>
  );
}
