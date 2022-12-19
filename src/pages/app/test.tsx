import React from "react";
import { Button, Scaffold } from "../../components";
import { FirebaseContext } from "../../contexts/firebase";

export default function PageTest() {
  const { functions, user } = React.useContext<any>(FirebaseContext);

  const initiatePayment = () => {};

  return (
    <Scaffold>
      <div className="w-full h-full p-6 sticky bg-opacity-50 bg-blue-500">
        Content
        {!user && (
          <div>
            Not logged in
            <Button type="emphasis" onClick={() => initiatePayment()} />
          </div>
        )}
        <Button onClick={() => initiatePayment()} type="emphasis">
          Pay
        </Button>
        <div className="w-full h-48 m-4 p-4 bg-white"></div>
      </div>
    </Scaffold>
  );
}
