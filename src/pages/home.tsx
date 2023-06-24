import { or, where } from "firebase/firestore";
import { AppBar, Button, Page } from "../components";
import { groupData } from "../functions";
import { useAppStore, useEvents } from "../hooks";
import {
  IconLocationEdit,
  IconNotificationsFill,
  IconPreloader,
} from "../components/icons";
import { UserBadge, EventCard } from "../fragments";
import { useNavigate } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";

const today = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // Today date in YYYYMMDD string

const queries: any = [
  where("active", "==", true),
  where("acceptingRegistrations", "==", true),
  where("startDate", ">=", today),
];

export default function PageHome() {
  const { firestore, auth, city } = useAppStore((state) => ({
    firestore: state.firestore,
    city: state.city,
    auth: state.auth,
  }));

  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useEvents(firestore, queries, city);

  document.title = "pandaal: An event ecosystem";

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Page contentClassName="justify-center items-center">
        <div className="flex gap-2">
          <IconPreloader className="w-6 h-6 stroke-primary-500 nodark:stroke-white" />
          <p className="font-medium">Loading</p>
        </div>
      </Page>
    );
  }

  if (isError) return <div>{`Error fetching events: ${error}`}</div>;

  const groupedEvents = groupData(events, "Category");

  const locationBar = (
    <Button
      label={city}
      Icon={IconLocationEdit}
      buttonStyle="cardSecondaryReverse"
      className="mt-4 md:mt-0 md:w-[50vw] lg:w-[30vw] font-medium"
      onClick={() => navigate("/city")}
    />
  );

  const topBar = (
    <AppBar
      sticky
      background="material"
      leading={<p className="font-bold text-xl text-primary-500">pandaal</p>}
      center={<div className="hidden-mobile flex flex-col">{locationBar}</div>}
      actions={
        <>
          <Button buttonStyle="action" Icon={IconNotificationsFill} />
          <UserBadge user={auth.currentUser} />
        </>
      }
    >
      <div className="hidden-desktop flex flex-col">{locationBar}</div>
    </AppBar>
  );

  return (
    <Page padding={6} appBar={topBar}>
      {Object.keys(groupedEvents).map((category, index) => {
        return (
          <div className="flex gap-4 flex-col pb-6" key={index}>
            <p className="font-semibold uppercase">{category}</p>
            {groupedEvents[category].map((event: any, index: number) => (
              <EventCard event={event} key={index} />
            ))}
          </div>
        );
      })}
    </Page>
  );
}
