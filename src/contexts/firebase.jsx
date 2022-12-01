import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import constants from "../constants";

export const FirebaseContext = React.createContext(null);

export const FirebaseProvider = ({ children }) => {
  const app = initializeApp(constants.firebaseConfig);
  const auth = getAuth();
  const firestore = getFirestore();

  const [user, loggingIn, loginError] = useAuthState(auth);

  return (
    <FirebaseContext.Provider
      value={{ app, auth, firestore, user, loggingIn, loginError }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
