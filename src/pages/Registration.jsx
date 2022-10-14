import React from "react";
import { AppBar, Button, Input, Page, Scaffold } from "../components";
import { disableFormSubmission, generateForm } from "../helpers";
import { BackButton } from "../fragments";
import Firebase from "../contexts/Firebase";
import PageRegistrationSuccess from "./registrationSuccess";

export default function PageRegistration({ event, eventID }) {
  const Navigator = React.useContext(Scaffold.Context);
  const [response, setResponse] = React.useState([]);
  const firebase = React.useContext(Firebase.Context);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  function checkEmail(email) {
    return email.split("@")[1] === "niet.co.in";
  }

  return (
    <Page.Full
      className="p-8 gap-6 flex flex-col"
      appBar={<AppBar leading={<BackButton />} />}
    >
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>
        Required · Tickets will be sent on this email. · Must end in
        @niet.co.in.
      </p>

      {generateForm(event.questions, response, setResponse)}

      {checkEmail(email) && name !== "" && (
        <Button
          type="secondary"
          disabled={disableFormSubmission(response)}
          onClick={() => {
            firebase.submitRegistration(event, eventID, response, name, email);
            firebase.fetchTicket(eventID, firebase.auth.currentUser.uid);
            Navigator.push(
              <PageRegistrationSuccess eventID={eventID} userID={firebase.auth.currentUser.uid} />
            );
          }}
        >
          continue
        </Button>
      )}
    </Page.Full>
  );
}
