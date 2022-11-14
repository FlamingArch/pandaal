"use client";

import React from "react";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Text } from "../../../components";
import { IconBack } from "../../../components/icons";
import constants from "../../../constants";
import { getAuth } from "firebase/auth";
import Link from "next/link";

export default function ({ params }) {
  const [event, setEvent] = React.useState({});

  const app = initializeApp(constants.firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  React.useEffect(() => {
    const ref = doc(db, "Events", params.id);
    getDoc(ref).then((data) => {
      setEvent(data.data());
    });
  }, []);

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(`https://pandaal.in/${params.id}`);
  };

  const selectText = (e) => {
    // e.target.select();
  };

  return (
    <div className="w-screen h-screen flex gap-4 p-6 flex-col dark:bg-black dark:text-white">
      <div className="flex gap-4 items-center">
        <Link
          href={`/${params.id}`}
          className="rounded-2xl p-4 dark:bg-primary-700 bg-primary-50 hover:bg-primary-100 transition-all cursor-pointer w-fit"
        >
          <IconBack className="w-6 h-6 fill-primary-500 dark:fill-primary-300" />
        </Link>
        <p className="font-medium text-xl">Share this Event</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={event.bannerURL} className="rounded-xl aspect-square w-20"/>
        <div className="flex-col">
          <Text headingLevel={3}>{event?.Title}</Text>
          <p>{event?.description}</p>
        </div>
      </div>
      <div className="rounded-xl border-2 border-primary-500 p-4 flex gap-4 shadow-primary-300 dark:shadow-primary-800 shadow-xl">
        <p className="font-bold">Share This URL:</p>
        <p
          style={{ userSelect: "text" }}
          className="cursor-pointer"
          onClick={selectText}
        >
          https://pandaal.in/{params.id}
        </p>
      </div>
      <div
        onClick={copyToClipboard}
        className="rounded-2xl px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white grid place-content-center shadow-xl cursor-pointer"
      >
        Copy
      </div>
    </div>
  );
}
