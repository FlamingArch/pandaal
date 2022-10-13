import React from "react";
import { Text, Button, Page, Scaffold } from "../components";
import { PageInstructions } from ".";
import Firebase, { useEventDocument } from "../contexts/Firebase";

import {
  ImageCard,
  EventDetails,
  EventTimings,
  EventLocation,
  FavoriteCard,
  EventDescription,
  EventSocials,
  EventTnC,
} from "../fragments";

const BottomBar = ({ children }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-100 rounded-t-xl">
      <div className="mx-auto max-w-[900px] p-4 flex">{children}</div>
    </div>
  );
};

export default function PageEvent({ match }) {
  const eventID = match;
  // .params.eventId;
  const firebase = React.useContext(Firebase.Context);
  const event = useEventDocument(eventID);
  const Navigator = React.useContext(Scaffold.Context);

  if (event) {
    return (
      <Page.Full>
        <div className="w-full place-items-center grid pt-12">
          <ImageCard src={event.bannerURL} />
        </div>
        <Page.Responsive>
          <div className="shadow-2xl bg-white flex flex-col gap-4 m-12 p-6 rounded-2xl mb-36">
            <EventDetails event={event} />
            <EventTimings event={event} />
            <EventLocation event={event} />
            <FavoriteCard
              likes={event.likeCount}
              favourite={
                firebase.user &&
                event.likedBy.filter((e) => e === firebase.user.uid)
              }
              onClick={() => {
                if (firebase.user) {
                  firebase.toggleLike(eventID);
                } else {
                  Navigator.push(
                    <PageSignIn
                      callback={() => {
                        firebase.toggleLike(eventID);
                        Navigator.dismiss();
                      }}
                    />
                  );
                }
              }}
            />
            <EventDescription event={event} />
            <EventSocials event={event} />
            <EventTnC event={event} />
          </div>
        </Page.Responsive>
        <BottomBar>
          <div className="flex-col flex flex-grow">
            <Text accented>Total price</Text>
            <p className="text-xl text-green-600">Free</p>
          </div>
          <div className="flex-grow justify-items-stretch place-items-stretch">
            <Button
              type="primary"
              onClick={() =>
                Navigator.push(
                  <PageInstructions eventID={eventID} event={event} />
                )
              }
            >
              Registration
            </Button>
          </div>
        </BottomBar>

        <div className="grid place-items-center fixed top-0 left-0 -z-20">
          <img
            src={event.bannerURL}
            className=" scale-150 blur-xl object-cover w-screen h-screen"
          />
        </div>
      </Page.Full>
    );
  }
  return "Loading...";
}
