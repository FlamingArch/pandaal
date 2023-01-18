import React, { useEffect } from "react";
import { useEventsCategorised, useUserDoc } from "../../hooks";
import {
  AppBar,
  LoadingList,
  Scaffold,
  List,
  Button,
  Page,
} from "../../components";
import { AccountButton, Branding, EventCard } from "../../fragments";
import { IconLocationEdit } from "../../components/icons";
import { useOutlet } from "react-router-dom";
import { FirebaseContext } from "../../contexts/firebase";

export default function PageHome() {
  const { user } = React.useContext<any>(FirebaseContext);
  const userDoc = useUserDoc(user?.id);

  const events = useEventsCategorised();
  const outlet = useOutlet();

  window.document.title = "Pandaal: An Event Ecosystem";

  return (
    <Scaffold
      appBar={
        <AppBar
          background="material"
          padding={6}
          leading={<Branding />}
          actions={<AccountButton />}
          className="max-w-[100vw] overflow-hidden"
        />
      }
      overlay={outlet}
      leading={
        <div className="flex flex-col p-6 gap-2">
          <p>
            Hey{" "}
            {`${userDoc?.name ?? user?.displayName.split(" ")[0] ?? "Wandrer"}`}
          </p>
          <p className="text-2xl font-bold">
            Showing all the getaway spots near
          </p>
          <p className="flex text-2xl font-bold p-4 rounded-2xl transition-colors hover:bg-secondary-50 text-secondary-500 fill-secondary-500">
            Greater Noida <IconLocationEdit className="w-8 h-8" />
          </p>
        </div>
      }
    >
      <Page padding={0}>
        {Object.keys(events).map((category, index) => (
          <div
            key={index}
            className="flex flex-col w-screen overflow-hidden items-stretch"
          >
            <p className="p-6 pb-0">{category}</p>
            <div className="flex w-screen p-6 gap-6 overflow-hidden hover:overflow-scroll">
              {events[category].map((event, index) => (
                <EventCard
                  event={event}
                  key={event.id}
                  hover
                  details
                  navigateOnClick
                />
              ))}
            </div>
          </div>
        ))}
      </Page>
    </Scaffold>
  );
}
