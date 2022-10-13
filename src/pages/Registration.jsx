import React from "react";
import { AppBar, Button, Page, Scaffold } from "../components";
import { disableFormSubmission, generateForm } from "../helpers";
import { BackButton } from "../fragments";
import Firebase from "../contexts/Firebase";
import { serverTimestamp } from "firebase/firestore";

export default function PageRegistration({ event, eventID }) {
  const Navigator = React.useContext(Scaffold.Context);
  const [response, setResponse] = React.useState([]);
  const firebase = React.useContext(Firebase.Context);

  return (
    <Page.Full
      className="p-8 gap-6 flex flex-col"
      appBar={<AppBar leading={<BackButton />} />}
    >
      {generateForm(event.questions, response, setResponse)}
      <Button
        type="secondary"
        disabled={disableFormSubmission(response)}
        onClick={() => {
          firebase.submitRegistration(event, eventID, response);
          Navigator.push(
            <Button onClick={Navigator.dismiss}>
              Done. Hogya. Tata. Bye Bye.
            </Button>
          );
        }}
      >
        continue
      </Button>
    </Page.Full>
  );
}
