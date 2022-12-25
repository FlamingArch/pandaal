import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { FirebaseContext } from "../contexts/firebase";

export default async function userDocExists(firestore: any, uid: string) {
  const docRef = doc(firestore, "users", uid);
  const docData = await getDoc(docRef);
  if (docData.exists()) {
    return true;
  }
  return false;
}
