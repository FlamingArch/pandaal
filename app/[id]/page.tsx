import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import constants from "../../constants";
import { getFullDateRange, parseHTML } from "../../helpers";
import _ from "lodash";
import { Text, LimitedParagraph } from "../../components";

import {
  IconArrowRight,
  IconClock,
  IconGlobe,
  IconInstagram,
  IconLocation,
  IconMail,
  IconShare,
  IconStreaming,
  IconNewEvent,
  IconBack,
} from "../../components/icons";
import Link from "next/link";

async function fetchEvent(id: string) {
  const app = initializeApp(constants.firebaseConfig);
  const db = getFirestore(app);

  const docRef = doc(db, "Events", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    /// TODO: Handle event not found
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const event = await fetchEvent(params.id);

  return (
    <div className="flex items-center flex-col p-8 gap-8 w-screen min-h-screen overflow-scroll pb-32">
      <Link
        href={`/`}
        className="p-4 rounded-2xl bg-primary-50 bg-opacity-80 backdrop-filter backdrop-blur-lg backdrop-brightness-150 backdrop-saturate-200 w-min dark:bg-primary-800 place-self-start"
      >
        <IconBack className="w-6 h-6 fill-primary-500 dark:fill-primary-200" />
      </Link>
      <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10 bg-white dark:bg-black">
        <Image
          alt=""
          className="scale-110 filter blur-2xl brightness-200 dark:brightness-75"
          src={event?.bannerURL}
          fill
        />
      </div>
      <Image
        alt=""
        className="rounded-3xl aspect-[9/12]"
        src={event?.bannerURL}
        width={200}
        height={200}
      />

      <Card>
        <div className="flex flex-col gap-2">
          <p style={{ letterSpacing: "2px" }} className="opacity-60 uppercase">
            {event?.Category}
          </p>
          <p className="text-2xl">{event?.Title}</p>
          <p className="text-primary-500 dark:text-primary-400 font-medium">
            by {event?.organisationName}
          </p>
        </div>
        {/* TODO: Check proper value for onOff */}
        <div className="flex gap-2">
          {event?.onOff && event.onOff == 1 ? (
            <IconStreaming className="w-6 h-6 fill-primary-500 dark:fill-primary-400" />
          ) : (
            <IconLocation className="w-6 h-6 fill-primary-500 dark:fill-primary-400" />
          )}
          <p className="opacity-80">
            {event?.onOff && event.onOff == 1
              ? event?.onlinePlatform
              : event?.offlineLocationAddress}
          </p>
        </div>
        <div className="flex gap-2">
          <IconClock className="w-6 h-6 fill-primary-500 dark:fill-primary-400" />
          <div className="flex flex-col">
            <p className="opacity-80">Start Time</p>
            <p className="text-red-700">{_.toUpper(getFullDateRange(event))}</p>
          </div>
        </div>
      </Card>

      <Card>
        <Text headingLevel={4}>Event Description</Text>
        <Text>{parseHTML(event?.description)}</Text>
      </Card>

      <Card padding={0}>
        <div className="flex">
          <Link
            href={`https://instagram.com/${event?.instagramHandle}`}
            className="flex-grow p-6 grid place-content-center transition-colors cursor-pointer fill-primary-500 dark:fill-primary-400 hover:fill-primary-300 hover:bg-white hover:bg-opacity-10 rounded-2xl"
          >
            <IconInstagram className="w-6 h-6" />
          </Link>
          <Link
            href="https://pandaal.in"
            className="flex-grow p-6 grid place-content-center transition-colors cursor-pointer fill-primary-500 dark:fill-primary-400 hover:fill-primary-300 hover:bg-white hover:bg-opacity-10 rounded-2xl"
          >
            <IconGlobe className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:support@pandaal.in"
            className="flex-grow p-6 grid place-content-center transition-colors cursor-pointer fill-primary-500 dark:fill-primary-400 hover:fill-primary-300 hover:bg-white hover:bg-opacity-10 rounded-2xl"
          >
            <IconMail className="w-6 h-6" />
          </Link>
        </div>
      </Card>

      <Card padding={0}>
        <Link href={`/${params.id}/share`}>
          <div className="flex gap-4 p-6 hover:bg-white hover:bg-opacity-10 cursor-pointer">
            <IconShare className="w-6 h-6 fill-primary-500 dark:fill-primary-400 m-1" />
            <div className="flex flex-col flex-grow">
              <Text headingLevel={6}>Share This Event</Text>
              <p>Why have all the fun alone, invite your friends too!</p>
            </div>
            <IconArrowRight className="w-4 h-4 fill-black dark:fill-white m-1" />
          </div>
        </Link>
      </Card>

      <Card>
        <Text headingLevel={4}>Terms and Conditions</Text>
        <Text>{parseHTML(event?.termsAndConditions)}</Text>
      </Card>

      <Card
        padding={0}
        className={
          "bg-primary-500 border-primary-400 border-opacity-10 text-white fill-white dark:bg-primary-500 dark:border-primary-400 bg-opacity-90 dark:bg-opacity-90"
        }
      >
        <Link href={`/new`}>
          <div className="flex gap-4 p-6 hover:bg-primary-400 hover:bg-opacity-10 cursor-pointer">
            <div className="flex flex-col flex-grow">
              <IconNewEvent className="w-16 h-16 m-1" />
              <Text headingLevel={6}>List Your Own Event</Text>
              <p>Contact us to list your own event with pandaal.</p>
            </div>
            <IconArrowRight className="w-4 h-4  m-1" />
          </div>
        </Link>
      </Card>

      <div className="dark:text-white flex fixed bottom-0 left-0 right-0 backdrop-filter backdrop-saturate-200 shadow-2xl border-[#ccca] dark:border-[#222c] border-t-2 backdrop-blur-xl p-6 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-brightness-125">
        <div className="flex w-full md:w-2/3 lg:w-1/2 mx-auto">
          <div className="flex-grow flex-col flex">
            <Text headingLevel={5} bold>
              Free
            </Text>
            <Text>Price</Text>
          </div>
          <Link
            href={`/${params.id}/instructions`}
            className="bg-primary-500 hover:bg-primary-600 shadow-primary-300 dark:shadow-primary-700 shadow-xl hover:shadow-2xl hover:shadow-primary-500 transition-all px-8 py-3 grid place-content-center text-white rounded-2xl hover:scale-105"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

function Card({
  children,
  padding,
  className,
}: {
  children: React.ReactNode;
  padding?: number;
  className?: string;
}) {
  return (
    <div
      className={
        "shadow-2xl overflow-hidden border-white dark:border-[#222] border-2 border-opacity-60 bg-white backdrop-filter backdrop-saturate-200 bg-opacity-80 dark:bg-opacity-80 dark:bg-black dark:text-white w-full md:w-2/3 lg:w-1/2 rounded-3xl transition-all flex flex-col gap-2 backdrop-brightness-125 hover:backdrop-brightness-150 " +
        (padding != null ? `p-${padding} ` : `p-6 `) +
        className
      }
    >
      {children}
    </div>
  );
}
