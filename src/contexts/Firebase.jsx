import React from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { collection, increment, arrayUnion } from "firebase/firestore";
import {
  doc,
  setDoc,
  addDoc,
  serverTimestamp,
  runTransaction,
} from "firebase/firestore";
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

  const signOutUser = () => {
    signOut(auth);
  };

  const toggleLike = (event, user) => {
    return;
  };

  const submitRegistration = async (event, eventID, answers) => {
    const document = {
      answers: answers,
      bannerURL: event.bannerURL,
      cashCollected: true,
      collectCash: "0",
      endDate: event.endDate,
      endTime: event.endTime,
      eventDateType: event.eventDateType,
      eventID: eventID,
      eventTitle: event.Title,
      message: {
        html: "",
        text: "",
        subject: "Registration Confirmed on Pandaal<3",
      },
      offlineLocationAddress: event.offlineLocationAddress,
      onOff: event.onOff,
      onlinePlatform: event.onlinePlatform,
      originalPrice: 0, // TODO: Update
      paymentStatus: "free", // TODO: Update
      registrationStatus: "registered", // TODO: Update
      registrationStatusDateTime: serverTimestamp(),
      startDate: event.startDate,
      startTime: event.startTime,
      ticketAuthorised: false,
      ticketCount: "1",
      to: auth.currentUser.email,
      userId: auth.currentUser.uid,
      userName: auth.currentUser.displayName,
      userPhone: auth.currentUser.phoneNumber,
    };
    try {
      await runTransaction(firestore, async (transaction) => {
        const docRef = doc(collection(firestore, "registrations"));

        const event = await transaction.get(doc(firestore, "Events", eventID));

        if (event == null) {
          throw "Event does not exist!";
        }

        if (event.data().active != true) {
          throw "Event is not active!";
        }

        if (!event.data().acceptingRegistrations) {
          throw "Event is not accepting registrations!";
        }

        if (
          event.data().registrationCount >= event.data().availableRegistrations
        ) {
          throw "Event is full!";
        }

        transaction.set(doc(firestore, "registrations", docRef.id), {
          ...document,
          registrationID: docRef.id,
        });

        // const userID = auth.currentUser.uid;

        transaction.update(doc(firestore, "Events", eventID), {
          registrationCount: increment(1),
        });

        transaction.update(doc(firestore, "Events", eventID), {
          registeredUsers: arrayUnion(auth.currentUser.uid),
        });

        console.log(`Document Writted with ID: ${docRef.id}`);
      });
    } catch (e) {
      console.log(`Error ${e}`);
    }
  };

  return (
    <Context.Provider
      value={{
        firestore: firestore,
        auth: auth,
        user: user,
        signingIn: signingIn,
        signInError: signInError,
        signOut: signOutUser,
        toggleLike: toggleLike,
        submitRegistration: submitRegistration,
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

// if (currentEvent != null) {
//   if (currentEvent.isActive()) {
//     if (
//       currentEvent.getRegistrationCount() <
//       currentEvent.getAvailableRegistrations()
//     ) {
//       if (currentEvent.isAcceptingRegistrations()) {
//         if (currentEvent.getRegisteredUsers().contains(userId)) {
//           resultRegistration.postValue("alreadyRegistered");
//         } else {
//           //newRegistration

//           transaction.set(registrationReference, registrationMap);

//           transaction.update(
//             currentEventRef,
//             "registeredUsers",
//             FieldValue.arrayUnion(userId)
//           );

//           transaction.update(
//             currentUserRef,
//             "registrations",
//             userRegistrations
//           );

//           transaction.update(
//             currentEventRef,
//             "registrationCount",
//             FieldValue.increment(1)
//           );
//         }
//       } else {
//         throw new FirebaseFirestoreException(
//           "event not active",
//           FirebaseFirestoreException.Code.ABORTED
//         );

//         //resultRegistration.postValue("eventNotActive");
//       }
//     } else {
//       throw new FirebaseFirestoreException(
//         "TicketsSoldOut",
//         FirebaseFirestoreException.Code.ABORTED
//       );
//     }
//   } else {
//     throw new FirebaseFirestoreException(
//       "not accepting registrations",
//       FirebaseFirestoreException.Code.ABORTED
//     );
//   }
// }
