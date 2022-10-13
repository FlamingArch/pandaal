import React from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { collection } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const app = initializeApp({
    apiKey: "AIzaSyAzkEwuLhZwpL57SkaAY1ee2ym91fQLIGk",
    authDomain: "pandaal-a71fd.firebaseapp.com",
    projectId: "pandaal-a71fd",
    storageBucket: "pandaal-a71fd.appspot.com",
    messagingSenderId: "918662713292",
    appId: "1:918662713292:web:feebd8bddb182f59809769",
    measurementId: "G-RN1KKBLZ7S",
  });

  const firestore = getFirestore(app);
  const auth = getAuth(app);

  const [user, signingIn, signInError] = useAuthState(auth);

  const signOut = () => {
    signOut(auth);
  };

  return (
    <Context.Provider
      value={{
        firestore: firestore,
        auth: auth,
        user: user,
        signingIn: signingIn,
        signInError: signInError,
        signOut: signOut,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useEventDocument(eventID) {
  const { firestore } = React.useContext(Context);
  const [event, setEvent] = React.useState(null);
  const [snapshot, loading, error] = useDocumentData(
    doc(collection(firestore, "Events"), eventID)
  );

  React.useEffect(() => {
    if (snapshot) {
      setEvent(snapshot);
    }
  }, [snapshot]);

  return event;
}

const Firebase = {
  Provider: Provider,
  Context: Context,
};

export default Firebase;
