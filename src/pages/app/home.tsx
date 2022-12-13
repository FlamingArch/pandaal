import React from "react";
import { useEvents } from "../../hooks";
import { AppBar, LoadingList, Scaffold, List, Button } from "../../components";
import { AccountButton, EventCard } from "../../fragments";
import { IconEdit, IconFeedback } from "../../components/icons";
import { Outlet } from "react-router-dom";

export default function PageHome() {
  const events = useEvents();

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
        />
      }
    >
      <List.View>
        <List.Header
          heading="Popular Events Near Greater Noida"
          actions={
            <Button
              onClick={() => {}}
              leading={<IconFeedback className="w-6 h-6" />}
            >
              Filter
            </Button>
          }
        />
        <List.Section heading="Events">
          {events.length == 0 ? (
            <LoadingList length={4} />
          ) : (
            events.map((e) => (
              <EventCard event={e} key={e.id} hover details navigateOnClick />
            ))
          )}
        </List.Section>
        <div className="h-56"></div>
      </List.View>
      <Outlet />
    </Scaffold>
  );
}
