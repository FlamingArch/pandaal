import React from "react";
import constants from "../constants";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  DocumentData,
  query,
  where,
} from "firebase/firestore";

export default function useEvents() {
  const app = initializeApp(constants.firebaseConfig);
  const firestore = getFirestore(app);

  const [events, setEvents] = React.useState<DocumentData>([]);

  //get string for current date in YYYYMMDD format
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const todayString = yyyy + mm + dd;

  React.useEffect(() => {
    const collectionRef = collection(firestore, "Events");
    const queryRef = query(
      collectionRef,
      where("acceptingRegistrations", "==", true),
      where("eventVisibility", "==", "Public")
    );
    getDocs(queryRef).then((querySnapshot) => {
      const items: Array<DocumentData> = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      // categorise events by `Category` in items array
      let categorised = {};
      items.forEach((item) => {
        if (item.startDate < todayString) {
          return;
        }
        if (categorised[item.Category]) {
          categorised[item.Category] = [...categorised[item.Category], item];
        } else {
          categorised[item.Category] = [item];
        }
      });
      setEvents(categorised);
    });
  }, []);

  return events;
}
