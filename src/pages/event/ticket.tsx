import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppBar, Button, Page, Scaffold, Text } from "../../components";
import {
  IconBack,
  IconLocation,
  IconStreaming,
  IconTicketFill,
} from "../../components/icons";
import { FirebaseContext } from "../../contexts/firebase";
import { getRegistrationId } from "../../functions";
import { useUserDoc } from "../../hooks";

export default function PageTicket() {
  const { eventId } = useParams();
  const { user, firestore } = React.useContext<any>(FirebaseContext);
  const [userDoc] = useUserDoc(user?.uid);
  const navigate = useNavigate();

  const [registrationId, setRegistrationId] = React.useState("");
  const [registration, setRegistration] = React.useState<any>({});

  React.useEffect(() => {
    if (userDoc && eventId) {
      const registrationId = getRegistrationId(userDoc, eventId!);
      if (registrationId) {
        setRegistrationId(registrationId);
      } else {
        navigate(`/${eventId}`);
      }
    }
  }, [userDoc, eventId]);

  React.useEffect(() => {
    if (registrationId) {
      const ref = doc(firestore, "registrations", registrationId);
      getDoc(ref).then((doc) => {
        if (doc.exists()) {
          setRegistration(doc.data());
        } else {
          navigate(`/${eventId}`);
        }
      });
    }
  }, [registrationId]);

  return (
    <Scaffold
      backdrop={<div className="h-[20rem] w-screen bg-primary-500" />}
      className="bg-primary-50"
      appBar={
        <AppBar
          responsive
          background="clear"
          leading={
            <Button
              onClick={() => navigate(`/${eventId}`)}
              className="text-white fill-white bg-primary-500 bg-opacity-20"
              leading={<IconBack className="w-6 h-6 fill-white" />}
            />
          }
        />
      }
    >
      <Page responsive gap={6}>
        <p className="text-white text-4xl font-bold">Ticket Details</p>
        <div className="flex gap-2 text-white fill-white">
          <IconTicketFill className="w-6 h-6" />
          <p>Upcoming Event</p>
        </div>

        <div className="flex flex-col items-center rounded-3xl shadow-md bg-blue-50">
          <div className="flex items-center rounded-3xl shadow-md p-6 gap-6 bg-white w-full">
            <img
              className="w-20 rounded-xl shadow-lg"
              src={registration?.bannerURL}
            />
            <div className="flex flex-col">
              <Text bold accented headingLevel={6}>
                {registration.ticketCount} Tickets for
              </Text>
              <Text headingLevel={6}>{registration?.eventTitle}</Text>
              <div className="flex gap-1 pt-2">
                {registration?.onOff == 1 ? (
                  <IconStreaming className="w-6 h-6 fill-primary-500" />
                ) : (
                  <IconLocation className="w-6 h-6 fill-primary-500" />
                )}
                <p className="opacity-80">
                  {registration?.onOff == 1
                    ? registration?.onlinePlatform
                    : registration?.offlineLocationAddress}
                </p>
              </div>
            </div>
          </div>

          <button className="p-4 uppercase font-bold text-primary-500">
            Join
          </button>
        </div>
        <div className="flex items-center w-fit place-self-center rounded-3xl shadow-md p-6 gap-6 bg-white">
          <img
            className="w-40 aspect-square"
            src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=pndlR_${registrationId}&choe=UTF-8`}
          />
        </div>
      </Page>
    </Scaffold>
  );
}
