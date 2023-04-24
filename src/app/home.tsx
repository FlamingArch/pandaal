import { where } from "firebase/firestore";
import { AppBar, Button, Scaffold } from "../components";
import { groupData } from "../functions";
import { useAppStore, useEvents } from "../hooks";
import {
  IconLocationEdit,
  IconNotificationsFill,
  IconPreloader,
} from "../components/icons";
import { UserBadge, EventCard } from "../fragments";

const today = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // Today date in YYYYMMDD string

const queries: any = [
  where("active", "==", true),
  where("acceptingRegistrations", "==", true),
  where("startDate", ">=", today),
];

export default function PageHome() {
  const { firestore, city } = useAppStore((state) => ({
    firestore: state.firestore,
    city: state.city,
  }));
  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useEvents(firestore, queries, city);

  if (isLoading) {
    return (
      <div className="w-screen h-screen place-content-center grid grid-flow-col gap-3">
        <IconPreloader className="w-6 h-6 stroke-primary-500" />{" "}
        <p className="font-medium">Loading</p>
      </div>
    );
  }

  if (isError) {
    return <div>{`Error fetching events: ${error}`}</div>;
  }

  const groupedEvents = groupData(events, "Category");

  const locationBar = (
    <Button
      label={city}
      Icon={IconLocationEdit}
      buttonStyle="cardSecondary"
      className="mt-4 md:mt-0 md:w-[50vw] lg:w-[30vw]"
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
          <UserBadge />
        </>
      }
    >
      <div className="hidden-desktop flex flex-col">{locationBar}</div>
    </AppBar>
  );

  return (
    <Scaffold padding={6} appBar={topBar}>
      {Object.keys(groupedEvents).map((category, index) => {
        return (
          <div className="flex gap-4 flex-col pb-6" key={index}>
            <p className="font-semibold uppercase">{category}</p>
            {groupedEvents[category].map((event: any) => (
              <EventCard event={event} />
            ))}
          </div>
        );
      })}
    </Scaffold>
  );
}
