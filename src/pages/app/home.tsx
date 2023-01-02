import React from "react";
import { useEvents, useEventsCategorised } from "../../hooks";
import { AppBar, LoadingList, Scaffold, List, Button } from "../../components";
import { AccountButton, EventCard } from "../../fragments";
import { IconEdit, IconFeedback } from "../../components/icons";
import { Outlet, useOutlet } from "react-router-dom";

export default function PageHome() {
  const events = useEventsCategorised();
  const outlet = useOutlet();

  let branding = (
    <div className="text-2xl font-bold text-primary-500">pandaal</div>
  );

  return (
    <Scaffold
      appBar={
        <AppBar
          backdrop="material"
          leading={branding}
          actions={<AccountButton />}
          className="max-w-[100vw] overflow-hidden"
        />
      }
      overlay={outlet}
    >
      <List.View>
        <List.Header heading="Popular Events Near You" />
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
