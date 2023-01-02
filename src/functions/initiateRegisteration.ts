import { collection, doc, getDoc } from "@firebase/firestore";
import { initiatePayment } from ".";

export enum RegistrationResponses {
  ERROR_NOT_EXISTS = "Document Does Not Exists",
  ERROR_INACTIVE = "Event not active",
  ERROR_REGISTRATION_OFF = "Not accepting registrations",
  ERROR_SOLDOUT = "Tickets Sold Out",
  ERROR_ALREDY_REGISTERED = "User Already Registered",
  REGISTRATION_SUCCESS = "user Registered",
  REGISTRATION_PAYMENT_INITIATED = "Payment Initiated",
}

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
  const userDocRef = doc(firestore, "users", userId);
  try {
    const userDoc = await getDoc(userDocRef);

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
      completion({ registrationId: ref.id });
    }
    if (result == RegistrationResponses.REGISTRATION_PAYMENT_INITIATED) {
      const userRef = doc(collection(firestore, "users"), userId);
      const data = (await getDoc(userRef)).data();
      initiatePayment(
        functions,
        user,
        userDoc,
        {
          uid: user.uid,
          razorId: data?.razorId,
          eventId: eventId,
          registrationId: ref.id,
          ticketCount: ticketCount,
        },
        (response) => completion(response)
      );
    } else {
      completion({ registrationId: ref.id, error: { errorDescription: result } });
    }
  } catch {
    console.error("ERROR: Error fetching userDoc");
  }
  return null;
}
