import React from "react";
import { useEvents } from "../hooks";
import { AppBar, LoadingList, Scaffold, List } from "../components";
import { AccountButton, EventCard } from "../fragments";
import { IconEdit, IconUser } from "../components/icons";
import { Outlet } from "react-router-dom";

export default function PageHome() {
  const events = useEvents();

  let branding = (
    <div className="text-2xl font-bold text-primary-500">pandaal</div>
  );

  let filterButton = (
    <div className="cursor-pointer transition p-3 w-fit flex gap-3 rounded-xl bg-primary-50 hover:bg-primary-100 fill-black dark:fill-white dark:text-white dark:bg-primary-800 hover:fill-primary-500 hover:text-primary-500">
      <IconEdit className="w-6 h-6" />
      Filter
    </div>
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
          actions={filterButton}
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
      </List.View>
      <Outlet />
    </Scaffold>
  );
}
