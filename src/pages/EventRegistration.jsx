import React from "react";
import { motion } from "framer-motion";
import { IconBack, IconChat } from "../components/Icons";
import { PageEventRegistrationInstructions } from ".";
import { Button, Input } from "../components";

export default function PageEventRegistration({ setOverlayPage }) {
  const [igUsername, setIgUsername] = React.useState("");
  const [storyBehind, setStoryBehind] = React.useState("");

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

      <div className="grid gap-2">
        <p>Your Instagram Username</p>
        <Input
          value={igUsername}
          onChange={(e) => setIgUsername(e.target.value)}
          placeholder={"Answer Here"}
          leading={<IconChat className="w-6 h-6 fill-primary" />}
        />
      </div>

      <div className="grid gap-2">
        <p>From where did you get to know about this event?</p>
        <Input />
      </div>

      <div className="grid gap-2">
        <p>The story behind your photograph?</p>
        <Input
          value={storyBehind}
          onChange={(e) => setStoryBehind(e.target.value)}
          placeholder={"Answer Here"}
        />
      </div>

      <Button>Register</Button>
    </motion.div>
  );
}
