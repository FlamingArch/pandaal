import React from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Outlet } from "react-router-dom";

import {
  Scaffold,
  ImageBackdrop,
  Page,
  AppBar,
  LimitedParagraph,
} from "../components";
import { IconClock, IconLocation, IconStreaming } from "../components/icons";
import { BackButton, EventCard, FavouriteTile } from "../fragments";
import { getFullDateRange } from "../helpers";
import { useEvent } from "../hooks";

export default function PageEvent() {
  const { eventId } = useParams();
  const event = useEvent(eventId ?? "null");
  const [liked, setLiked] = React.useState(false);

  if (event === false) {
    return <p>Event not found</p>;
  }

  window.document.title = `${event?.Title} - Pandaal`;

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
          <div className="fixed bottom-0 z-50 left-0 right-0 w-full transition-all shadow-3xl bg-white dark:bg-black dark:text-white dark:bg-opacity-80 bg-opacity-80 backdrop-filter backdrop-brightness-200 dark:bg-brightness-50 backdrop-saturate-200 backdrop-blur-3xl ">
            <div className="flex-grow flex justify-between items-center mx-auto md:w-2/3 p-8 xl:w-1/2">
              <div className="flex flex-col">
                <div className="uppercase font-bold">Price</div>
                <div className="text-xl text-primary-500">Price</div>
              </div>
              <Link
                to={"instructions"}
                className="px-8 py-3 bg-primary-500 text-white rounded-2xl shadow-xl transition-all shadow-primary-300 dark:shadow-primary-700 hover:shadow-primary-500 hover:shadow-2xl hover:scale-105 hover:bg-primary-600"
              >
                Register
              </Link>
            </div>
          </div>
          <div
            className="z-20 p-8 flex flex-col gap-8 h-fit pb-56 overflow-y-auto"
            style={{ scrollBehavior: "smooth" }}
          >
            <EventCard event={event} className=" place-self-center" />
            <Page padding={12} gap={8} rounded shadow responsive material>
              <div className="flex flex-col gap-2">
                <p
                  className="flex-col uppercase font-light opacity-80"
                  style={{ letterSpacing: 4 }}
                >
                  {event?.Category}
                </p>
                <p className="text-xl font-medium">{event?.Title}</p>
                <p className="text-primary-500">by {event?.organisationName}</p>
              </div>
              <div className="flex gap-2">
                {event?.onOff == 1 ? (
                  <IconStreaming className="w-6 h-6 fill-primary-500" />
                ) : (
                  <IconLocation className="w-6 h-6 fill-primary-500" />
                )}
                <p className="opacity-80">
                  {event?.onOff == 1
                    ? event?.onlinePlatform
                    : event?.offlineLocationAddress}
                </p>
              </div>
              <div className="flex gap-2">
                <IconClock className="w-6 h-6 fill-primary-500" />
                <p className="opacity-80">{getFullDateRange(event)}</p>
              </div>

              <FavouriteTile
                value={liked}
                count={11}
                onChange={() => setLiked(!liked)}
              />

              <div className="rounded-3xl cursor-pointer bg-white bg-opacity-80 backdrop-filter backdrop-saturate-200 backdrop-brightness-110 items-center dark:bg-black dark:bg-opacity-80 p-6 flex justify-between gap-4">
                <LimitedParagraph heading="Event Description" limit={100}>
                  {event?.description}
                </LimitedParagraph>
              </div>
            </Page>
          </div>
        </Scaffold>
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
