import Link from "next/link";
import { useContext } from "react";
import { Page, Scaffold } from "../components";
import FirebaseIntegration from "../fragments/Firebase";
import { List } from "../legacy/components";
import { IconAdd, IconBack } from "../legacy/components/Icons";

export default function settings() {
  const Firebase = useContext(FirebaseIntegration.Context);

  return (
    <div
      style={{}}
      className="w-screen h-screen pt-5 bg-[#c7dbf5] dark:bg-primary-dark"
    >
      <Page>
        <div className="flex items-center w-full h-fit">
          <Link href="/">
            <div className="ml-6 p-4 aspect-square w-fit rounded-[1rem] fill-primary bg-[#c7dbf5] cursor-pointer">
              <IconBack />
            </div>
          </Link>
          <div className="flex flex-col flex-grow gap-2 p-6">
            <div className="font-bold text-[2rem]">Harsh Chaturvedi</div>
            <div>+919876543210</div>
          </div>
          <Link href="/editprofile">
            <div className="grid h-full cursor-pointer aspect-square place-content-center">
              <IconAdd className="fill-primary dark:fill-[#c7dbf5]" />
            </div>
          </Link>
        </div>
        <div className="flex-grow bg-white dark:bg-black">
          <List.View className="pt-6">
            <div className="flex items-center p-6 ">
              <IconAdd className="w-8 h-8 opacity-60 dark:fill-white" />
              <List.Section>
                <p className="text-[1.2rem]">Booking History</p>
                <div className="opacity-60">
                  View your booked events and purchases
                </div>
              </List.Section>
            </div>
            <div className="flex items-center p-6 ">
              <IconAdd className="w-8 h-8 opacity-60 dark:fill-white" />
              <List.Section>
                <p className="text-[1.2rem]">Your Events</p>
                <div className="opacity-60">
                  Details of the events you have created
                </div>
              </List.Section>
            </div>
            <div className="flex items-center p-6 ">
              <IconAdd className="w-8 h-8 opacity-60 dark:fill-white" />
              <List.Section>
                <p className="text-[1.2rem]">Help and Support</p>
                <div className="opacity-60">
                  Frequently asked questions and Chat
                </div>
              </List.Section>
            </div>
            <hr className="dark:border-gray-600 border-gray-200 mx-[40vw]" />
            <div className="flex items-center p-6 ">
              <IconAdd className="w-8 h-8 opacity-60 dark:fill-white" />
              <List.Section>
                <p className="text-[1.2rem]">Suggestion or Feedback</p>
                <div className="opacity-60">
                  Have any suggestion or feedback? Write to us.
                </div>
              </List.Section>
            </div>
            <div className="flex items-center p-6 ">
              <IconAdd className="w-8 h-8 fill-primary dark:fill-[#c7dbf5]" />
              <List.Section>
                <p className="text-[1.2rem] font-medium">List an Event</p>
                <div className="opacity-60">Hold your Dream Event with us.</div>
              </List.Section>
            </div>
            <div className="grid p-6 place-content-center">
              <div
                className="px-12 py-6 rounded-[1.5rem] font-bold text-primary cursor-pointer bg-[#c7dbf5]"
                onClick={() => {}}
              >
                Sign-out
              </div>
            </div>
          </List.View>
        </div>
        <div className="flex justify-around w-full">
          <div className="p-4 font-bold">Share</div>
          <div className="p-4 font-bold">Share</div>
          <div className="p-4 font-bold">Share</div>
        </div>
      </Page>
    </div>
  );
}
