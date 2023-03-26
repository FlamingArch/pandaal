import { useQuery } from "@tanstack/react-query";
import { DocumentSnapshot, Firestore, getDoc } from "firebase/firestore";
import fetchEvent from "../functions/fetchEvent";

export default function useEvent(firestore: Firestore, id: string) {
  return useQuery(["events", id], () => fetchEvent(firestore, id), {
    select: (data: DocumentSnapshot) => ({
      exists: data.exists(),
      data: data.data(),
    }),
  });
}
