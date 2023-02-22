import React from "react";
import { Navigate, useParams, useNavigate, Link } from "react-router-dom";
import {
  Scaffold,
  ImageBackdrop,
  Page,
  AppBar,
  LimitedParagraph,
  Button,
} from "../../components";
import {
  BackButton,
  EventCard,
  EventInfo,
  EventOrganisationDetails,
  FavouriteTile,
} from "../../fragments";
import { useEvent } from "../../hooks";
import { getRegistrationId, isLiked, toggleLike } from "../../functions";
import { FirebaseContext } from "../../contexts/firebase";
import { IconNewEvent, IconPreloader, IconShare } from "../../components/icons";
import { doc, getDoc } from "firebase/firestore";

export default function PageEvent() {
  const { eventId } = useParams();
  const { user, firestore, auth } = React.useContext<any>(FirebaseContext);

  const [userDoc, setUserDoc] = React.useState<any>(null);

  const [event, eventLoading, eventError] = useEvent(eventId ?? "null");
  const navigate = useNavigate();
  window.document.title = `${event?.Title} - Pandaal`;

  const [registered, setRegistered] = React.useState(false);

  React.useEffect(() => {
    if (user) {
      const ref = doc(firestore, "users", user.uid);
      getDoc(ref)
        .then((doc) => {
          if (doc.exists()) setUserDoc(doc.data());
          else navigate("/signup");
        })
        .catch((e) => {
          setUserDoc({ name: user.displayName });
        });
    }
  }, [user]);

  // React.useEffect(() => {
  //   if (user && eventId) {
  //     setRegistered(!!getRegistrationId(userDoc, eventId));
  //   }
  // }, []);

  React.useEffect(() => {
    if (userDoc) {
      setRegistered(!!getRegistrationId(userDoc, eventId!));
    }
  }, [userDoc]);

  if (eventError) return <Navigate to="/" />;

  const bottomBar = (
    <AppBar
      responsive
      className="bg-primary-50"
      padding={{ top: 4, bottom: 4, left: 6, right: 6 }}
      leading={
        <div className="flex flex-col">
          <div className="text-primary-500">Total Price</div>
          <div className="text-xl">
            {event?.price == 0 ? "Free" : `₹ ${event?.price}/person`}
          </div>
        </div>
      }
      actions={
        <Button
          type="emphasis"
          onClick={() => navigate(registered ? "ticket" : "instructions")}
        >
          {registered ? "View Ticket" : "Register"}
        </Button>
      }
    />
  );

  return (
    <Scaffold
      appBar={
        <AppBar
          backdrop="gradientBlack"
          background="clear"
          padding={6}
          responsive
          leading={<BackButton customPath="/" />}
        />
      }
      backdrop={<ImageBackdrop src={event?.bannerURL} dim blur />}
      leading={
        event && (
          <EventCard event={event} className="mx-auto m-12 place-self-center" />
        )
      }
      bottomBar={event && bottomBar}
    >
      {eventLoading ? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <IconPreloader className="w-8 h-8 stroke-gray-500" />
        </div>
      ) : eventError ? (
        <p className="text-xl text-center text-red-500 p-4">
          ERROR: {JSON.stringify(eventError)}
        </p>
      ) : (
        <Page
          backdrop="solid"
          cornerRadius={6}
          padding={6}
          margin={6}
          gap={8}
          responsive
          className={"overflow-x-hidden"}
        >
          <EventInfo event={event} />
          <EventOrganisationDetails event={event} />
          <FavouriteTile
            value={isLiked(event ?? {}, auth?.currentUser?.uid)}
            count={event?.likeCount ?? 0}
            onChange={async () =>
              await toggleLike(
                firestore,
                eventId ?? "null",
                auth?.currentUser?.uid
              )
            }
          />
          <LimitedParagraph heading="Event Description" limit={300}>
            {event?.description}
          </LimitedParagraph>
          <Link
            to={`/${eventId}/share`}
            className="flex items-center rounded-3xl shadow-md p-6 gap-6 bg-primary-50"
          >
            <div className="flex flex-col">
              <p className="text-lg font-semibold">Share this Event</p>
              <p className="text-gray-700">
                Why have all the fun alone, invite your friends too.
              </p>
            </div>
            <div className="grid h-full place-content-center ml-auto py-auto">
              <IconShare className="w-8 h-8 fill-primary-500" />
            </div>
          </Link>
          <LimitedParagraph heading="Terms & Conditions" limit={300}>
            {event?.termsAndConditions}
          </LimitedParagraph>
          <Link
            to={`/new`}
            className="rounded-3xl shadow-md shadow-[#AAAA] bg-primary-50 p-6 gap-2 grid place-content-center text-center"
          >
            <IconNewEvent className="w-8 h-8 stroke-gray-500 place-self-center fill-primary-500 " />
            <p className="text-lg font-semibold">List Your own Event</p>
            <p className="text-gray-700">
              Contact us to list your own event with Pandaal
            </p>
          </Link>
        </Page>
      )}
    </Scaffold>
  );
}
