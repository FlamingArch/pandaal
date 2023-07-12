import { AppBar, Button, Page, StepsList, Text } from "../components";
import {
  IconBack,
  IconDone,
  IconPlus,
  IconPreloader,
} from "../components/icons";
import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";
import { useAppStore, useEvent } from "../hooks";
import { ErrorCard, EventBanner, UserBadge, UserCard } from "../fragments";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { AttendeeID } from "../types/attendee";
import EventQuestionsForm from "../fragments/eventQuestionsForm";
import { parseHTML } from "../functions";
import { getFunctions } from "firebase/functions";

export default function PageRegister() {
  const navigate = useNavigate();
  const { eventId } = useParams();

  if (!eventId) navigate("/");

  const { firestore, auth, savedAttendees } = useAppStore((state) => ({
    firestore: state.firestore,
    auth: state.auth,
    savedAttendees: state.savedAttendees,
  }));

  const [user, signingIn, signInError] = useAuthState(auth);

  const [attendees, setAttendees] = useState<AttendeeID[]>([
    savedAttendees[0].id,
  ]);

  const [formValidationPass, setFormValidationPass] = useState(false);
  const [answers, setAnswers] = useState([]);

  const {
    data: event,
    isLoading,
    isError,
    error,
  } = useEvent(firestore, eventId!);

  if (signingIn || isLoading) {
    return (
      <Page>
        <div className="flex mx-auto h-full items-center gap-4">
          <IconPreloader className="w-6 h-6 stroke-primary-500" /> Loading
        </div>
      </Page>
    );
  }

  if (signInError || isError) {
    return (
      <Page responsive>
        <ErrorCard error={signInError ?? error} />
      </Page>
    );
  }

  if (!signingIn && !user) {
    navigate("/signin");
  }

  if (!event.exists) {
    navigate("/");
  }

  const appBar = (
    <div className="z-40 sticky top-0">
      <AppBar
        gap={4}
        responsive
        heading="Register"
        leading={
          <Button
            Icon={IconBack}
            buttonStyle="action"
            className="fadeIn"
            onClick={() => navigate(`/${eventId}/instructions`)}
          />
        }
        actions={<UserBadge user={user} />}
      >
        <StepsList
          elements={["Instructions", "Register", "Payment", "Confirmation"]}
          activeIndex={1}
          className="p-4"
        />
      </AppBar>
    </div>
  );

  const bottomAppBar = (
    <AppBar sticky="bottom" background="gradient">
      <Button
        disabled={attendees.length < 1 || !formValidationPass}
        className="responsive"
        buttonStyle="emphasis"
        label="Continue"
        onClick={() => {
          console.log(answers);

          console.log(
            attendees.map((attendee) => {
              const attendeeObj = savedAttendees.filter(
                (a) => attendee == a.id
              )[0];
              return { name: attendeeObj.name, age: attendeeObj.age };
            })
          );

          // navigate(`/${eventId}/confirmation`);
        }}
      ></Button>
    </AppBar>
  );

  return (
    <Page
      responsive
      appBar={appBar}
      bottomAppBar={bottomAppBar}
      leading={<EventBanner className="fadeIn" event={event.data} />}
      gap={4}
    >
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      />
      <p className="pt-6 fadeIn font-semibold">Signed In as</p>
      <UserCard user={user!} />

      {event?.data?.questions && (
        <>
          <p className="pt-6 fadeIn font-semibold">Questions</p>
          <EventQuestionsForm
            questions={event.data?.questions}
            onFormValidationChange={setFormValidationPass}
            onDataChange={setAnswers}
          />
        </>
      )}

      <p className="pt-6 fadeIn font-semibold">Attendees</p>

      <Button Icon={IconPlus} label="New Attendee" />
      {savedAttendees.map((attendee) => (
        <Button
          key={attendee.id}
          buttonStyle={
            attendees.filter((e) => e == attendee.id).length > 0
              ? "cardBigReverse"
              : "cardBigSecondaryReverse"
          }
          label={
            <div className="flex gap-2 items-center">
              <p className="font-medium">{attendee.name}</p> ·
              <p className="text-sm">{attendee.age} Years</p>
            </div>
          }
          Icon={
            attendees.filter((e) => e == attendee.id).length > 0
              ? IconDone
              : IconPlus
          }
          onClick={() => {
            if (attendees.filter((e) => e == attendee.id).length > 0) {
              setAttendees(attendees.filter((e) => e != attendee.id));
            } else {
              setAttendees([...attendees, attendee.id]);
            }
          }}
        />
      ))}

      {event?.data?.termsAndConditions && (
        <>
          <p className="pt-6 fadeIn font-semibold">Terms and Conditions</p>
          <div className="highlight-anchor">
            {parseHTML(event?.data?.termsAndConditions)}
          </div>
        </>
      )}
    </Page>
  );
}
