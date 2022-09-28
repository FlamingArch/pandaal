import { AppHead } from "../fragments";
import PageBookings from "./bookings";
import PageFavourites from "./favourites";
import PageNotifications from "./notifications";
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
    <Navigation.Provider>
      <AppHead />
      <Scaffold
        logo={<Logo.Text />}
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
          <PageNewEvent />
          <PageFavourites />
          <PageBookings />
          <PageNotifications />
        </Navigation.View>
      </Scaffold>
    </Navigation.Provider>
  );
}
