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

  if (!event?.exists) {
    navigate({ to: "/" });
  }

  const ref = useRef<HTMLDivElement>(null);

  const onScroll = (e: Event) => {
    console.log(ref.current);
  };

  useEffect(() => {
    ref.current?.addEventListener("scroll", onScroll);
  }, []);

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
          <li>Sign In</li>
          <li>Details</li>
          <li>Payment</li>
        </ul>
        <Text className="responsive" headingLevel={4} bold>
          How to Register?
        </Text>
      </AppBar>
    </div>
  );

  const bottomAppBar = (
    <AppBar sticky="bottom" background="gradient">
      <Button buttonStyle="emphasis" label="Register" className="responsive" />
    </AppBar>
  );

  const eventCard = <EventBanner event={event?.data} />;

  return (
    <Scaffold
      responsive
      appBar={appBar}
      bottomAppBar={bottomAppBar}
      leading={eventCard}
      gap={6}
      scrollRef={ref}
    >
      {isLoading ? (
        <div className="flex gap-2 mx-auto pt-12 ">
          <IconPreloader className="w-6 h-6 stroke-primary-500" /> Loading
        </div>
      ) : (
        <p className="highlight-anchor">
          {parseHTML(event?.data?.howToRegisterHtmlText)}
        </p>
      )}
    </Scaffold>
  );
}
