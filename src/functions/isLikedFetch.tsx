import { getDoc, doc } from "firebase/firestore";
import { useContext } from "react";
import { FirebaseContext } from "../contexts/firebase";

export default async function isLikedFetch(eventId: string, userId: string) {
  const { firestore } = useContext<any>(FirebaseContext);

  const ref = doc(firestore, "Events", eventId);
  const document = await getDoc(ref);
  if (!document.exists())
    return { liked: null, error: "Event does not exist!" };
  else {
    return { liked: document.data().likedBy.includes(userId) };
  }
}
