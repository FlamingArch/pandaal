import React from "react";
import { useOutlet, useParams } from "react-router-dom";
import { BackButton } from "../../fragments";
import { generateForm } from "../../helpers";
import { useEvent } from "../../hooks";
import { AppBar, Button, Scaffold } from "../../components";
import { initiateRegisteration } from "../../functions";
import { FirebaseContext } from "../../contexts/firebase";

export default function PageRegister() {
  const { firestore, registerUser, user } =
    React.useContext<any>(FirebaseContext);

  const { eventId } = useParams();
  const event = useEvent(eventId ?? "");
  const outlet = useOutlet();

  const [response, setResponse] = React.useState([]);
  const [enableButton, setEnableButton] = React.useState(false);

  return (
    <Scaffold appBar={<AppBar leading={<BackButton />} />} overlay={outlet}>
      <div className="w-full md:w-1/2 xl:w-1/3 mx-auto gap-8 flex flex-col p-8">
        <div className="flex-grow-0 md:flex-grow transition-all" />
        <div className="text-3xl font-bold">Fill Out This Form</div>
        {event?.questions &&
          generateForm(
            event?.questions,
            response,
            setResponse,
            setEnableButton
          )}
        <div className="flex-grow md:flex-grow-0 transition-all" />
        {enableButton && (
          <Button
            type="emphasis"
            className="w-48 mx-auto"
            onClick={() =>
              initiateRegisteration(
                firestore,
                registerUser,
                eventId,
                user.uid,
                response,
                1,
                [user.displayName, 22]
              )
            }
          >
            Register
          </Button>
        )}
        <div className="flex-grow-0 md:flex-grow transition-all" />
      </div>
    </Scaffold>
  );
}
