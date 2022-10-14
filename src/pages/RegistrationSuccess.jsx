import React from "react";
import { Page } from "../components";
import Firebase from "../contexts/Firebase";
import { CloseButton } from "../fragments";
import { parseHTML } from "../helpers";

const RegistrationSuccess = () => {
  const { ticket } = React.useContext(Firebase.Context);

  return (
    <Page.Full className="w-screen h-screen overflow-hidden">
      <div className="flex flex-col h-full overflow-scroll">
        <CloseButton />
        {parseHTML(ticket)}
      </div>
    </Page.Full>
  );
};

export default RegistrationSuccess;
