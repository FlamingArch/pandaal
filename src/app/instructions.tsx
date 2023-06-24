import { useMemo } from "react";
import { AppBar, Button, Card, Page, StepsList, Text } from "../components";
import { IconBack, IconPreloader, IconTicketFill } from "../components/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useAppStore, useEvent } from "../hooks";
import { ErrorCard, EventBanner, EventCard } from "../fragments";
import { parseHTML } from "../functions";
import { motion } from "framer-motion";

export default function PageInstructions() {
  const navigate = useNavigate();
  const { eventId } = useParams();

  if (!eventId) navigate("/");

  const { firestore } = useAppStore((state) => ({
    firestore: state.firestore,
  }));

  const {
    data: event,
    isLoading,
    isError,
    error,
  } = useEvent(firestore, eventId!);

  if (isLoading) {
    return (
      <Page>
        <div className="flex mx-auto h-full items-center gap-4">
          <IconPreloader className="w-6 h-6 stroke-primary-500" /> Loading
        </div>
      </Page>
    );
  }

  if (isError) {
    return (
      <Page responsive>
        <ErrorCard error={error} />
      </Page>
    );
  }

  if (!event.exists) {
    navigate("/");
  }

  const eventData = event.data;

  return (
    <motion.div
      className="fixed inset-0 backdrop-blur-xl backdrop-saturate-150 backdrop-brightness-50 z-50 flex flex-col text-white"
      animate={{ opacity: [0, 1] }}
    >
      <AppBar
        responsive
        backdrop="clear"
        className="slideInTop"
        leading={
          <Button
            Icon={IconBack}
            buttonStyle="actionSecondaryTransparentWhite"
            onClick={() => navigate(`/${eventId}`)}
          />
        }
        heading="How to Register"
      />
      <motion.div
        animate={{ opacity: [0, 1], y: [40, 0] }}
        transition={{ duration: 0.3 }}
        className="flex-grow responsive p-10 pt-0"
      >
        {parseHTML(eventData?.howToRegisterHtmlText)}
      </motion.div>
      <AppBar
        responsive
        sticky="bottom"
        backdrop="clear"
        className="slideInBottom"
      >
        <Button
          buttonStyle="primary"
          label="Continue"
          onClick={() => navigate(`/${eventId}/register`)}
        />
      </AppBar>
    </motion.div>
  );
}
