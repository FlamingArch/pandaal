import { useQuery } from "@tanstack/react-query";
import { initializeApp } from "firebase/app";
import {
  collection,
  Firestore,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
import { useAppStore, AppStoreData } from "./useAppStore";

function fetchEvents(firestore: Firestore, queries?: []) {
  return getDocs(query(collection(firestore, "Events"), ...(queries ?? [])));
}

export default function useEvents(
  firestore: Firestore,
  queries?: [],
  city?: string
) {
  return useQuery(["events"], () => fetchEvents(firestore, queries), {
    select: (data) => {
      if (city) {
        return data.docs
          .filter((doc) => doc.data().city === city || doc.data().city === "")
          .map((doc) => doc.data());
      }
      return data.docs.map((doc) => doc.data());
    },
  });
}
