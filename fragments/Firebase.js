import { createContext, useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signOut } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const test_env = false;

const Context = createContext();

const Provider = ({ children }) => {
  const config = {
    apiKey: "AIzaSyAzkEwuLhZwpL57SkaAY1ee2ym91fQLIGk",
    authDomain: "pandaal-a71fd.firebaseapp.com",
    projectId: "pandaal-a71fd",
    storageBucket: "pandaal-a71fd.appspot.com",
    messagingSenderId: "918662713292",
    appId: "1:918662713292:web:feebd8bddb182f59809769",
    measurementId: "G-RN1KKBLZ7S",
  };

  const app = initializeApp(config);

  const auth = getAuth(app);

  const getSignIn = (phoneNumber) => {
    window.rqecaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
    });
    return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
  };

  const signIn = (phoneNumber) => {
    return;
    getSignIn(phoneNumber)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        const code = window.prompt("Enter OTP");
        confirmationResult
          .confirm(code)
          .then((result) => {
            // User signed in successfully.
            const user = result.user;
            // ...
          })

          .catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
          });
      })

      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  };

  const [user, userLoading, userError] = useAuthState(auth);

  const firestore = getFirestore(app);
  const [eventsSnapshot, eventsLoading, eventsError] = useCollectionData(
    collection(firestore, test_env ? "testEvents" : "events")
  );
  const [events, setEvents] = useState({});

  useEffect(() => {
    if (eventsSnapshot) {
      const events = {};
      eventsSnapshot.forEach((e) => {
        if (e.Category in events) events[e.Category].push(e);
        else events[e.Category] = [e];
      });
      console.log(events);
      setEvents(events);
    }
  }, [eventsSnapshot]);

  const signOutUser = () => {
    signOut(auth);
  };

  return (
    <Context.Provider
      value={{
        objects: {
          app: app,
          auth: auth,
          firestore: firestore,
          config: config,
        },
        authentication: {
          signIn: signIn,
          loading: userLoading,
          error: userError,
          user: user,
          signOut: signOutUser,
        },
        events: {
          snapshot: eventsSnapshot,
          loading: eventsLoading,
          error: eventsError,
          fetchedEvents: events,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};

const FirebaseIntegration = {
  Context: Context,
  Provider: Provider,
};

export default FirebaseIntegration;
