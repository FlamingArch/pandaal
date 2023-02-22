import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  query,
  QueryConstraint,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import constants from "../constants";

export default function useEvents(queries: QueryConstraint[] = []) {
  const firestore = getFirestore(initializeApp(constants.firebaseConfig));
  return useCollectionData(query(collection(firestore, "Events"), ...queries));
}
