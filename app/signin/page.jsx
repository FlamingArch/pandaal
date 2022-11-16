"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import constants from "../../constants";
import Otp from "./otp";
import SignIn from "./signIn";

export default function page() {
  const router = useRouter();
  const app = initializeApp(constants.firebaseConfig);
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);

  const db = getFirestore(app);

  const [page, setPage] = useState(0);

  if (page === 0) {
    return <SignIn setPage={setPage} />;
  } else if (page === 1) {
    return <Otp callback={() => setPage(2)} />;
  } else {
    if (!loading) {
      const ref = doc(db, "users", auth?.currentUser?.uid);
      getDoc(ref).then((doc) => {
        if (doc.exists()) {
          router.push("/");
        } else {
          router.push("/signup");
        }
      });
      return null;
    }
  }
}
