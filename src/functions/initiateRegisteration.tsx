import { collection, doc } from "@firebase/firestore";
import React from "react";
import { FirebaseContext } from "../contexts/firebase";

export default async function initiateRegisteration(
  firestore,
  registerUser,
  eventId,
  userId,
  answers,
  ticketCount,
  audeinceData
) {
  const ref = doc(collection(firestore, "registrations"));
  const object = {
    answer: answers,
    appVersion: "1.0.0",
    platform: "web",
    eventId: eventId,
    userId: userId,
    registrationId: ref.id,
    ticketCount: ticketCount,
    audienceData: audeinceData,
  };
  console.log(registerUser);
  const response = await registerUser(object);
  console.log(response);
  return null;
}
