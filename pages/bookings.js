import Image from "next/image";
import { List, Page } from "../components";
import { Tab } from "../components";
import illustration from "../res/events.svg";

const PageBookings = () => {
  return (
    <Page>
      <Tab.Provider>
        <List.View>
          <List.Heading>Booking History</List.Heading>
          <Tab.Bar items={["Upcoming", "Older"]} />
          <Tab.View>
            <section className="flex flex-col p-6 pt-[20vh] text-center">
              <Image
                src={illustration}
                alt=""
                className="h-[50vh] scale-75 aspect-square"
              />
              <p className="text-xl font-bold center">No upcoming bookings.</p>
              <p className="text-xl center">
                You {"don't"} have any upcoming bookings.
              </p>
            </section>
            <section className="flex flex-col p-6 pt-[20vh] text-center">
              <Image
                src={illustration}
                alt=""
                className="h-[50vh] scale-75 aspect-square"
              />
              <p className="text-xl font-bold center">No older bookings.</p>
              <p className="text-xl center">
                You {"don't"} have any older bookings.
              </p>
            </section>
          </Tab.View>
        </List.View>
      </Tab.Provider>
    </Page>
  );
};

export default PageBookings;
