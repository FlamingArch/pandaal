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
      // categorise events by `Category` in items array
      let categorised = {};
      items.forEach((item) => {
        if (categorised[item.Category]) {
          categorised[item.Category] = [...categorised[item.Category], item];
        } else {
          categorised[item.Category] = [item];
        }
      });
      setEvents(categorised);
    });
  }, []);

  React.useEffect(() => {
    console.log(events);
  }, [events]);

  return events;
}
