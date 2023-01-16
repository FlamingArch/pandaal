import React from "react";
import {
  Navigate,
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
  useOutlet,
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
import { IconPreloader } from "../../components/icons";

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
        <div className="uppercase font-bold">Price</div>
        <div className="text-xl text-primary-500">
          {event?.price == 0 ? "Free" : `₹ ${event?.price}`}
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
        appBar={<AppBar leading={<BackButton customPath="/"/>} />}
        backdrop={<ImageBackdrop src={event?.bannerURL} dim blur />}
        overlay={outlet}
        leading={
          event && (
            <EventCard
              event={event}
              className="mx-auto m-8 place-self-center"
            />
          )
        }
        bottomBar={event && bottomBar}
      >
        {event ? (
          <Page gap={6} backdrop="solid" rounded className="pb-48 p-8">
            <EventInfo event={event} />
            <EventOrganisationDetails event={event} />
            <FavouriteTile
              value={isLiked(event ?? {}, auth?.currentUser?.uid)}
              count={event?.likeCount ?? 0}
              onChange={handleToggleLike}
            />
            <LimitedParagraph heading="Event Description" limit={100}>
              {event?.description}
            </LimitedParagraph>
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
