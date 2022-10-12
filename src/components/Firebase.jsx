import React, { useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { useDocumentData } from "react-firebase-hooks/firestore";
import sampleEvent from "../assets/sampleEvent.json";

const Context = React.createContext();

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

  const fetchDocument = (id) => {
    return sampleEvent;
  };

  return (
    <Context.Provider
      value={{
        fetchDocument: fetchDocument,
        objects: {
          app: app,
          firestore: firestore,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useFetchDocument = (id) => {
  const FirebaseContext = React.useContext(Context);

  const [document, loading, error] = useDocumentData(
    FirebaseContext.objects.firestore,
    `events/${id}`
  );

  useEffect(() => {
    if (document) {
      console.log(document);
    }
  }, [document]);
  return document;
};

const FirebaseIntegration = {
  Context: Context,
  Provider: Provider,
  useFetchDocument: useFetchDocument,
};

export default FirebaseIntegration;
