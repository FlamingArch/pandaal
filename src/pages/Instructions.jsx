import React from "react";
import { AppBar, Button, Page, Scaffold, Text } from "../components";
import { parseHTML } from "../helpers";
import { BackButton } from "../fragments";
import { PageRegistration, PageSignIn } from ".";
import Firebase from "../contexts/Firebase";

export default function PageInstructions({ eventID, event }) {
  const Navigator = React.useContext(Scaffold.Context);
  const firebase = React.useContext(Firebase.Context);

  return (
    <Page.Full
      appBar={<AppBar leading={<BackButton />} />}
      className="p-8 gap-6 flex flex-col"
    >
      <Text headingLevel={3}>How to Register?</Text>
      {parseHTML(event.howToRegisterHtmlText)}
      <Button
        type="secondary"
        onClick={() => {

            Navigator.push(
              firebase.user ? (
                <PageRegistration eventID={eventID} event={event} />
              ) : (
                <PageSignIn
                  callback={() => {
                    event.registeredUsers.filter(
                      (e) => e === firebase.auth.currentUser.uid
                    ).length > 0
                      ? Navigator.dismiss()
                      : Navigator.push(
                          <PageRegistration eventID={eventID} event={event} />
                        );
                  }}
                />
              )
            );
        }}
      >
        continue
      </Button>
    </Page.Full>
  );
}
