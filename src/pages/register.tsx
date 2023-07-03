import { AppBar, Button, Page, StepsList, Text } from "../components";
import { IconBack, IconPreloader } from "../components/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useAppStore, useEvent } from "../hooks";
import { ErrorCard, EventBanner, UserBadge, UserCard } from "../fragments";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import Counter from "../components/counter";

export default function PageRegister() {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const [noTickets, setNoTickets] = useState(1);

  if (!eventId) navigate("/");

  const { firestore, auth } = useAppStore((state) => ({
    firestore: state.firestore,
    auth: state.auth,
  }));

  const [user, signingIn, signInError] = useAuthState(auth);

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
        className="responsive"
        buttonStyle="emphasis"
        label="Continue"
        onClick={() => navigate(`/${eventId}/confirmation`)}
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
      <Text headingLevel={5} className="fadeIn">
        Details
      </Text>

      <p className="pt-6 fadeIn uppercase font-semibold">Signed In as</p>
      <UserCard user={user!} />

      <p className="pt-6 fadeIn uppercase font-semibold">No. of Tickets</p>
      <Counter onChange={(val) => setNoTickets(val)} />

      <p className="pt-6 fadeIn uppercase font-semibold">Details</p>
    </Page>
  );
}
