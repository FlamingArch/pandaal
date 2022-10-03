import Image from "next/image";
import { useContext } from "react";
import FirebaseIntegration from "../fragments/Firebase";
import { List, Page } from "../legacy/components";
import nonotif from "../res/no-notif.svg";

const PageNotificationsEmptyBanner = () => {
  return (
    <section className="flex flex-col-reverse p-6 pt-[20vh] text-center">
      <p className="text-xl font-bold">You Have No New Notifications</p>
      <Image src={nonotif} alt="" className="h-[50vh] scale-75 aspect-square" />
    </section>
  );
};

const PageNotifications = () => {
  const Firebase = useContext(FirebaseIntegration.Context);

  return (
    <Page>
      <List.View>
        <List.Heading>Notifications</List.Heading>
        {Firebase.authentication.user ? (
          <PageNotificationsEmptyBanner />
        ) : (
          <>
            <div className="grid flex-grow w-full gap-4 p-12 place-content-center place-items-center">
              <Image
                src={nonotif}
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
    </Page>
  );
};

export default PageNotifications;
