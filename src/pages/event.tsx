import React from "react";
import { Scaffold, ImageBackdrop } from "../components";
import { useEvent } from "../hooks";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IconBack } from "../components/icons";
import { Link, Outlet } from "react-router-dom";

export default function PageEvent() {
  const { eventId } = useParams();
  const event = useEvent(eventId ?? "null");

  if (event === false) {
    return <p>Event not found</p>;
  }

  let backButton = (
    <Link
      to={"/"}
      className="cursor-pointer transition p-3 w-fit flex gap-3 rounded-xl bg-primary-50 hover:bg-primary-100 fill-black hover:fill-primary-500 hover:text-primary-500"
    >
      <IconBack className="w-6 h-6" />
    </Link>
  );

  return (
    <AnimatePresence>
      <motion.div
        animate={{ x: [window.innerWidth, 0] }}
        exit={{ x: [0, window.innerWidth] }}
        transition={{ type: "spring", duration: 0.3, staggerChildren: 0.3 }}
        className="fixed w-screen h-screen top-0 left-0 z-10 shadow-2xl overflow-scroll bg-black flex flex-col"
      >
        <ImageBackdrop src={event?.bannerURL} dim blur />
        <div className="fixed bottom-0 z-50 left-0 right-0 w-full p-8 transition-all flex-grow shadow-2xl bg-white dark:bg-black dark:text-white dark:bg-opacity-80 bg-opacity-60 backdrop-filter backdrop-brightness-200 dark:bg-brightness-50 backdrop-saturate-200 flex backdrop-blur-3xl justify-between items-center">
          <div className="flex flex-col">
            <div className="uppercase font-bold">Price</div>
            <div className="text-xl text-primary-500">Price</div>
          </div>
          <Link
            to={"instructions"}
            className="px-8 py-3 bg-primary-500 text-white rounded-2xl shadow-xl transition-all shadow-red-300 dark:shadow-primary-700 hover:shadow-primary-500 hover:shadow-xl"
            // to={"register"}
          >
            Register
          </Link>
        </div>
        <div className="z-20 p-8 flex flex-col gap-8 flex-grow">
          {backButton}
          <img
            src={event?.bannerURL}
            className="w-[300px] aspect-[9/12] place-self-center rounded-3xl shadow-2xl border-none"
          ></img>
          <div className="rounded-3xl w-full mx-auto md:w-2/3 p-4 xl:w-1/2 transition-all flex-grow shadow-2xl bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-60 backdrop-filter backdrop-brightness-200 dark:bg-brightness-50 backdrop-saturate-200"></div>
        </div>
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
