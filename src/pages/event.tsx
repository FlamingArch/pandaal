import React from "react";
import { Scaffold, ImageBackdrop } from "../components";
import { useEvent } from "../hooks";

export default function PageEvent() {
  const id = "PyuUvuj3qF1RKQxluQIW";
  const event = useEvent(id);

  if (event === false) {
    return <p>Event not found</p>;
  }

  return (
    <Scaffold>
      <ImageBackdrop src={event?.bannerURL} dim blur />
    </Scaffold>
  );
}
