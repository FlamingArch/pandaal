import React from "react";
import { motion } from "framer-motion";
import { Link, Outlet, useParams } from "react-router-dom";
import { BackButton } from "../../fragments";
import { generateForm } from "../../helpers";
import { useEvent } from "../../hooks";

export default function PageRegister() {
  const { eventId } = useParams();
  const event = useEvent(eventId ?? "");

  const [response, setResponse] = React.useState([]);
  const [enableButton, setEnableButton] = React.useState(false);

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      exit={{ opacity: [1, 0] }}
      transition={{
        type: "spring",
        duration: 0.3,
      }}
      className="fixed top-0 left-0 w-screen h-screen bg-white dark:bg-black z-50 p-8 gap-8 flex flex-col"
    >
      <BackButton />

      <div className="w-full md:w-1/2 xl:w-1/3 mx-auto gap-8 flex flex-col h-full">
        <div className="flex-grow-0 md:flex-grow transition-all" />
        <div className="text-3xl font-bold">Fill Out This Form</div>
        {event?.questions &&
          generateForm(
            event?.questions,
            response,
            setResponse,
            setEnableButton
          )}
        <div className="flex-grow md:flex-grow-0 transition-all" />
        {enableButton && (
          <Link
            to={`/${eventId}/register`}
            className="grid place-content-center px-8 py-3 bg-primary-500 text-white rounded-2xl shadow-xl transition-all shadow-primary-300 dark:shadow-primary-700 hover:shadow-primary-500 hover:shadow-2xl hover:scale-105 hover:bg-primary-600"
          >
            Register
          </Link>
        )}
        <div className="flex-grow-0 md:flex-grow transition-all" />
      </div>

      <Outlet />
    </motion.div>
  );
}
