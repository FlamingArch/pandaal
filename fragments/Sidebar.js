import {
  IconBookings,
  IconFavorites,
  IconHome,
  IconNotifications,
} from "../components/Icons";
import { Tab } from "../components";
import Logo from "./Logo";

const AppSidebar = () => {
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
  return (
    <div className="flex flex-col">
      <Logo className="hidden-mobile" />
      <Tab.Bar items={navigationItems} />
    </div>
  );
};

export default AppSidebar;
