import { collection, doc, getDoc } from "@firebase/firestore";
import React from "react";
import { initiatePayment } from ".";
import { FirebaseContext } from "../contexts/firebase";

export default async function initiateRegisteration(
  firestore,
  functions,
  registerUser,
  eventId,
  userId,
  answers,
  ticketCount,
  audeinceData,
  user,
  completion
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
  const result = JSON.parse(response.data) as RegistrationResponses;
  if (result == RegistrationResponses.REGISTRATION_SUCCESS) {
    completion();
  }
  if (result == RegistrationResponses.REGISTRATION_PAYMENT_INITIATED) {
    const ref = doc(collection(firestore, "users"), userId);
    const data = (await getDoc(ref)).data();
    initiatePayment(
      functions,
      user,
      {
        uid: user.uid,
        razorId: data?.razorId,
        eventId: eventId,
        registrationId: ref.id,
        ticketCount: ticketCount,
      },
      (response) => completion()
    );
  } else {
    console.log(response);
  }
  return null;
}

export enum RegistrationResponses {
  ERROR_NOT_EXISTS = "Document Does Not Exists",
  ERROR_INACTIVE = "Event not active",
  ERROR_REGISTRATION_OFF = "Not accepting registrations",
  ERROR_SOLDOUT = "Tickets Sold Out",
  ERROR_ALREDY_REGISTERED = "User Already Registered",
  REGISTRATION_SUCCESS = "user Registered",
  REGISTRATION_PAYMENT_INITIATED = "Payment Initiated",
}
