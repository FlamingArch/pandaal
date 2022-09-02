import {
  IconBookings,
  IconFavorites,
  IconHome,
  IconNotifications,
} from "../components/Icons";
import { NavigationItem, NavigationSelector } from "../components/Navigation";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <Logo />
      <NavigationSelector>
        <NavigationItem active={true} Icon={IconHome} label="Home" />
        <NavigationItem Icon={IconFavorites} label="Favourites" />
        <NavigationItem Icon={IconBookings} label="Bookings" />
        <NavigationItem Icon={IconNotifications} label="Notifications" />
      </NavigationSelector>
    </div>
  );
};
export default Sidebar;
