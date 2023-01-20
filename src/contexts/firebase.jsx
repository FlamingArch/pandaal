import React from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut as so,
} from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

import constants from "../constants";
import _ from "lodash";

export const FirebaseContext = React.createContext(null);

export const FirebaseProvider = ({ children }) => {
  const app = initializeApp(constants.firebaseConfig);
  const auth = getAuth();
  const firestore = getFirestore();
  const functions = getFunctions(app, "asia-south1");

  const [user, loggingIn, loginError] = useAuthState(auth);

  const signInVerifyCode = (code, completion, error) =>
    window.confirmationResult.confirm(code).then(completion).catch(error);

  const signInSendCode = (
    auth,
    recaptachVerifierId,
    phone,
    completion,
    error
  ) => {
    const verifier = new RecaptchaVerifier(
      recaptachVerifierId,
      { size: "invisible" },
      auth
    );
    signInWithPhoneNumber(auth, phone, verifier)
      .then((confirmation) => {
        window.confirmationResult = confirmation;
        completion(confirmation);
      })
      .catch((e) => {
        verifier.clear();
        document.getElementById("rcv")?.innerHTML = "";

        error(e);
      });
  };

  const signOut = () => so(auth);

  const fetchDoc = async (path) => {
    const docRef = doc(firestore, path);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  };

  const fetchOrderId = httpsCallable(functions, "fetchOrderId");
  const paymentSuccess = httpsCallable(functions, "paymentSuccess");
  const paymentFailure = httpsCallable(functions, "paymentFailure");
  const registerUser = httpsCallable(functions, "registerUser");

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
        fetchDoc,
        fetchOrderId,
        paymentSuccess,
        paymentFailure,
        registerUser,
        signInSendCode,
        signInVerifyCode,
        signOut,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
