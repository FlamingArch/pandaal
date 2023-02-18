"use client";

import React from "react";
import { IconLocationEdit } from "@/components/icons";
import { useAppStore } from "@/context/app";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import constants from "@/constants";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function location() {
  const currentCity = useAppStore((state) => state.currentCity);
  const app = initializeApp(constants.firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const [user, loading, error] = useAuthState(auth);
  const [userDoc, setUserDoc] = React.useState<any>(null);

  React.useEffect(() => {
    if (user) {
      const ref = doc(firestore, "users", user.uid);
      getDoc(ref)
        .then((doc) => {
          if (doc.exists()) setUserDoc(doc.data());
        })
        .catch((e) => {
          setUserDoc({ name: user.displayName });
        });
    }
  }, [user]);

  return (
    <div className="flex flex-col pt-0 p-6">
      <p>Hey, {userDoc ? userDoc?.name : "Wanderer"}</p>
      <p className="text-xl font-bold">Showing all the getaway spots near me</p>
      <Link
        href={"/location"}
        className="flex gap-3 text-secondary-500 fill-secondary-500 text-xl font-bold p-4 pl-0 hover:pl-4 hover:bg-secondary-50 transition-all rounded-xl"
      >
        <IconLocationEdit className="w-6 h-6" />
        {currentCity}
      </Link>
    </div>
  );
}
