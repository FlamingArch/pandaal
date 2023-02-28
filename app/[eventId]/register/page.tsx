"use client";

import { IconPreloader } from "@/components/icons";
import React from "react";
import constants from "@/constants";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc, getFirestore } from "firebase/firestore";
import { Counter } from "@/components";

export default function Page({ params }: { params: { eventId: string } }) {
  const app = initializeApp(constants.firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const [user, loading, error] = useAuthState(auth);
  const [event] = useDocumentData(doc(firestore, "Events", params.eventId));
  const router = useRouter();
  const [ticketCount, setTicketCount] = React.useState(0);

  if (loading && !event)
    return (
      <main className="flex gap-4 w-full h-[50vh] items-center justify-center">
        <IconPreloader className="w-6 h-6 stroke-black" /> <p>Loading</p>
      </main>
    );

  if (error)
    return (
      <main className="flex w-full h-screen items-center justify-center">
        An Error Occurred, try reloading the page.
      </main>
    );

  if (!user) router.push("/login");

  return (
    <main className="flex flex-col gap-4">
      {event?.questions && (
        <>
          <div className="flex-grow text-xl">Ticket Count</div>
          {JSON.stringify(event?.questions)}
        </>
      )}
      <div className="flex-grow text-xl">Ticket Count</div>
      <div className="gap-4 flex items-center">
        <div className="flex-grow">Ticket Count</div>
        <Counter onChange={(val) => console.log(val)} from={1} to={5} />
      </div>
    </main>
  );
}
