import React from "react";
import { useNavigate, useOutlet, useParams } from "react-router-dom";

import { BackButton, AttendeeInput } from "../../fragments";
import { generateForm, initiateRegisteration } from "../../functions";
import { useEvent } from "../../hooks";
import { AppBar, Button, Page, Scaffold, Text } from "../../components";
import { FirebaseContext } from "../../contexts/firebase";
import _, { range } from "lodash";
import { IconPreloader } from "../../components/icons";

export default function PageRegister() {
  const { firestore, functions, registerUser, user } =
    React.useContext<any>(FirebaseContext);

  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event] = useEvent(eventId ?? "");
  const outlet = useOutlet();

  const [loading, setLoading] = React.useState(false);

  const [response, setResponse] = React.useState([]);
  const [enableButton, setEnableButton] = React.useState(false);

  const [noAttendees, setNoAttendees] = React.useState(1);
  const [attendees, setAttendees] = React.useState<any>([]);

  if (!event) {
    return (
      <Scaffold>
        <div className="w-screen h-screen bg-gray-50 flex flex-col items-center justify-center">
          <IconPreloader className="w-8 h-8 stroke-gray-500" />
        </div>
      </Scaffold>
    );
  }

  if (loading) {
    return (
      <Scaffold>
        <Page
          padding={8}
          gap={6}
          className="place-content-center place-items-center text-center"
        >
          <IconPreloader className="w-16 h-16 stroke-primary-500" />
          <Text headingLevel={2} bold>
            Processing{event?.price === "0" ? "" : ` Payment`}...
          </Text>
          <Text headingLevel={6} accented>
            Do not press the back button or refresh the page.
          </Text>
        </Page>
      </Scaffold>
    );
  }

  return (
    <Scaffold
      appBar={
        <AppBar backdrop="material" responsive leading={<BackButton />} />
      }
      overlay={outlet}
      bottomBar={
        enableButton && (
          <AppBar
            responsive
            background="material"
            center={
              <Button
                type="emphasis"
                className="flex-grow"
                onClick={() => {
                  setLoading(true);
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
                    () => {
                      setLoading(false);
                    },
                    (response) => {
                      navigate(`/${eventId}/confirmation`, { state: response });
                      setLoading(false);
                    }
                  );
                }}
              >
                Register{" "}
                {event?.price === "0"
                  ? ""
                  : `(₹ ${event?.price * noAttendees})`}
              </Button>
            }
          />
        )
      }
    >
      <Page backdrop="solid" padding={6} gap={4} responsive>
        <div className="text-3xl font-bold">Fill Out This Form</div>
        {event?.questions &&
          generateForm(
            event?.questions,
            response,
            setResponse,
            setEnableButton
          )}
        {event?.price != 0 && (
          <div className="flex items-center justify-between gap-4 rounded-2xl p-4 bg-primary-50">
            <div className="flex flex-col">
              <Text headingLevel={5}>Attendees</Text>
              <Text bold accented>
                Max: {_.min([5, event?.availableRegistrations])}
              </Text>
            </div>
            <div className="flex items-center gap-4">
              <Button
                disabled={noAttendees == 1}
                className="aspect-square"
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
                className="aspect-square"
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
              key={i}
              onChange={(value) => {
                attendees[i] = value;
                setAttendees((oldVal) => attendees);
              }}
            />
          ))}

        <div className="flex-grow md:flex-grow-0 transition-all" />
      </Page>
    </Scaffold>
  );
}
