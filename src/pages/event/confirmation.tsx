import _ from "lodash";
import React from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { AppBar, Page, Scaffold, Text } from "../../components";
import {
  IconEventConfirmation,
  IconLocation,
  IconStreaming,
} from "../../components/icons";
import { BackButton } from "../../fragments";
import { useRegistration } from "../../hooks";
export default function PageConfirmation() {
  const { eventId } = useParams();
  const location = useLocation();

  if (!location || !location.state) {
    return <Navigate to={`/${eventId}`} />;
  }

  const [registrationStatus, setRegistrationStatus] = React.useState("pending");
  const [reg, regLoading, regError] = useRegistration(
    location?.state?.registrationId ?? ""
  );
  
  React.useEffect(() => {
    setRegistrationStatus(reg?.registrationStatus ?? "pending");
  }, [reg]);

  return (
    <Scaffold
      appBar={
        <AppBar
          responsive
          background="material"
          leading={<BackButton customPath={`/${eventId}`} />}
        />
      }
    >
      <Page gap={6} responsive>
        <Text headingLevel={2} bold>
          Order Confirmation
        </Text>

        <div className="flex flex-col">
          <div className="flex items-center rounded-3xl shadow-md p-6 gap-6 bg-white">
            <IconEventConfirmation
              className={`w-8 h-8 ${
                registrationStatus == "successful"
                  ? "fill-green-600"
                  : registrationStatus == "failed"
                  ? "fill-red-600"
                  : "fill-yellow-600"
              }`}
            />
            <div className="flex flex-col">
              <Text headingLevel={4} bold>
                Payment {_.startCase(registrationStatus)}
              </Text>
              at Mon, 23 Jan 2023 03:57 pm
            </div>
          </div>
          <div
            className={`w-1 h-6 ${
              registrationStatus == "successful"
                ? "bg-green-600"
                : registrationStatus == "failed"
                ? "bg-red-600"
                : "bg-yellow-600"
            } self-center`}
          ></div>
          <div className="flex items-center rounded-3xl shadow-md p-6 gap-6 bg-white">
            <IconEventConfirmation
              className={`w-8 h-8 ${
                registrationStatus == "successful"
                  ? "fill-green-600"
                  : registrationStatus == "failed"
                  ? "fill-red-600"
                  : "fill-yellow-600"
              }`}
            />
            <div className="flex flex-col">
              <Text headingLevel={4} bold>
                Registration Status
              </Text>
              <p
                className={`${
                  registrationStatus == "successful"
                    ? "text-green-600"
                    : registrationStatus == "failed"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {_.startCase(registrationStatus)}
              </p>
            </div>
          </div>
          <div
            className={`w-1 h-6 ${
              registrationStatus == "successful"
                ? "bg-green-600"
                : registrationStatus == "failed"
                ? "bg-red-600"
                : "bg-yellow-600"
            } self-center`}
          ></div>
          <div className="flex flex-col items-stretch overflow-hidden rounded-3xl shadow-md bg-primary-50">
            <button className="p-4 uppercase font-bold text-primary-500">
              View Ticket
            </button>
            <div className="flex items-center rounded-3xl shadow-md p-6 gap-6 bg-white">
              <img className="w-20 rounded-xl shadow-lg" src={reg?.bannerURL} />
              <div className="flex flex-col">
                <Text bold accented headingLevel={6}>
                  Registering for
                </Text>
                <Text headingLevel={6}>{reg?.eventTitle}</Text>
                <div className="flex gap-1 pt-2">
                  {reg?.onOff == 1 ? (
                    <IconStreaming className="w-6 h-6 fill-primary-500" />
                  ) : (
                    <IconLocation className="w-6 h-6 fill-primary-500" />
                  )}
                  <p className="opacity-80">
                    {reg?.onOff == 1
                      ? reg?.onlinePlatform
                      : reg?.offlineLocationAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-3xl shadow-md p-6 gap-4 bg-white">
          <Text headingLevel={4} bold>
            Payment Successful
          </Text>
          <div
            style={{ gridTemplateColumns: "auto 1fr" }}
            className="w-full text-left grid grid-cols-2"
          >
            <p className="min-w-fit mr-4">Payment Status:</p>
            <p>Paid</p>
            <p className="min-w-fit mr-4">Amount:</p>
            <p className="text-lg font-bold text-green-700">₹ 3.05</p>
            <p className="min-w-fit mr-4">Payment ID:</p>
            <p>knXNcnl32221sakj</p>
          </div>
          <p className="opacity-50 text-sm font-bold">
            This amount is non refundable. Please contact the event organiser
            for any queries.
          </p>
        </div>
        <p className="text-sm">
          If you're facing any issues, please raise a ticket by clicking{" "}
          <a href="https://pandaal.in/support">here</a>.
        </p>
      </Page>
    </Scaffold>
  );
}
