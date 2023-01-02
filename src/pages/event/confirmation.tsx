import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppBar, Page, Scaffold } from "../../components";
import {
  IconCanceled,
  IconDone,
  IconEdit,
  IconPreloader,
  IconSupport,
  IconTicketFill,
} from "../../components/icons";
import { BackButton } from "../../fragments";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { collection, doc } from "firebase/firestore";
import { FirebaseContext } from "../../contexts/firebase";
import { getMonthFromNumber } from "../../helpers";
import _ from "lodash";

export default function PageConfirmation() {
  const [registrationState, setRegistrationState] =
    React.useState("successful");
  const { eventId } = useParams();
  const [date, setDate] = React.useState<Date>(new Date());
  const { firestore } = React.useContext<any>(FirebaseContext);
  const location = useLocation();
  const navigate = useNavigate();
  const registrationId = location.state?.registrationId;
  console.log(registrationId);
  const [snapshot, loading, error] = useDocumentData(
    doc(collection(firestore, "registrations"), registrationId!)
  );
  React.useEffect(() => console.log("error"), [error]);
  React.useEffect(() => {
    console.log(snapshot?.registrationStatus);
    setRegistrationState(snapshot?.registrationStatus);
    setDate(new Date(snapshot?.paymentAuthorizedAt * 1000 ?? 1));
  }, [snapshot]);

  if (!location.state) {
    navigate(`\\${eventId}`);
  }

  if (!location.state?.registrationId) {
    navigate(`\\${eventId}`);
  }

  if (location.state?.error) {
    return (
      <Scaffold
        appBar={<AppBar backdrop="material" leading={<BackButton customPath={`/${eventId}`}/>} />}
      >
        <Page padding={6} gap={8} backdrop="solid">
          <p className="text-4xl font-semibold w-full max-w-5xl lg:mx-auto">
            Error While Registering
          </p>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:p-12 max-w-5xl lg:mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex rounded-full bg-opacity-10 p-1 font-medium bg-red-500 fill-red-500 text-red-500">
                <div className="rounded-full aspect-square h-full w-fit bg-white grid place-content-center">
                  <IconCanceled className="w-6 h-6 fill-red-500" />
                </div>
                <div className="p-4 flex-grow">Registration Failed</div>
              </div>
              <p className="font-medium">
                Your Registration could not be processed at this time.
              </p>
              <p className="">
                Reason:{" "}
                <span className="text-red-500">
                  {location.state?.error?.errorDescription}
                </span>
                <br />
                Registration ID:{" "}
                <span className="text-red-500">
                  {location.state?.registrationId}
                </span>
              </p>
            </div>
          </div>
        </Page>
      </Scaffold>
    );
  }

  return (
    <Scaffold appBar={<AppBar backdrop="material" leading={<BackButton />} />}>
      <Page padding={6} gap={4} backdrop="solid">
        <p className="text-4xl font-semibold w-full max-w-5xl lg:mx-auto">
          Registration Confirmation
        </p>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:p-12 max-w-5xl lg:mx-auto">
          <div className="flex flex-col gap-4">
            <div
              className={
                "flex rounded-full bg-opacity-10 p-1 font-medium " +
                (registrationState == "failed"
                  ? "bg-red-500 fill-red-500 text-red-500"
                  : registrationState == "successful"
                  ? "bg-green-500 fill-green-500 text-green-500"
                  : "bg-yellow-500 fill-yellow-500 text-yellow-500")
              }
            >
              <div className="rounded-full aspect-square h-full w-fit bg-white grid place-content-center">
                {registrationState == "failed" ? (
                  <IconCanceled className="w-6 h-6 fill-red-500" />
                ) : registrationState == "successful" ? (
                  <IconDone className="w-6 h-6 fill-green-500" />
                ) : (
                  <IconPreloader className="w-6 h-6 stroke-yellow-500" />
                )}
              </div>
              <div className="p-4 flex-grow">
                {registrationState == "failed"
                  ? "Payment Failed"
                  : registrationState == "successful"
                  ? "Payment Successful"
                  : "Processing Payment"}
              </div>
            </div>
            <div
              className={
                "flex rounded-full bg-opacity-10 p-1 font-medium " +
                (registrationState == "failed"
                  ? "bg-red-500 fill-red-500 text-red-500 "
                  : registrationState == "successful"
                  ? "bg-green-500 fill-green-500 text-green-500 "
                  : "bg-yellow-500 fill-yellow-500 text-yellow-500 ")
              }
            >
              <div className="rounded-full aspect-square h-full w-fit bg-white grid place-content-center">
                {registrationState == "failed" ? (
                  <IconCanceled className="w-6 h-6 fill-red-500" />
                ) : registrationState == "successful" ? (
                  <IconDone className="w-6 h-6 fill-green-500" />
                ) : (
                  <IconPreloader className="w-6 h-6 stroke-yellow-500" />
                )}
              </div>
              <div className="p-4 flex-grow">
                {registrationState == "failed"
                  ? "Registration Failed"
                  : registrationState == "successful"
                  ? "Registration Complete"
                  : "Registering"}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-semibold">Event Details</div>
            <div className="rounded-xl overflow-clip shadow-lg flex max-w-96 bg-white h-40">
              <img src={snapshot?.bannerURL} className="aspect-[9/12]" />
              <div className="flex flex-col p-4">
                <div className="text-primary-500 font-medium">
                  Registering for
                </div>
                <div className="text-xl font-medium">
                  {snapshot?.eventTitle}
                </div>
                <div className="">{snapshot?.organisationName}</div>
              </div>
            </div>

            <div className="font-semibold">Payment Details</div>
            <div className="flex pl-4 gap-4">
              <div className="h-full w-1 bg-black dark:bg-white bg-opacity-10" />
              <div className="flex flex-col flex-grow items-stretch">
                <div className="flex justify-between">
                  <div className="font-medium">Recieved</div>
                  <div className="text-[#828386] font-normal">{`${date.getHours()}:${date.getMinutes()}, ${date.getDate()} ${getMonthFromNumber(
                    date.getMonth()
                  ).slice(0, 3)} ${date.getFullYear()}`}</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Payment Status</div>
                  <div className="text-[#828386] font-normal">
                    {_.startCase(snapshot?.registrationStatus)}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Amount</div>
                  <div className="text-[#828386] font-normal">
                    ₹ {snapshot?.payingAmount / 100}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Payment ID</div>
                  <div className="text-[#828386] font-normal">
                    {snapshot?.paymentId}
                  </div>
                </div>
                <div className="text-[#828386] font-normal">
                  This amount is non- refundable. Please contact the event
                  organiser for any queries
                </div>
              </div>
            </div>

            <div className="font-semibold">Facing Issues?</div>
            <div className="hover:bg-primary-100 hover:fill-primary-700 cursor-pointer transition-all flex w-auto rounded-full bg-primary-50 p-1 fill-primary-500 text-primary-500 font-medium">
              <div className="p-4 flex-grow">Raise a Support Ticket</div>
              <div className="rounded-full aspect-square h-full p-4 bg-white grid place-content-center">
                <IconSupport className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="h-48"></div>
          <div className="fixed lg:w-1/3 lg:mx-auto bottom-0 left-0 shadow-primary-100 right-0 hover:bg-primary-700 hover:fill-primary-700 cursor-pointer transition-all flex w-auto rounded-full bg-primary-500 p-1 fill-primary-500 text-white font-medium m-6 shadow-lg">
            <div className="p-4 flex-grow">View Ticket</div>
            <div className="rounded-full aspect-square h-full p-4 bg-white grid place-content-center">
              <IconTicketFill className="w-6 h-6 grid place-content-center" />
            </div>
          </div>
        </div>
      </Page>
    </Scaffold>
  );
}
