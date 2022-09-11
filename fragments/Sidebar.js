import {
  IconBookings,
  IconFavorites,
  IconHome,
  IconNotifications,
} from "../components/Icons";
import { Tab } from "../components";
import Logo from "./Logo";

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

const AppSidebar = () => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <Logo className="hidden-mobile" />
      <Tab.Bar items={navigationItems} />
    </div>
  );
};

export default AppSidebar;
