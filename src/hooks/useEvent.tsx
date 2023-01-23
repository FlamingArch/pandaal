import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import constants from "../constants";

export default function useEvent(id) {
  if (!id) return [undefined, true, null];
  const firestore = getFirestore(initializeApp(constants.firebaseConfig));
  return useDocumentData(doc(collection(firestore, "Events"), id));
}
