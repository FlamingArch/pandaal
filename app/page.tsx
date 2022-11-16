"use client";

import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import React from "react";
import constants from "../constants";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { Text } from "../components";

export default function () {
  const [items, setItems] = React.useState([]);
  const app = initializeApp(constants.firebaseConfig);
  const db = getFirestore();
  const [user, loading, error] = useAuthState(getAuth(app));
  const router = useRouter();

  React.useEffect(() => {
    const ref = collection(db, "Events");

    getDocs(ref).then((querySnapshot) => {
      const items: any = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setItems(items);
    });
  }, []);

  const signout = () => {
    getAuth(app).signOut();
    router.push("/signout");
  };

  const [id, setId] = React.useState("");
  const [idVisible, setIdVisible] = React.useState(false);

  const handleInputField = (e: any) => setId(e.target.value);

  return (
    <div className="p-6 flex flex-col gap-4 bg-white dark:bg-black text-black dark:text-white w-screen h-screen">
      <div className="flex items-center justify-between flex-col md:flex-row gap-4">
        <p className="text-2xl font-bold w-full">pandaal</p>
        {loading ? (
          <p>Signing In</p>
        ) : user ? (
          <div className="flex gap-4 items-center w-full">
            <div className="flex flex-col">
              Signed in as {user?.displayName}
            </div>
            <button
              onClick={signout}
              className="bg-primary-500 px-8 py-2 rounded-xl text-white"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            href="/signin"
            className="bg-primary-500 px-8 py-2 rounded-xl text-white"
          >
            Sign in
          </Link>
        )}
      </div>
      {idVisible && (
        <div className="flex gap-4">
          <input
            type="text"
            className="transition-all rounded-lg border-2 p-2 focus-within:border-black focus-within:shadow-2xl outline-none flex-grow dark:bg-black dark:border-gray-700 dark:focus-within:border-gray-400"
            value={id}
            onChange={handleInputField}
            placeholder="Event ID"
          />
          <Link href={`/${id}`}>
            <div className="bg-primary-500 hover:bg-primary-700 px-8 py-2 rounded-xl text-white hover:shadow-2xl hover:shadow-primary-500 transition-all">
              Go to Event
            </div>
          </Link>
        </div>
      )}
      <Text headingLevel={6} bold accented>
        Events
      </Text>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map((item: any) => (
          <Link
            href={`/${item.id}`}
            key={item.id}
            className="bg-white hover:scale-105 transition-all dark:bg-black overflow-hidden rounded-2xl focus-within:hover:shadow-[#3F4882AA] hover:shadow-2xl flex gap-2 focus-within:shadow-2xl focus-within:shadow-[#3F4882AA]"
          >
            <img src={item.bannerURL} />
          </Link>
        ))}
      </div>
    </div>
  );
}
