import {
  IconClock,
  IconLocation,
  IconStreaming,
  IconUser,
} from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { fetchEvent } from "@/helpers";
import { parseHTML as parse } from "@/helpers";

export default async function EventPage({
  params,
}: {
  params: { eventId: string };
}) {
  const event = await fetchEvent(params.eventId);
  if (!event) return <div className="text-3xl font-bold">Event not found</div>;

  return (
    <div className="text-sm">
      <Image
        alt=""
        src={event?.bannerURL}
        width={900}
        height={1200}
        className="fixed -z-10 w-screen h-screen scale-150 blur-3xl brightness-50"
      />
      <Image
        alt=""
        src={event?.bannerURL}
        width={900}
        height={1200}
        className="w-48 rounded-3xl shadow-xl mx-auto"
      />
      <div className="backdrop-blur-3xl bg-primary-50 bg-opacity-80 fixed bottom-0 left-0 right-0 p-6">
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto flex justify-between items-center gap-6">
          <div className="flex flex-col flex-grow">
            <p className="text-primary-500">Price</p>
            <p className="text-lg">₹ {event?.price}/person</p>
          </div>
          <Link
            href={`${params.eventId}/instructions`}
            className="bg-primary-500 flex-grow justify-center fill-white text-white p-3 rounded-2xl flex gap-2 hover:bg-primary-600 transition-colors"
          >
            <p>Register</p>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto pt-6 pb-32">
        <div className="rounded-3xl bg-white p-6 flex-col flex">
          <h1
            className="uppercase text-light text-primary-500"
            style={{ letterSpacing: "0.2rem" }}
          >
            {event?.Category}
          </h1>
          <h1 className="text-lg">{event?.title}</h1>
          <h1 className="text-primary-500">by {event?.organisationName}</h1>

          {event?.onOff == "1" ? (
            <div className="flex gap-2 pt-6 items-center">
              <IconStreaming className="w-6 h-6 fill-primary-500" />
              <p className="text-primary-500">{event?.onlinePlatform}</p>
            </div>
          ) : (
            <div className="flex gap-2 pt-6 items-center">
              <IconLocation className="w-6 h-6 fill-primary-500" />
              <p className="text-primary-500">
                {event?.offlineLocationAddress}
              </p>
            </div>
          )}

          <div className="flex gap-2 pt-6 items-center">
            <IconClock className="w-6 h-6 fill-primary-500" />
            <div className="flex flex-col">
              <p className="text-primary-500">Start Time</p>
              <p className="text-red-900 uppercase">
                {event?.startDate} {event?.startTime} to {event?.endDate}{" "}
                {event?.endTime}
              </p>
            </div>
          </div>

          <div className="text-lg pt-6 pb-3">Event Description</div>
          {event?.description.length > 300 ? (
            <p>{parse(event?.description ?? "")}</p>
          ) : (
            <p>{parse(event?.description ?? "")}</p>
          )}

          <div className="text-lg pt-6 pb-3">Terms & Conditions</div>
          <p>{parse(event?.termsAndConditions ?? "")}</p>
        </div>
      </div>
    </div>
  );
}
