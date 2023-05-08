import { AppBar, Button, Scaffold, Text } from "../components";
import { useAppStore, useEvent } from "../hooks";
import { IconBack, IconPreloader } from "../components/icons";
import { useNavigate, useParams } from "@tanstack/router";
import { parseHTML } from "../functions";
import { useEffect, useRef } from "react";
import { EventBanner } from "../fragments";

export default function PageInstructions() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const { firestore } = useAppStore((state) => ({
    firestore: state.firestore,
  }));

  const {
    data: event,
    isLoading,
    isError,
    error,
  } = useEvent(firestore, eventId!);

  const appBar = (
    <div className="z-50 top-0 sticky">
      <AppBar
        responsive
        gap={6}
        background="materialShadow"
        leading={
          <Button
            buttonStyle="action"
            Icon={IconBack}
            label="Event"
            onClick={() => navigate({ to: `/${eventId}` })}
          />
        }
      >
        <ul className="steps responsive stick top-0">
          <li className="active">Instructions</li>
          <li>Register</li>
          <li>Payment</li>
          <li>Confirmation</li>
        </ul>
        <Text className="responsive" headingLevel={4} bold>
          How to Register?
        </Text>
      </AppBar>
    </div>
  );

  const bottomAppBar = (
    <AppBar sticky="bottom" background="gradient">
      <Button
        buttonStyle="emphasis"
        label="Continue"
        className="responsive"
        onClick={() => navigate({ to: "/register/$eventId" })}
      />
    </AppBar>
  );

  if (isLoading) {
    return (
      <Scaffold appBar={appBar} className="fadeInRight animate-spin">
        <div className="flex h-full items-center gap-2 mx-auto pt-12 ">
          <IconPreloader className="w-6 h-6 stroke-primary-500" /> Loading
        </div>
      </Scaffold>
    );
  }

  if (!event?.exists) {
    navigate({ to: "/" });
  }

  return (
    <Scaffold
      responsive
      appBar={appBar}
      bottomAppBar={bottomAppBar}
      leading={<EventBanner className="fadeIn" event={event?.data} />}
      className="fadeInRight animate-spin"
      gap={6}
    >
      <p className="highlight-anchor fadeIn">
        {parseHTML(event?.data?.howToRegisterHtmlText)}
      </p>
    </Scaffold>
  );
}
