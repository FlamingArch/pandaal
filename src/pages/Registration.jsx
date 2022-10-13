import React from "react";
import { AppBar, Button, Page, Scaffold } from "../components";
import { generateForm } from "../helpers";
import { BackButton } from "../fragments";
import { useEventDocument } from "../contexts/Firebase";

export default function PageRegistration({ event }) {
  const Navigator = React.useContext(Scaffold.Context);
  const [response, setResponse] = React.useState([]);

  return (
    <Page.Full appBar={<AppBar leading={<BackButton />} />}>
      {generateForm(event.questions, response, setResponse)}
      <Button
        type="secondary"
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
