import EventsView from "./eventsView";
import { fetchEvents } from "@/helpers";
import { where } from "firebase/firestore";

const today = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // Today date in YYYYMMDD string

const queries: any = [
  where("active", "==", true),
  where("acceptingRegistrations", "==", true),
  where("startDate", ">=", today),
];

export default async function Home() {
  const events: any = await fetchEvents(queries);
  return <EventsView events={JSON.stringify(events)} />;
}
