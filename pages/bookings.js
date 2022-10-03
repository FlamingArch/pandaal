import Image from "next/image";
import FirebaseIntegration from "../fragments/Firebase";
import { List, Page } from "../legacy/components";
import { Tab } from "../legacy/components";
import illustration from "../res/events.svg";
import { useContext } from "react";
import SignIn from "./signin";

const PageBookings = ({ setPage }) => {
  const Firebase = useContext(FirebaseIntegration.Context);
  return (
    <Page>
      <Tab.Provider>
        <List.View>
          <List.Heading>Booking History</List.Heading>
          {Firebase.authentication.auth ? (
            <>
              <Tab.Bar items={["Upcoming", "Older"]} />
              <Tab.View>
                <section className="flex flex-col p-6 pt-[20vh] text-center">
                  <Image
                    src={illustration}
                    alt=""
                    className="h-[50vmin] scale-75 aspect-square"
                  />
                  <p className="text-xl font-bold center">
                    No upcoming bookings.
                  </p>
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
            </>
          ) : (
            <>
              <div className="grid flex-grow w-full gap-4 p-12 place-content-center place-items-center">
                <Image
                  src={illustration}
                  alt=""
                  style={{ width: "clamp(48px, 50%, 256px)" }}
                  className="max-w-4xl scale-75 md:scale-75 aspect-square"
                />
                Sign in to view your bookings.
                <div
                  onClick={() => setPage(<SignIn />)}
                  className="px-12 py-3 text-center text-white cursor-pointer w-fit rounded-xl bg-primary"
                >
                  Sign In
                </div>
              </div>
            </>
          )}
        </List.View>
      </Tab.Provider>
    </Page>
  );
};

export default PageBookings;
