import React from "react";
import { motion } from "framer-motion";
import { Link, Outlet, useParams } from "react-router-dom";

import { useEvent } from "../hooks";
import { parseHTML } from "../helpers";
import { BackButton } from "../fragments";

export default function PageRegister() {
  const { eventId } = useParams();
  const event = useEvent(eventId ?? "");

  return (
    <motion.div
      animate={{ y: [window.innerHeight, 0] }}
      exit={{ y: [0, window.innerHeight] }}
      transition={{
        type: "spring",
        duration: 0.3,
      }}
      className="fixed top-0 left-0 w-screen h-screen bg-white z-50 p-8 gap-8 flex flex-col"
    >
      {<BackButton />}
      <div className="w-full md:w-1/2 xl:w-1/3 mx-auto gap-8 flex flex-col h-full">
        <div className="flex-grow-0 md:flex-grow transition-all" />
        <div className="text-3xl font-bold">Instructions</div>
        {parseHTML(event?.howToRegisterHtmlText)}
        <div className="flex-grow md:flex-grow-0 transition-all" />
        <Link
          to={`/${eventId}/instructions`}
          className="grid place-content-center px-8 py-3 bg-primary-500 text-white rounded-2xl shadow-xl transition-all shadow-primary-300 dark:shadow-primary-700 hover:shadow-primary-500 hover:shadow-2xl hover:scale-105 hover:bg-primary-600"
        >
          Register
        </Link>
        <div className="flex-grow-0 md:flex-grow transition-all" />
        <Outlet />
      </div>
    </motion.div>
  );
}
