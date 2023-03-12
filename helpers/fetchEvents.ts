import constants from "@/constants";
import { groupData as fnGroupData } from "@/helpers";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

export default async function fetchEvents(
  queries?: any,
  groupData: boolean = true
) {
  const events: any = [];
  const firestore = getFirestore(initializeApp(constants.firebaseConfig));
  const docs = await getDocs(
    query(collection(firestore, "Events"), ...(queries ?? []))
  );

  docs.forEach((doc) => events.push(doc.data()));

  if (!groupData) return events;

  const groupedEvents: any = fnGroupData(events, "Category");
  return groupedEvents;
}
