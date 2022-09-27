import { Navigation, Scaffold, Modal, Button } from "../components";
import FirebaseIntegration from "../components/Firebase";
import { AppHead } from "../fragments";
import PageBookings from "./bookings";
import PageFavourites from "./favourites";
import PageNotifications from "./notifications";
import PageHome from "./_home";
import PageNewEvent from "./newevent";
import Logo from "../fragments/Logo";
import { useRef, useState } from "react";
import {
  IconAdd,
  IconBookings,
  IconFavorites,
  IconHome,
  IconNotifications,
} from "../components/Icons";

const navigationItems = [
  {
    icon: IconHome,
    label: "Home",
  },
  {
    icon: IconFavorites,
    label: "Favourites",
  },
  {
    icon: IconBookings,
    label: "Bookings",
  },
  {
    icon: IconNotifications,
    label: "Notifications",
  },
];

export default function Home() {
  const [newScreenVisible, setNewScreenVisible] = useState(false);
  const scaffoldRef = useRef(null);

  return (
    <FirebaseIntegration.Provider>
      <Navigation.Controller>
        <AppHead />
        <Scaffold
          modalPresented={newScreenVisible}
          navigationBar={<Navigation.Bar items={navigationItems} />}
          branding={<Logo.Text className="m-6 mb-0 hidden-mobile" />}
          primaryCTA={
            <Button
              onClick={() => setNewScreenVisible(true)}
              className="hidden-mobile"
            />
          }
        >
          <Navigation.View>
            <PageHome
              actionButton={
                <Button
                  onClick={() => setNewScreenVisible(true)}
                  className="hidden-desktop"
                />
              }
            />
            <PageFavourites />
            <PageBookings />
            <PageNotifications />
          </Navigation.View>
        </Scaffold>
        <Modal isPresented={newScreenVisible} parentRef={scaffoldRef}>
          <PageNewEvent backFunction={() => setNewScreenVisible(false)} />
        </Modal>
      </Navigation.Controller>
    </FirebaseIntegration.Provider>
  );
}
