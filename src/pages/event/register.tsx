import React from "react";
import { useNavigate, useOutlet, useParams } from "react-router-dom";
import { BackButton } from "../../fragments";
import { generateForm } from "../../helpers";
import { useEvent } from "../../hooks";
import {
  AppBar,
  AttendeeInput,
  Button,
  Input,
  Page,
  Scaffold,
  Text,
} from "../../components";
import { initiateRegisteration } from "../../functions";
import { FirebaseContext } from "../../contexts/firebase";
import _, { range } from "lodash";

export default function PageRegister() {
  const { firestore, functions, registerUser, user } =
    React.useContext<any>(FirebaseContext);

  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = useEvent(eventId ?? "");
  const outlet = useOutlet();

  const [response, setResponse] = React.useState([]);
  const [enableButton, setEnableButton] = React.useState(false);

  const [noAttendees, setNoAttendees] = React.useState(1);
  const [attendees, setAttendees] = React.useState<any>([]);

  return (
    <Scaffold
      appBar={<AppBar backdrop="material" leading={<BackButton />} />}
      overlay={outlet}
    >
      <Page backdrop="solid" padding={6} gap={4}>
        <div className="text-3xl font-bold">Fill Out This Form</div>
        {event?.questions &&
          generateForm(
            event?.questions,
            response,
            setResponse,
            setEnableButton
          )}
        {event?.price != 0 && (
          <div className="flex items-center justify-between gap-4 rounded-2xl p-4 bg-primary-50 dark:bg-primary-900">
            <div className="flex flex-col">
              <Text headingLevel={5}>Attendees</Text>
              <Text bold accented>
                Max: {_.min([5, event?.availableRegistrations])}
              </Text>
            </div>
            <div className="flex items-center gap-4">
              <Button
                disabled={noAttendees == 1}
                className="p-2"
                type="primary"
                onClick={() => {
                  if (noAttendees !== 1) setNoAttendees((oldVal) => oldVal - 1);
                }}
              >
                -
              </Button>
              <Text headingLevel={4}>{noAttendees}</Text>
              <Button
                disabled={
                  noAttendees >= _.min([5, event?.availableRegistrations])
                }
                className="p-2"
                type="primary"
                onClick={() => {
                  if (noAttendees < _.min([5, event?.availableRegistrations])) {
                    setNoAttendees((oldVal) => oldVal + 1);
                  }
                }}
              >
                +
              </Button>
            </div>
          </div>
        )}

        {event?.price != 0 &&
          range(noAttendees).map((i) => (
            <AttendeeInput
              onChange={(value) => {
                attendees[i] = value;
                setAttendees((oldVal) => attendees);
              }}
            />
          ))}

        <div className="flex-grow md:flex-grow-0 transition-all" />
        {enableButton && (
          <Button
            type="emphasis"
            className="w-48 mx-auto"
            onClick={() =>
              initiateRegisteration(
                firestore,
                functions,
                registerUser,
                eventId,
                user.uid,
                response,
                noAttendees,
                attendees,
                user,
                (response) =>
                  navigate(`/${eventId}/confirmation`, { state: response })
              )
            }
          >
            Register
          </Button>
        )}
      </Page>
    </Scaffold>
  );
}
