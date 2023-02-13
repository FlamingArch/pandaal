import { IconUser } from "@/components/icons";
import constants from "@/constants";
import { Location } from "@/fragments";
import groupData from "@/helpers/groupData";
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import Link from "next/link";
import EventsView from "./eventsView";

// Get current date in YYYYMMDD format
const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");

const queries: any = [
  where("active", "==", true),
  where("acceptingRegistrations", "==", true),
];

async function fetchEvents() {
  const events: any = [];
  const firestore = getFirestore(initializeApp(constants.firebaseConfig));
  await getDocs(query(collection(firestore, "Events"), ...queries)).then(
    (docs) =>
      docs.forEach((doc) => {
        const data = doc.data();
        if (data.startDate >= today) {
          events.push(data);
        }
      })
  );
  const groupedEvents: any = groupData(events, "Category");
  return groupedEvents;
}

export default async function Home() {
  const events: any = await fetchEvents();
  return (
    <>
      <main>
        <Location />
        <EventsView events={JSON.stringify(events)} />
      </main>
    </>
  );
}
