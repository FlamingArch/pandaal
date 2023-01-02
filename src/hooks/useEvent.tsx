import { initializeApp } from "firebase/app";
import { doc, DocumentData, getDoc, getFirestore } from "firebase/firestore";
import React from "react";
import constants from "../constants";

export default function useEvent(id: string) {
  const [event, setEvent] = React.useState<any>();

  const app = initializeApp(constants.firebaseConfig);
  const firestore = getFirestore(app);

  React.useEffect(() => {
    const ref = doc(firestore, "Events", id);
    getDoc(ref)
      .then((e) => {
        if (e.exists()) {
          setEvent(e.data());
        } else setEvent(false);
      })
      .catch((e) => {
        console.error(`ERROR: Error fetching event:\n${e}`);
      });
  }, []);

  return event;
}
