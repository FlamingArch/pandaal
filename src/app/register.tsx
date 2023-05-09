import { useMemo } from "react";
import { AppBar, Button, Scaffold, StepsList, Text } from "../components";
import { IconBack, IconPreloader } from "../components/icons";
import { useNavigate, useParams } from "@tanstack/router";
import { useAppStore, useEvent } from "../hooks";
import { ErrorCard, EventBanner, UserCard } from "../fragments";
import { useAuthState } from "react-firebase-hooks/auth";

export default function PageRegister() {
  const navigate = useNavigate();
  const { eventId } = useParams();

  if (!eventId) navigate({ to: "/" });

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

  const appBar = useMemo(
    () => (
      <div className="z-40 sticky top-0">
        <AppBar
          gap={4}
          responsive
          background="materialShadow"
          leading={
            <Button
              label="Instructions"
              Icon={IconBack}
              buttonStyle="action"
              className="fadeIn"
              onClick={() => navigate({ to: `/instructions/${eventId}` })}
            />
          }
        >
          <StepsList
            elements={["Instructions", "Register", "Payment", "Confirmation"]}
            activeIndex={0}
          />
        </AppBar>
      </div>
    ),
    []
  );

  if (signingIn || isLoading) {
    return (
      <Scaffold appBar={appBar}>
        <div className="flex mx-auto h-full items-center gap-4">
          <IconPreloader className="w-6 h-6 stroke-primary-500" /> Loading
        </div>
      </Scaffold>
    );
  }

  if (signInError || isError) {
    return (
      <Scaffold appBar={appBar} responsive>
        <ErrorCard error={signInError ?? error} />
      </Scaffold>
    );
  }

  // if (!signingIn && !user) {
  //   navigate({ to: "/signin" });
  // }

  if (!event.exists) {
    navigate({ to: "/" });
  }

  const bottomAppBar = (
    <AppBar sticky="bottom" background="gradient">
      <Button
        className="responsive"
        buttonStyle="emphasis"
        onClick={() => navigate({ to: "/register/$eventId" })}
      >
        Continue
      </Button>
    </AppBar>
  );

  return (
    <Scaffold
      responsive
      appBar={appBar}
      bottomAppBar={bottomAppBar}
      leading={<EventBanner className="fadeIn" event={event.data} />}
      gap={4}
    >
      <Text headingLevel={5} className="fadeIn" bold>
        Details
      </Text>
      <Text className="pt-6 fadeIn uppercase font-semibold">Signed In as</Text>
      <UserCard user={user!} />
      <Text className="pt-6 fadeIn uppercase font-semibold">
        No. of Tickets
      </Text>
      <Text className="pt-6 fadeIn uppercase font-semibold">Details</Text>
    </Scaffold>
  );
}
