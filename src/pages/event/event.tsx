import React from "react";
import {
  Navigate,
  useParams,
  useNavigate,
  useLocation,
  useOutlet,
  Link,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scaffold,
  ImageBackdrop,
  Page,
  AppBar,
  LimitedParagraph,
  BottomBar,
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
import { isLiked, toggleLike } from "../../functions";
import { FirebaseContext } from "../../contexts/firebase";
import { IconNewEvent, IconPreloader, IconShare } from "../../components/icons";

export default function PageEvent() {
  const { eventId } = useParams();
  const event = useEvent(eventId ?? "null");
  const navigate = useNavigate();
  window.document.title = `${event?.Title} - Pandaal`;
  const outlet = useOutlet();

  if (event === false) {
    console.error("Event not found");
    window.document.title = "Pandaal: An Event Ecosystem";
    return <Navigate to="/" />;
  }

  const { auth, firestore } = React.useContext<any>(FirebaseContext);

  const location = useLocation();
  const zindex = location.pathname.split("/").length * 10;

  const handleToggleLike = async () => {
    const response = await toggleLike(
      firestore,
      eventId ?? "null",
      auth?.currentUser?.uid
    );
  };

  const bottomBar = (
    <BottomBar>
      <div className="flex flex-col">
        <div className="text-primary-500">Total Price</div>
        <div className="text-xl">
          {event?.price == 0 ? "Free" : `₹ ${event?.price}/person`}
        </div>
      </div>
      <Button type="emphasis" onClick={() => navigate("instructions")}>
        Register
      </Button>
    </BottomBar>
  );

  return (
    <AnimatePresence>
      <Scaffold
        appBar={<AppBar backdrop="gradientBlack" background="clear" padding={6} responsive leading={<BackButton customPath="/" />} />}
        backdrop={<ImageBackdrop src={event?.bannerURL} dim blur />}
        overlay={outlet}
        leading={
          event && (
            <EventCard
              event={event}
              className="mx-auto m-12 place-self-center"
            />
          )
        }
        bottomBar={event && bottomBar}
      >
        {event ? (
          <Page
            backdrop="solid"
            cornerRadius={6}
            padding={6}
            margin={{ top: 12, left: 6, bottom: 28, right: 6 }}
            gap={12}
            responsive
          >
            <EventInfo event={event} />
            <EventOrganisationDetails event={event} />
            <FavouriteTile
              value={isLiked(event ?? {}, auth?.currentUser?.uid)}
              count={event?.likeCount ?? 0}
              onChange={handleToggleLike}
            />
            <LimitedParagraph heading="Event Description" limit={300}>
              {event?.description}
            </LimitedParagraph>
            <Link
              to={`/${eventId}/share`}
              className="flex rounded-3xl shadow-md p-6 gap-6"
            >
              <div className="flex flex-col">
                <p className="text-lg font-semibold">Share this Event</p>
                <p className="">
                  Why have all the fun alone, invite your friends too.
                </p>
              </div>
              <div className="grid h-full place-content-center">
                <IconShare className="w-8 h-8 stroke-gray-500" />
              </div>
            </Link>
            <LimitedParagraph heading="Terms & Conditions" limit={300}>
              {event?.termsAndConditions}
            </LimitedParagraph>
            <Link
              to={`/new`}
              className="rounded-3xl shadow-md p-6 gap-2 grid place-content-center text-center"
            >
              <IconNewEvent className="w-8 h-8 stroke-gray-500 place-self-center" />
              <p className="text-lg font-semibold">List Your own Event</p>
              <p className="">Contact us to list your own event with Pandaal</p>
            </Link>
          </Page>
        ) : (
          <div className="w-screen h-screen bg-gray-50 flex flex-col items-center justify-center">
            <IconPreloader className="w-8 h-8 stroke-gray-500" />
          </div>
        )}
      </Scaffold>
    </AnimatePresence>
  );
}
