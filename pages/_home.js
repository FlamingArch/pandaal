import { useContext, useState } from "react";
import { IconLocationEdit } from "../legacy/components/Icons";
import { AppBar, EventCard, List, Page } from "../legacy/components";
import FirebaseIntegration from "../fragments/Firebase";

const PageHome = ({ actionButton }) => {
  const [events, setEvents] = useState({
    "In Your City": [1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => ({
      date: "Mon, 26 Sep 2022,",
      title: "The Ultimate Battle Royal in VR",
      image: "https://source.unsplash.com/random",
      address: "Greater Noida",
    })),
    Online: [1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => ({
      date: "Mon, 26 Sep 2022,",
      title: "The Ultimate Battle Royal in VR",
      image: "https://source.unsplash.com/random",
      address: "Greater Noida",
    })),
    "Gaming Tournaments": [1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => ({
      date: "Mon, 26 Sep 2022,",
      title: "The Ultimate Battle Royal in VR",
      image: "https://source.unsplash.com/random",
      address: "Greater Noida",
    })),
    Workshops: [1, 2].map((_, i) => ({
      date: "Mon, 26 Sep 2022,",
      title: "The Ultimate Battle Royal in VR",
      image: "https://source.unsplash.com/random",
      address: "Greater Noida",
    })),
  });

  const Firebase = useContext(FirebaseIntegration.Context);

  if (Firebase.events.loading) {
    return "Loading events";
  }

  if (Firebase.events.error) {
    return "Error loading events";
  }

  const Sections = {};
  Firebase.events.snapshot.forEach((element) => {
    if (Sections[element.category] == undefined) {
      Sections[element.category] = [element];
    }
    Sections[element.Category] = [Sections[element.Category], element].flat();
  });

  console.log(Sections);

  return (
    <Page
      appbar={
        <AppBar heading="Home">
          <div className="grid w-12 h-12 bg-indigo-600 rounded-full aspect-square place-content-center">
            H
          </div>
        </AppBar>
      }
      actionButton={actionButton}
      paddingBottom={10}
    >
      <List.View gap={2}>
        <List.Section heading="Hey Harsh,">
          <p className="text-4xl font-bold">
            Showing all the getaway spots near
          </p>
          <div className="flex p-4 text-4xl font-bold text-pink-600 transition-colors duration-300 cursor-pointer rounded-3xl w-fit hover:bg-pink-50 dark:hover:bg-pink-900">
            Greater Noida
            <IconLocationEdit className="w-12 h-12 fill-pink-600" />
          </div>
        </List.Section>

        {Object.keys(events).map((title, i) => (
          <List.Section gap={1.5} key={i} heading={title} orientation="row">
            {events[title].map((e, i) => (
              <EventCard key={i} {...e} />
            ))}
          </List.Section>
        ))}
      </List.View>
    </Page>
  );
};

export default PageHome;
