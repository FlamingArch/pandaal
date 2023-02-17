import constants from "@/constants";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function fetchEvent(eventId: string) {
  const firestore = getFirestore(initializeApp(constants.firebaseConfig));
  const snapshot = await getDoc(doc(firestore, "Events", eventId));
  if (snapshot.exists()) {
    return snapshot.data();
  } else {
    return null;
  }
}

export default async function EventPage({
  params,
}: {
  params: { eventId: string };
}) {
  const event = await fetchEvent(params.eventId);
  if (!event) return <div className="text-3xl font-bold">Event not found</div>;

  return (
    <>
      <Image
        alt=""
        src={event?.bannerURL}
        width={900}
        height={1200}
        className="w-48 rounded-3xl shadow-xl mx-auto"
      />
      <Link href={`${params.eventId}/instructions`} className="rounded-xl">
        Register
      </Link>
    </>
  );
}
