import { where } from "firebase/firestore";
import { Page } from "../components";
import EventCard from "../components/eventCard";
import Text from "../components/text";
import { groupData } from "../functions";
import { useAppStore } from "../hooks/useAppStore";
import useEvents from "../hooks/useEvents";
import CityPage from "./city";

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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{`Error fetching events: ${error}`}</div>;
  }

  const groupedEvents = groupData(events, "Category");

  return (
    <Page padding={0}>
      {Object.keys(groupedEvents).map((category) => {
        return (
          <div className="flex gap-4 flex-col">
            <Text headingLevel={6}>{category}</Text>
            {groupedEvents[category].map((event: any) => (
              <EventCard event={event} />
            ))}
          </div>
        );
      })}
    </Page>
  );
}
