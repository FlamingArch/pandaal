import React from "react";
import { useEvents } from "../hooks";
import { AppBar, EventCard, LoadingList, Scaffold, List } from "../components";
import { IconEdit, IconUser } from "../components/icons";

export default function PageHome() {
  const events = useEvents();

  let branding = (
    <div className="text-2xl font-bold text-primary-500">pandaal</div>
  );

  let accountButton = (
    <div className="cursor-pointer overflow-hidden transition rounded-xl bg-primary-500 hover:bg-primary-700 fill-white">
      <IconUser className="w-6 h-6 m-3 absolute" />
      <img
        src="https://source.unsplash.com/random"
        alt=""
        className="w-12 h-12 aspect-square object-cover object-center hover:filter hover:brightness-75 transition-all"
      />
    </div>
  );

  let filterButton = (
    <div className="cursor-pointer transition p-3 w-fit flex gap-3 rounded-xl bg-primary-50 hover:bg-primary-100 fill-black hover:fill-primary-500 hover:text-primary-500">
      <IconEdit className="w-6 h-6" />
      Filter
    </div>
  );

  return (
    <Scaffold appBar={<AppBar branding={branding} actions={accountButton} />}>
      <List.Header
        heading="Popular Events Near Greater Noida"
        actions={filterButton}
      />
      <List.Section heading="Events">
        {events.length == 0 ? (
          <LoadingList length={4} />
        ) : (
          events.map((e) => <EventCard event={e} />)
        )}
      </List.Section>
      <List.Section heading="Events">
        {events.length == 0 ? (
          <LoadingList length={4} />
        ) : (
          events.map((e) => <EventCard event={e} />)
        )}
      </List.Section>
      <List.Section heading="Events">
        {events.length == 0 ? (
          <LoadingList length={4} />
        ) : (
          events.map((e) => <EventCard event={e} />)
        )}
      </List.Section>
      <List.Section heading="Events">
        {events.length == 0 ? (
          <LoadingList length={4} />
        ) : (
          events.map((e) => <EventCard event={e} />)
        )}
      </List.Section>
    </Scaffold>
  );
}
