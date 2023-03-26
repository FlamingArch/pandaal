import { useEffect, useState } from "react";
import { AppBar, Page, Text } from "../components";
import { IconBack, IconPreloader, IconShare } from "../components/icons";
import { useAppStore } from "../hooks/useAppStore";

import useEvent from "../hooks/useEvent";

export default function PageEvent() {
  const eventId = "ED61YENHLt4mLSf2SGCl";

  const { firestore } = useAppStore((state) => ({
    firestore: state.firestore,
  }));
  const {
    data: event,
    isLoading,
    isError,
    error,
  } = useEvent(firestore, eventId);

  if (isLoading) {
    return (
      <Page>
        <IconPreloader className="stroke-primary-500" /> Loading...
      </Page>
    );
  }

  if (isError) {
    return <Page>{`Error fetching event: ${error}`}</Page>;
  }

  if (!event.exists) {
    return <h2>Event not found</h2>;
  }

  const appBar = (
    <AppBar
      sticky
      // title={event.data?.Title ?? "Error Destructuring Optional"}
      background="gradientBlack"
      leading={<IconBack className="w-6 h-6 fill-white m-6" />}
      actions={<IconShare className="w-6 h-6 fill-white m-6" />}
    ></AppBar>
  );

  const card = (
    <img
      src={event.data?.bannerURL}
      className="w-48 aspect-[9/12] mx-auto rounded-2xl shadow-xl mt-6 sticky top-20 -z-10"
    ></img>
  );

  return (
    <Page
      backdrop={
        <img
          src={event.data?.bannerURL}
          className=" blur-2xl object-fill w-screen h-screen scale-125 brightness-50 saturate-150"
        />
      }
      appBar={appBar}
      leading={card}
    >
      <Page
        gap={2}
        className="bg-white rounded-2xl w-auto md:w-2/3 lg:w-1/2 md:mx-auto shadow-2xl"
      >
        <Text headingLevel={5}>{event.data?.title}</Text>
        <Text accented>{event.data?.organisationName}</Text>
      </Page>
    </Page>
  );
}
