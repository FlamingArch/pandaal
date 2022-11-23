import React from "react";
import { Scaffold, ImageBackdrop } from "../components";
import { useEvent } from "../hooks";
import { useParams } from "react-router-dom";

export default function PageEvent() {
  const { eventId } = useParams();
  const event = useEvent(eventId ?? "null");

  if (event === false) {
    return <p>Event not found</p>;
  }

  return (
    <div className="fixed w-screen h-screen top-0 left-0">
      <ImageBackdrop src={event?.bannerURL} dim blur />
    </div>
  );
}
