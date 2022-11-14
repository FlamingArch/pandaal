"use client";

import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import constants from "../constants";

export default function () {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const app = initializeApp(constants.firebaseConfig);
    const db = getFirestore();

    const ref = collection(db, "Events");

    getDocs(ref).then((querySnapshot) => {
      const items: any = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setItems(items);
    });
  }, []);

  const [id, setId] = React.useState("");

  const handleInputField = (e: any) => setId(e.target.value);

  return (
    <div className="p-6 flex flex-col gap-4 bg-white dark:bg-black text-black dark:text-white w-screen h-screen">
      <p className="text-2xl font-bold">pandaal</p>
      <div className="flex gap-4">
        <input
          type="text"
          className="transition-all rounded-lg border-2 p-2 focus-within:border-black focus-within:shadow-2xl outline-none flex-grow dark:bg-black dark:border-gray-700 dark:focus-within:border-gray-400"
          value={id}
          onChange={handleInputField}
          placeholder="Event ID"
        />
        <Link href={`/${id}`}>
          <div className="bg-primary-500 hover:bg-primary-700 px-8 py-3 rounded-lg text-white hover:shadow-2xl hover:shadow-primary-500 transition-all">
            Go to Event
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map((item: any) => (
          <Link
            href={`/${item.id}`}
            className="bg-white hover:scale-110 transition-all dark:bg-black overflow-hidden rounded-2xl focus-within:hover:shadow-[#3F4882AA] hover:shadow-2xl flex gap-2 focus-within:shadow-2xl focus-within:shadow-[#3F4882AA]"
          >
            <img src={item.bannerURL} />
          </Link>
        ))}
      </div>
    </div>
  );
}
