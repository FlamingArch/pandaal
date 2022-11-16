"use client";
import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Text } from "../../../components";
import { IconBack } from "../../../components/icons";
import constants from "../../../constants";
import { generateForm, generateTicketHTML } from "../../../helpers";

export default function ({ params }) {
  const [event, setEvent] = useState({});
  const [formData, setFormData] = useState([]);
  const [response, setResponse] = useState([]);
  const [userDoc, setUserDoc] = useState({});
  const [enableButton, setEnableButton] = useState(false);
  const router = useRouter();

  const app = initializeApp(constants.firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  if (!auth.currentUser) {
    router.push("/signin", {});
  }

  useEffect(() => {
    const docRef = doc(db, "users", auth.currentUser.uid);

    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        setUserDoc(doc.data());
      } else {
        router.push("/signup");
      }
    });
  }, []);

  useEffect(() => {
    const ref = doc(db, "Events", params.id);
    getDoc(ref).then((data) => {
      setEvent(data.data());
    });
  }, []);

  useEffect(() => {
    if (event?.questions) {
      setFormData(generateForm(event.questions));
    }
  }, [event]);

  const handleSubmit = () => {
    if (response.length === formData.length) {
      console.log(event);
      const finalResponse = {
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
        registrationId: undefined, // TODO: Generate Registration ID
        registrationStatus: "pending",
        registrationStatusDateTime: undefined, // TODO: Check
        startDate: event.startDate,
        startTime: event.startTime,
        ticketAuthorized: false, // TODO: Check
        ticketCount: 1, // TODO: Check
        to: userDoc.email,
        userId: auth.currentUser.uid,
        userName: auth.currentUser.displayName,
        userPhone: auth.currentUser.phoneNumber,
      };
      console.log(finalResponse);
    } else console.log("Fill Form First");
  };

  return (
    <div className="w-screen min-h-screen p-6 flex flex-col gap-4 dark:bg-black dark:text-white">
      <Link
        href={`/${params.id}/instructions`}
        className="p-4 rounded-2xl bg-primary-50 w-min dark:bg-primary-800"
      >
        <IconBack className="w-6 h-6 fill-primary-500 dark:fill-primary-200" />
      </Link>
      <Text headingLevel={2} bold>
        Please Fill This Form
      </Text>
      {generateForm(formData, response, setResponse, setEnableButton)}
      <div className="fixed bottom-0 left-0 right-0 p-12 md:w-1/2 lg:w-1/3 mx-auto transition-all">
        <div
          onClick={handleSubmit}
          className={
            "bg-primary-500 shadow-primary-300 dark:shadow-primary-700 shadow-xl transition-all px-8 py-4 grid place-content-center text-white rounded-2xl " +
            (enableButton
              ? "hover:bg-primary-600 hover:shadow-2xl hover:shadow-primary-500 hover:scale-105 "
              : "opacity-50 cursor-not-allowed")
          }
        >
          Register
        </div>
      </div>
    </div>
  );
}
