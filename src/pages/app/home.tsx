import React from "react";
import { useEvents } from "../../hooks";
import { AppBar, Scaffold, Page } from "../../components";
import { AccountButton, Branding, EventCard } from "../../fragments";
import { IconLocationEdit, IconPreloader } from "../../components/icons";
import { useOutlet } from "react-router-dom";
import { FirebaseContext } from "../../contexts/firebase";
import { groupData } from "../../helpers";
import { where } from "firebase/firestore";

export default function PageHome() {
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // Today date in YYYYMMDD string
  const { user } = React.useContext<any>(FirebaseContext);
  const [groupedEvents, setGroupedEvents] = React.useState({});
  const [city, setCity] = React.useState("Greater Noida");

  const queries = [
    where("active", "==", true),
    where("acceptingRegistrations", "==", true),
    where("startDate", ">=", today),
  ];
  const [events, loading, error] = useEvents(queries);

  React.useEffect(() => {
    if (events) {
      setGroupedEvents(groupData(events, "Category"));
    }
  }, [events]);
  const outlet = useOutlet();
  window.document.title = "Pandaal: An Event Ecosystem";

  return (
    <Scaffold
      appBar={
        <AppBar
          background="material"
          padding={6}
          leading={<Branding />}
          actions={<AccountButton />}
          className="max-w-[100vw] overflow-hidden"
        />
      }
      overlay={outlet}
      leading={
        <div className="flex flex-col p-6 gap-2">
          <p>Hey {`${user?.displayName.split(" ")[0] ?? "Wanderer"}`}</p>
          <p className="text-2xl font-bold">
            Showing all the getaway spots near
          </p>
          <div className="flex text-2xl font-bold p-4 rounded-2xl transition-colors hover:bg-secondary-50 text-secondary-500 fill-secondary-500">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent select-hide-arrow"
            >
              <option value="Greater Noida">Greater Noida</option>
              <option value="Delhi">Delhi</option>
              <option value="Lucknow">Lucknow</option>
            </select>
            <IconLocationEdit className="w-8 h-8" />
          </div>
        </div>
      }
    >
      <Page padding={0}>
        {loading ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <IconPreloader className="w-8 h-8 stroke-gray-500" />
          </div>
        ) : (
          Object.keys(groupedEvents).map((category, index) => {
            if (
              groupedEvents[category].filter(
                (e) => e.City == city || e.City == ""
              ).length > 0
            )
              return (
                <div
                  key={index}
                  className="flex flex-col w-screen overflow-hidden items-stretch"
                >
                  <p className="p-6 pb-0">{category}</p>
                  <div className="flex w-screen p-6 gap-6 overflow-hidden hover:overflow-scroll">
                    {groupedEvents[category].map((event, index) => {
                      return (
                        <EventCard
                          event={event}
                          key={event.id}
                          hover
                          details
                          navigateOnClick
                        />
                      );
                    })}
                  </div>
                </div>
              );
          })
        )}
      </Page>
    </Scaffold>
  );
}

// Padding icons account page
