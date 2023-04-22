import { where } from "firebase/firestore";
import { AppBar, Button, Scaffold } from "../components";
import EventCard from "../components/eventCard";
import Text from "../components/text";
import { groupData } from "../functions";
import { useAppStore } from "../hooks/useAppStore";
import useEvents from "../hooks/useEvents";
import CityPage from "./city";
import {
  IconAnswer,
  IconNotificationsFill,
  IconUser,
} from "../components/icons";

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
    <Scaffold
      padding={6}
      appBar={
        <AppBar
          sticky
          background="material"
          leading={
            <p className="font-bold text-xl text-primary-500">pandaal</p>
          }
          actions={
            <>
              <Button buttonStyle="action" Icon={IconNotificationsFill} />
              <Button buttonStyle="badge">
                <img
                  src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8aGVhZHNob3R8ZW58MHx8fHwxNjgyMTQ1OTM2&force=true&w=640"
                  className="w-14 h-14 object-cover"
                />
              </Button>
            </>
          }
        />
      }
    >
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
    </Scaffold>
  );
}
