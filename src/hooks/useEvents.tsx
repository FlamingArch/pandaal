import React from "react";
import constants from "../constants";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  DocumentData,
} from "firebase/firestore";

export default function useEvents() {
  const app = initializeApp(constants.firebaseConfig);
  const firestore = getFirestore(app);

  const [events, setEvents] = React.useState<DocumentData>([]);

  React.useEffect(() => {
    const collectionRef = collection(firestore, "Events");
    getDocs(collectionRef).then((querySnapshot) => {
      const items: Array<DocumentData> = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setEvents(items);
    });
  }, []);

  return events;
}
