import { serverTimestamp } from "firebase/firestore";
import generateTicketHTML from "./generateTicketHTML";

export default function (response, event, auth, userDoc) {
  return {
    answers: response,
    bannerUrl: event.bannerURL,
    cashCollected: 0,
    created: serverTimestamp(),
    endDate: event.endDate,
    endTime: event.endTime,
    eventDateType: event.eventDateType,
    eventId: event.id,
    eventTitle: event.Title,
    user: auth.currentUser.uid,
    message: {
      html: generateTicketHTML(event, response),
      subject: "Registration Confirmed on Pandaal ❤️",
      text: "",
    },
    offlineLocationAddress: event.offlineLocationAddress,
    onOff: event.onOff,
    onlinePlatform: event.onlinePlatform,
    paymentStatus: "free",
    registrationStatus: "pending",
    // registrationStatusDateTime: undefined, // TODO: Check
    startDate: event.startDate,
    startTime: event.startTime,
    ticketAuthorized: false, // TODO: Check
    ticketCount: 1, // TODO: Check
    to: userDoc.email,
    userId: auth.currentUser.uid,
    userName: auth.currentUser.displayName,
    userPhone: auth.currentUser.phoneNumber,
  };
}
