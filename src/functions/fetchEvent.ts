import { doc, Firestore, getDoc } from "firebase/firestore";

export default function fetchEvent(firestore: Firestore, id: string) {
  return getDoc(doc(firestore, "Events", id));
}
