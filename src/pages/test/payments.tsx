import React from "react";
import { AppBar, Button, List, Page, Scaffold, Text } from "../../components";
import { FirebaseContext } from "../../contexts/firebase";
import { initiatePayment } from "../../functions";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../fragments";

export default function PageTest() {
  const { functions, user, userLoading } =
    React.useContext<any>(FirebaseContext);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = React.useState(0);

  window.onscroll = () => {
    setScrolled(window.pageYOffset);
  };

  return (
    <Scaffold
      appBar={
        <AppBar
          backdrop="material"
          leading={<BackButton customPath="/" />}
          title="Test Page"
          className="backdrop-brightness-100 bg-opacity-0 backdrop-saturate-100"
        />
      }
      backdrop={
        <img
          src={"https://source.unsplash.com/random"}
          className="filter blur-3xl scale-125"
        />
      }
    >
      <Page backdrop="material" gap={6} padding={0} rounded className="pt-10">
        <List.Header heading="Test Payments Page" />
        <List.Section heading="STEP 1: User Authentication">
          {userLoading ? (
            <div className="flex justify-between items-center w-full gap-4">
              <p>Signing In as {user.displayName}</p>
              <Button type="secondary" onClick={() => navigate("/signin")}>
                Please Wait
              </Button>
            </div>
          ) : user ? (
            <div className="flex justify-between items-center w-full gap-4">
              <p>Logged In as {user.displayName}</p>
              <Button type="secondary" onClick={() => navigate("/signin")}>
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex justify-between items-center w-full gap-4">
              Not logged in
              <Button type="secondary" onClick={() => navigate("/signin")}>
                Sign In
              </Button>
            </div>
          )}
        </List.Section>
        {user && (
          <List.Section heading="STEP 2: Test Payment">
            <div className="flex justify-between items-center w-full gap-4">
              Paying for event: Tasveer - Mobile Photography Contest
              <Button
                onClick={() =>
                  initiatePayment(
                    functions,
                    user,
                    {
                      uid: user.uid,
                      razorId: "cust_KlcPUYsDj8Puzh",
                      eventId: "qqEXTKErqiEynY9cTwuw",
                      registrationId: "mcsbabnkc",
                      ticketCount: 1,
                    },
                    (response) =>
                      navigate("/qqEXTKErqiEynY9cTwuw/confirmation/", {
                        state: response,
                      })
                  )
                }
                type="secondary"
              >
                Pay
              </Button>
            </div>
          </List.Section>
        )}
      </Page>
    </Scaffold>
  );
}
