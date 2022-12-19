import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

import constants from "../constants";

export const FirebaseContext = React.createContext(null);

export const FirebaseProvider = ({ children }) => {
  const app = initializeApp(constants.firebaseConfig);
  const auth = getAuth();
  const firestore = getFirestore();
  const functions = getFunctions(app, "asia-south1");

  const [user, loggingIn, loginError] = useAuthState(auth);

  const fetchOrderId = httpsCallable(functions, "fetchOrderId");
  const paymentSuccess = httpsCallable(functions, "paymentSuccess");
  const paymentFailure = httpsCallable(functions, "paymentFailure");

  return (
    <FirebaseContext.Provider
      value={{
        app,
        auth,
        firestore,
        functions,
        user,
        loggingIn,
        loginError,
        fetchOrderId,
        paymentSuccess,
        paymentFailure,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
