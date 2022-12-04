import React from "react";
import { Navigate, useParams, Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scaffold,
  ImageBackdrop,
  Page,
  AppBar,
  LimitedParagraph,
  BottomBar,
} from "../components";
import {
  BackButton,
  EventCard,
  EventInfo,
  EventOrganisationDetails,
  FavouriteTile,
} from "../fragments";
import { useEvent } from "../hooks";
import { isLiked, toggleLike } from "../functions";
import { FirebaseContext } from "../contexts/firebase";

export default function PageEvent() {
  const { eventId } = useParams();
  const event = useEvent(eventId ?? "null");
  window.document.title = `${event?.Title} - Pandaal`;
  const [likeCount, setLikeCount] = React.useState(-1);
  React.useEffect(() => setLikeCount(event?.likeCount ?? -1), [event]);

  if (event === false) {
    console.error("Event not found");
    window.document.title = "Pandaal: An Event Ecosystem";
    return <Navigate to="/" />;
  }

  const { auth } = React.useContext<any>(FirebaseContext);

  const handleToggleLike = async () => {
    const response = await toggleLike(
      eventId ?? "null",
      auth?.currentUser?.uid
    );
    if (response?.error) {
      console.error(response.error);
    } else {
      setLikeCount(response?.count! ?? -1);
    }
  };

  const bottomBar = (
    <BottomBar>
      <div className="flex flex-col">
        <div className="uppercase font-bold">Price</div>
        <div className="text-xl text-primary-500">
          {event?.price == 0 ? "Free" : event?.price}
        </div>
      </div>
      <Link
        to={"instructions"}
        className="px-8 py-3 bg-primary-500 text-white rounded-2xl shadow-xl transition-all shadow-primary-300 dark:shadow-primary-700 hover:shadow-primary-500 hover:shadow-2xl hover:scale-105 hover:bg-primary-600"
      >
        Register
      </Link>
    </BottomBar>
  );

  return (
    <AnimatePresence>
      <motion.div
        animate={{ x: [window.innerWidth, 0] }}
        exit={{ x: [0, window.innerWidth] }}
        transition={{ type: "spring", duration: 0.3, staggerChildren: 0.3 }}
        className="fixed w-screen h-screen top-0 left-0 z-10 shadow-2xl overflow-scroll bg-black flex flex-col"
      >
        <Scaffold appBar={<AppBar leading={<BackButton />} />}>
          <ImageBackdrop src={event?.bannerURL} dim blur />
          {bottomBar}
          <div
            className="z-20 p-8 flex flex-col gap-8 h-fit pb-56 overflow-y-auto"
            style={{ scrollBehavior: "smooth" }}
          >
            <EventCard event={event} className=" place-self-center" />
            <Page padding={6} gap={8} rounded shadow responsive material>
              <EventInfo event={event} />
              <EventOrganisationDetails event={event} />
              <FavouriteTile
                value={isLiked(event ?? {}, auth?.currentUser?.uid)}
                count={likeCount}
                onChange={handleToggleLike}
              />
              <LimitedParagraph heading="Event Description" limit={100}>
                {event?.description}
              </LimitedParagraph>
            </Page>
          </div>
        </Scaffold>
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
