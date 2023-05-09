import { useMemo } from "react";
import { AppBar, Button, Scaffold, StepsList, Text } from "../components";
import { IconBack, IconPreloader } from "../components/icons";
import { useNavigate, useParams } from "@tanstack/router";
import { useAppStore, useEvent } from "../hooks";
import { ErrorCard, EventBanner } from "../fragments";
import { parseHTML } from "../functions";

export default function PageInstructions() {
  const navigate = useNavigate();
  const { eventId } = useParams();

  if (!eventId) navigate({ to: "/" });

  const { firestore } = useAppStore((state) => ({
    firestore: state.firestore,
  }));

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
              label="Event"
              Icon={IconBack}
              buttonStyle="action"
              onClick={() => navigate({ to: `/${eventId}` })}
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

  if (isLoading) {
    return (
      <Scaffold appBar={appBar}>
        <div className="flex mx-auto h-full items-center gap-4">
          <IconPreloader className="w-6 h-6 stroke-primary-500" /> Loading
        </div>
      </Scaffold>
    );
  }

  if (isError) {
    return (
      <Scaffold appBar={appBar} responsive>
        <ErrorCard error={error} />
      </Scaffold>
    );
  }

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
        How to Register?
      </Text>
      <p className="highlight-anchor fadeIn">
        {parseHTML(event.data?.howToRegisterHtmlText)}
      </p>
      <Text className="pt-6 fadeIn uppercase font-semibold">
        Terms and Conditions
      </Text>
      <p className="highlight-anchor fadeIn">
        {parseHTML(event.data?.termsAndConditions)}
      </p>
    </Scaffold>
  );
}
