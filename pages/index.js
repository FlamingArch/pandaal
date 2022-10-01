import { AppHead } from "../fragments";
import PageBookings from "./bookings";
import PageFavourites from "./favourites";
import PageNotifications from "./notifications";
import PageHome from "./_home";
import PageNewEvent from "./newevent";
import Logo from "../fragments/Logo";
import { useRef, useState } from "react";

import { Scaffold, Navigation } from "../components";

import {
  IconAdd,
  IconBookings,
  IconFavorites,
  IconHome,
  IconNotifications,
} from "../legacy/components/Icons";
import FirebaseIntegration from "../fragments/Firebase";
import { Modal } from "../legacy/components";

export default function Home() {
  const [newScreenVisible, setNewScreenVisible] = useState(false);
  const scaffoldRef = useRef(null);
  const actionButton = (
    <div
      className="flex gap-2 px-4 py-3 text-white transition-colors rounded-full shadow-xl cursor-pointer hover:bg-primary-light place-items-center bg-primary transition-200 hidden-desktop"
      onClick={() => setNewScreenVisible(true)}
    >
      <IconAdd className="w-6 h-6 fill-white" />
      New Event
    </div>
  );
  const actionButtonDesktop = (
    <div
      className="flex gap-2 px-4 py-3 text-white transition-colors rounded-full shadow-xl cursor-pointer hover:bg-primary-light place-items-center bg-primary transition-200 hidden-mobile"
      onClick={() => setNewScreenVisible(true)}
    >
      <IconAdd className="w-6 h-6 fill-white" />
      New Event
    </div>
  );

  return (
    <Navigation.Provider>
      <FirebaseIntegration.Provider>
        <AppHead />
        <Scaffold
          logo={<Logo.Text className="hidden-mobile" />}
          dim={newScreenVisible}
          leading={actionButtonDesktop}
          middle={
            <Navigation.Bar style="navigation">
              <Navigation.Item Icon={IconHome} label="Home" />
              <Navigation.Item Icon={IconFavorites} label="Favourites" />
              <Navigation.Item Icon={IconBookings} label="Bookings" />
              <Navigation.Item Icon={IconNotifications} label="Notifications" />
            </Navigation.Bar>
          }
        >
          <Navigation.View>
            <PageHome actionButton={actionButton} />
            <PageFavourites />
            <PageBookings />
            <PageNotifications />
          </Navigation.View>
        </Scaffold>
        <Modal isPresented={newScreenVisible}>
          <PageNewEvent backFunction={() => setNewScreenVisible(false)} />
        </Modal>
      </FirebaseIntegration.Provider>
    </Navigation.Provider>
  );
}
