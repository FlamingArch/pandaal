import constants from "@/constants";
import groupData from "@/helpers/groupData";
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import EventsView from "./eventsView";

const today = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // Today date in YYYYMMDD string

const queries: any = [
  where("active", "==", true),
  where("acceptingRegistrations", "==", true),
  where("startDate", ">=", today),
];

async function fetchEvents() {
  const events: any = [];
  const firestore = getFirestore(initializeApp(constants.firebaseConfig));
  const docs = await getDocs(
    query(collection(firestore, "Events"), ...queries)
  );

  docs.forEach((doc) => {
    const data = doc.data();
    if (data.startDate >= today) {
      events.push(data);
    }
  });

  const groupedEvents: any = groupData(events, "Category");
  return groupedEvents;
}

export default async function Home() {
  const events: any = await fetchEvents();
  return <EventsView events={JSON.stringify(events)} />;
}