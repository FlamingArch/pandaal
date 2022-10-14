import React from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  where,
  collection,
  increment,
  arrayUnion,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import {
  doc,
  getDoc,
  getDocs,
  addDoc,
  serverTimestamp,
  runTransaction,
} from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { generateTicketHTML } from "../helpers";
import constants from "../constants";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  //#region Firebase Objects
  const app = initializeApp(constants.firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth(app);
  const [user, signingIn, signInError] = useAuthState(auth);
  //#endregion

  const [ticket, setTicket] = React.useState("");

  const signOutUser = () => {
    signOut(auth);
  };

  const toggleLike = (event, user) => {
    return;
  };

  const fetchTicket = async (eventID, userID) => {
    console.log(`Fetching ticket for User ${userID} in Event ${eventID}`);
    const docQuery = query(
      collection(firestore, "registrations"),
      where("eventID", "==", eventID),
      where("userId", "==", userID)
    );
    const querySnapshot = await getDocs(docQuery);
    querySnapshot.forEach(async (doce) => {
      const vl = await getDoc(doc(firestore, "registrations", doce.id));
      const ticket = vl.data().message.html;
      setTicket(ticket);
    });
  };

  const submitRegistration = async (event, eventID, answers, name, email) => {
    try {
      const id = await runTransaction(firestore, async (transaction) => {
        const docRef = doc(collection(firestore, "registrations"));
        let event = await await transaction.get(
          doc(firestore, "Events", eventID)
        );

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

        const document = {
          Created: serverTimestamp(),
          answers: answers,
          bannerURL: event.data().bannerURL,
          cashCollected: true,
          collectCash: "0",
          endDate: event.data().endDate,
          endTime: event.data().endTime,
          eventDateType: event.data().eventDateType,
          eventId: eventID,
          eventTitle: event.data().Title,
          offlineLocationAddress: event.data().offlineLocationAddress,
          onOff: event.data().onOff,
          onlinePlatform: event.data().onlinePlatform,
          originalPrice: "0", // TODO: Update
          paymentStatus: "free", // TODO: Update
          registrationStatus: "registered", // TODO: Update
          registrationStatusDateTime: serverTimestamp(),
          startDate: event.data().startDate,
          startTime: event.data().startTime,
          ticketAuthorised: false,
          ticketCount: 1,
          to: auth.currentUser.email,
          userId: auth.currentUser.uid,
          userName: auth.currentUser.displayName,
          userPhone: auth.currentUser.phoneNumber,
          registrationId: docRef.id,
          message: {
            html: generateTicketHTML(
              event.data(),
              auth.currentUser.displayName,
              docRef.id
            ),
            text: "",
            subject: "Registration Confirmed on Pandaal<3",
          },
        };

        transaction.set(doc(firestore, "registrations", docRef.id), document);

        transaction.set(
          doc(firestore, "registrations", docRef.id),
          {
            userName: name,
            to: email,
            source: "web",
          },
          { merge: true }
        );

        // const userID = auth.currentUser.uid;

        transaction.update(doc(firestore, "Events", eventID), {
          registrationCount: increment(1),
        });

        transaction.update(doc(firestore, "Events", eventID), {
          registeredUsers: arrayUnion(auth.currentUser.uid),
        });

        console.log(`Document Written with ID: ${docRef.id}`);
        return docRef.id;
      });
      setLastID(id);
    } catch (e) {
      console.log(`Error ${e}`);
    }
  };

  const userExists = (id) => {
    const docRef = doc(firestore, "users", id);
    docRef.get().then((doc) => {
      if (doc.exists()) {
        return true;
      } else {
        return false;
      }
    });
  };

  const createUser = async (title, name, email, phoneNumber) => {
    addDoc(collection(firestore, "users"), {
      email: email,
      imgBmp: "",
      interest: [],
      likedEvents: [],
      name: name,
      phoneNumber: phoneNumber,
      registrations: {},
      gender: title,
    });
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
        userExists: userExists,
        createUser: createUser,
        useRegistrationDocument: useRegistrationDocument,
        fetchTicket: fetchTicket,
        ticket:ticket
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

export function useRegistrationDocument(id) {
  const { firestore } = React.useContext(Context);
  const [event, setEvent] = React.useState(null);
  console.log(`Fetching Registration Item with ID: ${id}`);
  const [snapshot, loading, error] = useDocumentData(
    doc(collection(firestore, "registrations"), id)
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
