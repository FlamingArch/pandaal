"use client";

import { IconPreloader, IconUser } from "@/components/icons";
import constants from "@/constants";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function UserBadge() {
  const app = initializeApp(constants.firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const [user, loading, error] = useAuthState(auth);
  const [userDoc, setUserDoc] = React.useState<any>(null);
  const { push } = useRouter();

  React.useEffect(() => {
    if (user) {
      const ref = doc(firestore, "users", user.uid);
      getDoc(ref).then((doc) => {
        if (doc.exists()) setUserDoc(doc.data());
        else push("/signup");
      });
    }
  }, [user]);

  if (loading || !userDoc) {
    return (
      <div className="bg-primary-500 fill-white text-white p-3 rounded-full flex gap-2 hover:bg-primary-600 transition-colors">
        <IconPreloader className="w-6 h-6 stroke-white animate-pulse" />
      </div>
    );
  }

  return user && userDoc ? (
    <Link
      href="/accounts"
      className="bg-primary-500 fill-white text-white rounded-full flex gap-2 hover:bg-primary-600 transition-colors overflow-hidden"
    >
      <img
        src={"data:image/png;base64, " + userDoc.imgBmp}
        className="w-12 h-12 scale-[1.05]"
      />
    </Link>
  ) : (
    <Link
      href="/signin"
      className="bg-primary-500 fill-white text-white p-3 rounded-xl flex gap-2 hover:bg-primary-600 transition-colors"
    >
      <IconUser className="w-6 h-6" />
      <p>Sign In</p>
    </Link>
  );
}
