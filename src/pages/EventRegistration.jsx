import React from "react";
import { motion } from "framer-motion";
import { IconBack, IconChat } from "../components/Icons";
import { PageEventRegistrationInstructions } from ".";
import { Button, Input } from "../components";
import FirebaseIntegration from "../components/Firebase";

export default function PageEventRegistration({ setOverlayPage }) {
  const event = React.useContext(FirebaseIntegration.Context).fetchDocument();

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      exit={{ opacity: 0 }}
      className="flex flex-col p-8 gap-8 h-full"
    >
      <div
        className="rounded-2xl p-4 fill-primary bg-primaryextralight w-fit hover:shadow-2xl hover:shadow-[#505BA570] transition-shadow"
        onClick={() =>
          setOverlayPage(
            <PageEventRegistrationInstructions
              setOverlayPage={setOverlayPage}
            />
          )
        }
      >
        <IconBack className="w-6 h-6" />
      </div>
      <p className="text-2xl">Please fill this Form</p>

      {event.questions.map((e, i) => (
        <div key={i} className="grid gap-2">
          <p>{e.ques}</p>
          <Input
            type={e.responseType}
            placeholder={"Answer Here"}
            leading={<IconChat className="w-6 h-6 fill-primary" />}
          >
            {e.choices &&
              e.choices.map((e, i) => {
                return (
                  <option key={i} value={e}>
                    {e}
                  </option>
                );
              })}
          </Input>
        </div>
      ))}

      <Button>Register</Button>
    </motion.div>
  );
}
