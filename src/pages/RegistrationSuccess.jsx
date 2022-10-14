import React from "react";
import { Page } from "../components";
import Firebase from "../contexts/Firebase";
import { parseHTML } from "../helpers";

const RegistrationSuccess = ({}) => {
  const { lastRegSuccessPage } = React.useContext(Firebase.Context);

  return (
    <Page.Full className="w-screen h-screen overflow-hidden">
      <div className="h-full overflow-scroll">
        {parseHTML(lastRegSuccessPage)}
      </div>
    </Page.Full>
  );
};

export default RegistrationSuccess;
