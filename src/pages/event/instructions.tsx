import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useOutlet, useParams } from "react-router-dom";

import { useEvent } from "../../hooks";
import { parseHTML } from "../../helpers";
import { BackButton } from "../../fragments";
import { AppBar, Button, Page, Scaffold } from "../../components";
import { IconPreloader } from "../../components/icons";

export default function PageRegister() {
  const { eventId } = useParams();
  const event = useEvent(eventId ?? "");
  const navigate = useNavigate();
  const outlet = useOutlet();

  return (
    <Scaffold
      appBar={<AppBar responsive leading={<BackButton />} />}
      bottomBar={
        <AppBar
          responsive
          center={
            <Button
              onClick={() => navigate(`/${eventId}/register`)}
              type="emphasis"
              className="flex-grow"
            >
              Register
            </Button>
          }
        />
      }
      overlay={outlet}
    >
      <Page responsive gap={6}>
        <div className="text-3xl font-bold">Instructions</div>
        {event ? (
          <p>{parseHTML(event?.howToRegisterHtmlText)}</p>
        ) : (
          <p className="flex gap-2">
            <IconPreloader className="w-8 h-8 stroke-gray-500" />
            Fetching Instructions
          </p>
        )}
      </Page>
    </Scaffold>
  );
}
