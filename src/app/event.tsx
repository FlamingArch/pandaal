import { AppBar, Button, Scaffold, Text } from "../components";
import {
  IconBack,
  IconClock,
  IconFavouriteFill,
  IconLocationArrow,
  IconPlus,
  IconPreloader,
  IconShareAlt,
  IconStreaming,
} from "../components/icons";
import { useAppStore } from "../hooks/useAppStore";
import { parseHTML } from "../functions";

import useEvent from "../hooks/useEvent";
import { useNavigate, useParams } from "@tanstack/router";

export default function PageEvent() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const { firestore } = useAppStore((state) => ({
    firestore: state.firestore,
  }));
  const {
    data: event,
    isLoading,
    isError,
    error,
  } = useEvent(firestore, eventId!);

  if (isLoading) {
    return (
      <div className="w-screen h-screen place-content-center grid grid-flow-col gap-3">
        <IconPreloader className="w-6 h-6 stroke-primary-500" />{" "}
        <p className="font-medium">Loading</p>
      </div>
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
      responsive
      background="materialShadow"
      className="slideInBottom fixed z-10 bottom-0 left-0 right-0"
      leading={
        <div className="flex flex-col">
          <Text accented>Price</Text>
          <Text headingLevel={0.25}>
            {eventData?.price == 0 ? "Free" : `Rs. ${eventData.price}`}
          </Text>
        </div>
      }
      actions={
        <Button
          buttonStyle="emphasis"
          label="Register"
          className="w-64"
          onClick={() => navigate({ to: `/instructions/${eventId}` })}
        ></Button>
      }
    />
  );

  const appBar = (
    <AppBar
      sticky
      responsive
      background="gradientBlack"
      className="slideInTop"
      padding={{ bottom: 10 }}
      leading={
        <Button
          onClick={() => navigate({ to: "/" })}
          className="bg-opacity-0 fill-white hover:fill-white rounded-xl hover:bg-opacity-10"
        >
          <IconBack className="w-6 h-6" />
        </Button>
      }
      actions={
        <Button
          className="bg-opacity-0 fill-white hover:fill-white rounded-xl hover:bg-opacity-10"
          onClick={() => console.log("TODO: Go back to share page")}
        >
          <IconShareAlt className="w-6 h-6" />
        </Button>
      }
    ></AppBar>
  );

  const card = (
    <img
      src={eventData.bannerURL}
      className="w-48 aspect-[9/12] mx-auto rounded-2xl shadow-xl mt-16 sticky top-20 -z-10 mb-20 fadeInBottom"
    ></img>
  );

  const backdrop = (
    <img
      src={eventData.bannerURL}
      className=" blur-xl fixed -z-10 object-fill w-screen h-screen scale-125 brightness-50 saturate-150 bg-black fadeIn"
    />
  );

  return (
    <Scaffold
      backdrop={backdrop}
      appBar={appBar}
      leading={card}
      bottomAppBar={bottomAppBar}
      padding={0}
    >
      <div
        className="card col responsive gap-4 fadeInBottom flex-grow"
        // style={{ animationDelay: "0ms", animationDuration: "500ms" }}
      >
        <div className="border w-8 border-black mx-auto"></div>

        <Text headingLevel={6}>{eventData.title}</Text>

        <p className="font-medium">{eventData.Category}</p>

        <div className="flex gap-2 items-center pb-2">
          <IconClock className="w-6 h-6 fill-primary-500" />
          <Text>
            {eventData.startDate} {eventData.startTime}
            {(eventData.endDate || eventData.endTime) &&
              " to " + (eventData.endDate ? eventData.endDate : "")}
            {eventData.endTime && " " + eventData.endTime}
          </Text>
        </div>

        <p className="font-medium">Location</p>
        <Button
          buttonStyle="cardSecondary"
          className="p-6 rounded-[16px] text-primary-500 font-medium"
          label={
            eventData.onOff == 1
              ? eventData.onlinePlatform
              : eventData.offlineLocationAddress
          }
          Icon={eventData.onOff == 1 ? IconStreaming : IconLocationArrow}
        />

        <p className="font-medium">Options</p>

        <div className="flex gap-4">
          <Button
            className="p-6 max-w-[167px] rounded-[16px] flex-col text-[#823F73] bg-[#FDF4FD] hover:bg-[#EFDDEF] fill-[#823F73] hover:fill-[#612354] font-medium aspect-square"
            buttonStyle="cardSecondary"
            label="Add to Favourites"
            Icon={IconFavouriteFill}
          />
          <Button
            className="p-6 max-w-[167px] rounded-[16px] flex-col text-primary-500 font-medium aspect-square"
            buttonStyle="cardSecondary"
            label="Add to Favourites"
            Icon={IconFavouriteFill}
          />
        </div>

        <p className="font-medium">Event Description</p>
        <Text>{parseHTML(eventData.description)}</Text>

        <p className="font-medium">Connect With Us On</p>
        <Button
          className="bg-pink-50 hover:bg-pink-100 fill-pink-500 hover:fill-pink-700 font-medium text-pink-500"
          buttonStyle="cardSecondaryReverse"
          label="Instagram"
          Icon={eventData.onOff == 1 ? IconStreaming : IconLocationArrow}
        />
        <Button
          className="bg-blue-50 hover:bg-blue-100 fill-blue-500 hover:fill-blue-700 font-medium text-blue-500"
          buttonStyle="cardSecondaryReverse"
          label="Mail"
          Icon={eventData.onOff == 1 ? IconStreaming : IconLocationArrow}
        />
        <Button
          className="bg-green-50 hover:bg-green-100 fill-green-500 hover:fill-green-700 font-medium text-green-500"
          buttonStyle="cardSecondaryReverse"
          label="Website"
          Icon={eventData.onOff == 1 ? IconStreaming : IconLocationArrow}
        />

        <p className="font-medium">Organise With Us</p>
        <Button
          buttonStyle="card"
          className="p-6 rounded-[16px] text-primary-500"
          // label="pandaal"
          Icon={IconPlus}
        >
          <div className="flex flex-col items-start">
            <p className="font-bold">pandaal</p>
            <p className="text-lg">List your own event</p>
          </div>
        </Button>

        <div className="h-16" />
      </div>
      <div className="flex-grow" />
    </Scaffold>
  );
}
