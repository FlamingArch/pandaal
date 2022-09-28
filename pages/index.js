import { Navigation, Modal, Button } from "../legacy/components";
import FirebaseIntegration from "../fragments/Firebase";
import { AppHead } from "../fragments";
import PageBookings from "./bookings";
import PageFavourites from "./favourites";
import PageNotifications from "./notifications";
import PageHome from "./_home";
import PageNewEvent from "./newevent";
import Logo from "../fragments/Logo";
import { useRef, useState } from "react";

import { Scaffold } from "../components";

import {
  IconAdd,
  IconBookings,
  IconFavorites,
  IconHome,
  IconNotifications,
} from "../legacy/components/Icons";

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
    <>
      <AppHead />
      <Scaffold></Scaffold>
    </>
  );
}
