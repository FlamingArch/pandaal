"use client";

import { IconPreloader } from "@/components/icons";
import constants from "@/constants";
import { fetchRegistrations } from "@/functions";
import { getLongDate } from "@/helpers";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { DocumentData, getFirestore } from "firebase/firestore";
import _ from "lodash";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function BookingsPage() {
  const app = initializeApp(constants.firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const [events, setEvents] = React.useState<DocumentData[]>();

  const [user, loading, error] = useAuthState(auth);

  // const [data] = useCollectionData(
  //   query(collection(firestore, "registrations"), where("uid", "==", user?.uid))
  // );

  React.useEffect(() => {
    if (user) {
      fetchRegistrations(firestore, user!.uid).then((data) => setEvents(data));
    }
  }, [user]);

  if (loading)
    return (
      <p className="w-screen h-[50vw] place-content-center grid grid-flow-col gap-4">
        <IconPreloader className="w-6 h-6 stroke-black" /> Loading...
      </p>
    );

  if (error)
    return (
      <p className="w-screen h-[50vw] place-content-center grid grid-flow-col gap-4">
        An Error Occurred
      </p>
    );

  if (!user) useRouter().push("/signin");

  return events?.map((e) => (
    <div className="flex hover:bg-primary-50 rounded-3xl cursor-pointer p-3">
      <Image
        src={e.bannerURL}
        className="w-24 rounded-2xl aspect-[9/12]"
        width={900}
        height={1200}
        alt=""
      />
      <div className="p-4">
        <p className="text-xl">{e.eventTitle}</p>
        <p>{getLongDate(e.startDate)}</p>
        <p className="text-primary-500">{e.ticketCount} Tickets</p>
      </div>
    </div>
  ));
}
