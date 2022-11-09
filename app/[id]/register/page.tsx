"use client";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Text } from "../../../components";
import { IconBack } from "../../../components/icons";
import constants from "../../../constants";
import { generateForm } from "../../../helpers";

export default function ({ params }: any) {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const app = initializeApp(constants.firebaseConfig);
    const db = getFirestore(app);

    const ref = doc(db, "Events", params.id);
    getDoc(ref).then((data) => {
      setFormData(data.data()?.questions);
    });
  }, []);

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
      {generateForm(formData)}
    </div>
  );
}
