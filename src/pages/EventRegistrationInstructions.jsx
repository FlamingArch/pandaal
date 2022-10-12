import React from "react";
import { motion } from "framer-motion";
import { IconBack } from "../components/Icons";
import { PageEventRegistration } from ".";
import FirebaseIntegration from "../components/Firebase";

import { Parser } from "html-to-react";

export default function PageEventRegistrationInstructions({ setOverlayPage }) {
  const parser = new Parser();
  const event = React.useContext(FirebaseIntegration.Context).fetchDocument();

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      exit={{ opacity: 0 }}
      style={{ overscrollBehavior: "contain" }}
      className="flex flex-col p-8 gap-8 h-screen overflow-scroll"
    >
      <div
        className="rounded-2xl p-4 fill-primary bg-primaryextralight w-fit hover:shadow-2xl hover:shadow-[#505BA570] transition-shadow"
        onClick={() => setOverlayPage(undefined)}
      >
        <IconBack className="w-6 h-6" />
      </div>
      <p className="text-2xl">How to Register?</p>
      <p style={{ lineHeight: "1rem" }} className="flex-grow">
        {parser.parse(event.howToRegisterHtmlText, "text/html")}
      </p>
      <div
        className="rounded-2xl transition-all cursor-pointer p-4 hover:shadow-2xl hover:shadow-[#505BA570] text-primary font-bold pt-[auto] bg-primaryextralight grid place-items-center"
        onClick={() =>
          setOverlayPage(
            <PageEventRegistration setOverlayPage={setOverlayPage} />
          )
        }
      >
        continue
      </div>
    </motion.div>
  );
}
