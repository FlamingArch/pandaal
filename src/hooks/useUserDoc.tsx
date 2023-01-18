import { initializeApp } from "firebase/app";
import { doc, DocumentData, getDoc, getFirestore } from "firebase/firestore";
import React from "react";
import constants from "../constants";

export default function useuserDoc(id: string) {
  const [userDoc, setUserDoc] = React.useState<any>();

  if (!id) {
    return {};
  }

  const app = initializeApp(constants.firebaseConfig);
  const firestore = getFirestore(app);

  React.useEffect(() => {
    const ref = doc(firestore, "users", id);
    getDoc(ref)
      .then((e) => {
        if (e.exists()) {
          setUserDoc(e.data());
        } else setUserDoc(false);
      })
      .catch((e) => {
        console.error(`ERROR: Error fetching userDoc:\n${e}`);
      });
  }, []);

  return userDoc;
}
