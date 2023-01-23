import React from "react";
import { useEvents, useUserDoc } from "../../hooks";
import { AppBar, Scaffold, Page } from "../../components";
import { AccountButton, Branding, EventCard } from "../../fragments";
import { IconLocationEdit, IconPreloader } from "../../components/icons";
import { useOutlet } from "react-router-dom";
import { FirebaseContext } from "../../contexts/firebase";
import { groupData } from "../../helpers";

export default function PageHome() {
  const { user } = React.useContext<any>(FirebaseContext);
  const [events, loading, error] = useEvents();
  const [groupedEvents, setGroupedEvents] = React.useState({});

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
          <p>Hey {`${user?.displayName.split(" ")[0] ?? "Wandrer"}`}</p>
          <p className="text-2xl font-bold">
            Showing all the getaway spots near
          </p>
          <p className="flex text-2xl font-bold p-4 rounded-2xl transition-colors hover:bg-secondary-50 text-secondary-500 fill-secondary-500">
            Greater Noida <IconLocationEdit className="w-8 h-8" />
          </p>
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
            return (
              <div
                key={index}
                className="flex flex-col w-screen overflow-hidden items-stretch"
              >
                <p className="p-6 pb-0">{category}</p>
                <div className="flex w-screen p-6 gap-6 overflow-hidden hover:overflow-scroll">
                  {groupedEvents[category].map((event, index) => (
                    <EventCard
                      event={event}
                      key={event.id}
                      hover
                      details
                      navigateOnClick
                    />
                  ))}
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
