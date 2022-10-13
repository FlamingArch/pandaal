import React from "react";
import { AppBar, Button, Page, Scaffold } from "../components";
import { disableFormSubmission, generateForm } from "../helpers";
import { BackButton } from "../fragments";

export default function PageRegistration({ event }) {
  const Navigator = React.useContext(Scaffold.Context);
  const [response, setResponse] = React.useState([]);

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
          console.log(response);
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
