import React from "react";
import { AppBar, Button, Page, Scaffold, Text } from "../components";
import { parseHTML } from "../helpers";
import { BackButton } from "../fragments";
import { PageRegistration, PageSignIn } from ".";
import Firebase from "../contexts/Firebase";

export default function PageInstructions({ event }) {
  const Navigator = React.useContext(Scaffold.Context);
  const firebase = React.useContext(Firebase.Context);

  return (
    <Page.Full appBar={<AppBar leading={<BackButton />} />}>
      <Text headingLevel={3}>How to Register?</Text>
      {parseHTML(event.howToRegisterHtmlText)}
      <Button
        type="secondary"
        onClick={() =>
          Navigator.push(
            firebase.user ? (
              <PageRegistration event={event} />
            ) : (
              <PageSignIn
                callback={() =>
                  Navigator.push(<PageRegistration event={event} />)
                }
              />
            )
          )
        }
      >
        continue
      </Button>
    </Page.Full>
  );
}
