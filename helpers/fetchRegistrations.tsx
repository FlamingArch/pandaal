import {
  collection,
  Firestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default async function fetchRegistrations(
  firestore: Firestore,
  uid: string
) {
  const querySnapshot = await getDocs(
    query(
      collection(firestore, "registrations"),
      where("uid", "==", uid),
      where("registrationStatus", "==", "successful")
    )
  );
  const events = querySnapshot.docs.map((doc) => doc.data());
  return events;
}
