import React from "react";
import { useEvents, useEventsCategorised } from "../../hooks";
import { AppBar, LoadingList, Scaffold, List, Button } from "../../components";
import { AccountButton, EventCard } from "../../fragments";
import { IconEdit, IconFeedback } from "../../components/icons";
import { Outlet, useOutlet } from "react-router-dom";

export default function PageHome() {
  const events = useEventsCategorised();
  const outlet = useOutlet();

  window.document.title = "Pandaal: An Event Ecosystem";

  let branding = (
    <div className="text-2xl font-bold text-primary-500">pandaal</div>
  );

  return (
    <Scaffold
      appBar={
        <AppBar
          background="material"
          padding={6}
          leading={branding}
          actions={<AccountButton />}
          className="max-w-[100vw] overflow-hidden"
        />
      }
      overlay={outlet}
    >
      <List.View>
        <p className="p-6 pb-2">Hey, Harsh</p>
        <p className="text-xl font-bold p-6 pt-0">
          Showing all the getaway spots near
        </p>
        <p className="text-xl font-bold p-6 m-2 text-secondary-500 pt-0">
          Greater Noida
        </p>
        {Object.keys(events).map((category, index) => (
          <List.Section heading={category} key={index}>
            {events[category].map((event, index) => (
              <EventCard
                event={event}
                key={event.id}
                hover
                details
                navigateOnClick
              />
            ))}
          </List.Section>
        ))}
        <div className="h-56"></div>
      </List.View>
    </Scaffold>
  );
}
