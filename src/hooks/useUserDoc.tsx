import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import constants from "../constants";

export default function useuserDoc(id: any) {
  if (!id) return [undefined, true, null];
  const firestore = getFirestore(initializeApp(constants.firebaseConfig));
  return useDocumentData(doc(firestore, "users", id));
}
