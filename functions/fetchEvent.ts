import constants from "@/constants";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default async function fetchEvent(eventId: string) {
  const firestore = getFirestore(initializeApp(constants.firebaseConfig));
  const snapshot = await getDoc(doc(firestore, "Events", eventId));
  if (snapshot.exists()) {
    return snapshot.data();
  } else {
    return null;
  }
}
