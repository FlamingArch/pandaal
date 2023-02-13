import { IconUser } from "@/components/icons";
import constants from "@/constants";
import { useAppStore } from "@/context/app";
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
import Image from "next/image";
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
      <header className="flex items-center justify-between p-6 backdrop-blur-xl backdrop-saturate-200 bg-white bg-opacity-60 sticky top-0">
        <Link
          href="/"
          className="text-primary-500 hover:text-primary-700 font-bold text-xl cursor-pointer transition-colors"
        >
          pandaal
        </Link>
        <Link
          href="/signin"
          className="bg-primary-500 fill-white text-white p-3 rounded-xl flex gap-2 hover:bg-primary-600 transition-colors"
        >
          <IconUser className="w-6 h-6" />
          <p>Sign In</p>
        </Link>
      </header>
      <main>
        <Location />
        <EventsView events={JSON.stringify(events)} />
      </main>
    </>
  );
}
