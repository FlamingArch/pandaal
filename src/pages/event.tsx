import { AppBar, Button, Page, Text } from "../components";
import {
  IconBack,
  IconClock,
  IconFavouriteFill,
  IconInstagram,
  IconLocationArrow,
  IconMail,
  IconPlus,
  IconPreloader,
  IconShareAlt,
  IconStreaming,
  IconWeb,
} from "../components/icons";
import { useAppStore } from "../hooks/useAppStore";
import { convertToTextDate, parseHTML } from "../functions";

import useEvent from "../hooks/useEvent";
import { Outlet, useNavigate, useParams } from "react-router-dom";

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

  if (event?.exists) document.title = event.data!.title;

  if (isLoading) {
    return (
      <Page contentClassName="justify-center items-center">
        <div className="flex gap-2">
          <IconPreloader className="w-6 h-6 stroke-primary-500 nodark:stroke-white" />
          <p className="font-medium">Loading</p>
        </div>
      </Page>
    );
  }

  if (isError) {
    return <Page>{`Error fetching event: ${error}`}</Page>;
  }

  if (!event.exists) {
    navigate("/");
  }

  const eventData = event.data!;

  const bottomAppBar = (
    <AppBar
      responsive
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
          onClick={() => navigate(`/${eventId}/instructions`)}
        />
      }
    />
  );

  const appBar = (
    <AppBar
      sticky
      responsive
      backdrop="gradientBlack"
      className="slideInTop z-10"
      padding={{ bottom: 10 }}
      leading={
        <Button
          buttonStyle="actionSecondaryTransparentWhite"
          onClick={() => navigate("/")}
          Icon={IconBack}
        />
      }
      actions={
        <Button
          buttonStyle="actionSecondaryTransparentWhite"
          onClick={() => console.log("TODO: Go back to share page")}
          Icon={IconShareAlt}
        />
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
    <Page
      backdrop={backdrop}
      appBar={appBar}
      leading={card}
      bottomAppBar={bottomAppBar}
      padding={0}
    >
      <div
        className="card nodark:bg-black nodark:text-white col responsive gap-5 fadeInBottom flex-grow"
        // style={{ animationDelay: "0ms", animationDuration: "500ms" }}
      >
        <div className="border w-8 border-black mx-auto"></div>

        <Text headingLevel={6}>{eventData.title}</Text>

        <p className="font-medium">{eventData.Category}</p>

        <div className="flex gap-2 items-center pb-2">
          <IconClock className="w-6 h-6 fill-primary-500" />
          <Text>
            {convertToTextDate(eventData.startDate)} {eventData.startTime}
            {(eventData.endDate || eventData.endTime) &&
              " to " + (eventData.endDate ? eventData.endDate : "")}
            {eventData.endTime && " " + eventData.endTime}
          </Text>
        </div>

        <p className="font-medium">
          {eventData.onOff == 1 ? "Platform" : "Location"}
        </p>
        <Button
          buttonStyle="cardBigSecondaryReverse"
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
            buttonStyle="cardSquareSecondary"
            label="Add to Favourites"
            Icon={IconFavouriteFill}
          />
          <Button
            buttonStyle="cardSquareSecondary"
            label="Share"
            Icon={IconShareAlt}
          />
        </div>

        <p className="font-medium">Event Description</p>
        <Text>{parseHTML(eventData.description)}</Text>

        <p className="font-medium">Connect With Us On</p>
        <Button
          buttonStyle="cardSecondary"
          label="Instagram"
          Icon={IconInstagram}
        />
        <Button buttonStyle="cardSecondary" label="Mail" Icon={IconMail} />
        <Button buttonStyle="cardSecondary" label="Website" Icon={IconWeb} />

        <p className="font-medium">Organise With Us</p>
        <Button
          buttonStyle="cardBigReverse"
          Icon={IconPlus}
          className=""
          label={
            <div className="flex flex-col items-start text-white">
              <span className="font-bold">pandaal</span>
              <span className="text-lg">List your own event</span>
            </div>
          }
        ></Button>

        <div className="h-20" />
      </div>
      <div className="flex-grow" />
      <Outlet />
    </Page>
  );
}
