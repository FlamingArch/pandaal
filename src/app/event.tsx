import { AppBar, Button, Scaffold, Text } from "../components";
import {
  IconBack,
  IconClock,
  IconLocation,
  IconPreloader,
  IconShare,
  IconShareAlt,
  IconStreaming,
} from "../components/icons";
import { useAppStore } from "../hooks/useAppStore";
import { parseHTML } from "../functions";

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
      <Scaffold>
        <IconPreloader className="stroke-primary-500" /> Loading...
      </Scaffold>
    );
  }

  if (isError) {
    return <Scaffold>{`Error fetching event: ${error}`}</Scaffold>;
  }

  if (!event.exists) {
    return <h2>Event not found</h2>;
  }

  const eventData = event.data!;

  const bottomAppBar = (
    <AppBar
      sticky="bottom"
      responsive
      background="materialShadow"
      leading={
        <div className="flex flex-col">
          <Text accented>Price</Text>
          <Text headingLevel={0.25}>Rs. 2200</Text>
        </div>
      }
      actions={
        <button className="rounded-xl bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-400 hover:shadow-xl transition p-3 px-16 text-white">
          <Text headingLevel={0.25}>Register</Text>
        </button>
      }
    />
  );
  const appBar = (
    <AppBar
      sticky
      responsive
      background="gradientBlack"
      padding={{ bottom: 10 }}
      leading={
        <Button onClick={() => console.log("TODO: Go back to previous page")}>
          <IconBack className="w-6 h-6" />
        </Button>
      }
      actions={
        <Button onClick={() => console.log("TODO: Go back to share page")}>
          <IconShareAlt className="w-6 h-6" />
        </Button>
      }
    ></AppBar>
  );

  const card = (
    <img
      src={eventData.bannerURL}
      className="w-48 aspect-[9/12] mx-auto rounded-2xl shadow-xl mt-6 sticky top-20 -z-10 mb-20"
    ></img>
  );

  const backdrop = (
    <img
      src={eventData.bannerURL}
      className=" blur-2xl fixed -z-10 object-fill w-screen h-screen scale-125 brightness-50 saturate-150"
    />
  );

  return (
    <div className="flex flex-col min-h-screen">
      {backdrop}
      {appBar}
      {card}
      <div className="bg-white m-6 p-6 w-auto rounded-3xl md:mx-auto shadow-2xl md:w-2/3 lg:w-1/2 gap-2 flex flex-col">
        <Text headingLevel={5}>{eventData.title}</Text>
        <Text accented className="font-medium">
          {eventData.organisationName}
        </Text>

        <div className="flex gap-2 items-center pb-2">
          <IconClock className="w-6 h-6 fill-primary-500" />
          <Text>
            {eventData.startDate} {eventData.startTime}
            {(eventData.endDate || eventData.endTime) &&
              " to " + (eventData.endDate ? eventData.endDate : "")}
            {eventData.endTime && " " + eventData.endTime}
          </Text>
        </div>
        <div className="flex gap-2 items-center pb-2">
          {eventData.onOff == 1 ? (
            <>
              <IconStreaming className="w-6 h-6 fill-primary-500" />
              <Text>{eventData.onlinePlatform}</Text>
            </>
          ) : (
            <>
              <IconLocation className="w-6 h-6 fill-primary-500" />
              <Text>{eventData.offlineLocationAddress}</Text>
            </>
          )}
        </div>

        <Text headingLevel={6}>Event Description</Text>
        <Text>{parseHTML(eventData.description)}</Text>
      </div>
      <div className="flex-grow" />
      {bottomAppBar}
    </div>
  );
}
