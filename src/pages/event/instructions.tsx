import React from "react";
import { motion } from "framer-motion";
import { Link, useOutlet, useParams } from "react-router-dom";

import { useEvent } from "../../hooks";
import { parseHTML } from "../../helpers";
import { BackButton } from "../../fragments";
import { AppBar, Scaffold } from "../../components";
import { IconPreloader } from "../../components/icons";

export default function PageRegister() {
  const { eventId } = useParams();
  const event = useEvent(eventId ?? "");
  const outlet = useOutlet();

  return (
    <Scaffold appBar={<AppBar leading={<BackButton />} />} overlay={outlet}>
      <div className="w-full md:w-1/2 xl:w-1/3 mx-auto gap-8 flex flex-col p-6">
        <div className="flex-grow-0 md:flex-grow transition-all" />
        <div className="text-3xl font-bold">Instructions</div>
        {event ? (
          <p>{parseHTML(event?.howToRegisterHtmlText)}</p>
        ) : (
          <p className="flex gap-2">
            <IconPreloader className="w-8 h-8 stroke-gray-500" />
            Fetching Instructions
          </p>
        )}
        <div className="flex-grow md:flex-grow-0 transition-all" />
        <Link
          to={`/${eventId}/register`}
          className="grid place-content-center px-8 py-3 bg-primary-500 text-white rounded-2xl shadow-xl transition-all shadow-primary-300 dark:shadow-primary-700 hover:shadow-primary-500 hover:shadow-2xl hover:scale-105 hover:bg-primary-600"
        >
          Register
        </Link>
        <div className="flex-grow-0 md:flex-grow transition-all" />
      </div>
    </Scaffold>
  );
}
