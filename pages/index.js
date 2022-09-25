import { Navigation, Scaffold } from "../components";
import FirebaseIntegration from "../components/Firebase";
import { AppHead } from "../fragments";
import PageBookings from "./bookings";
import PageFavourites from "./favourites";
import PageNotifications from "./notifications";
import PageHome from "./_home";
import Logo from "../fragments/Logo";
import {
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
  return (
    <FirebaseIntegration.Provider>
      <Navigation.Controller>
        <AppHead />
        <Scaffold
          navigationBar={<Navigation.Bar items={navigationItems} />}
          branding={<Logo className="m-6 mb-0 hidden-mobile" />}
          primaryCTA={
            <div className="p-4 mt-4 mr-4 text-lg font-bold text-center text-white transition duration-200 ease-in-out bg-blue-500 rounded cursor-pointer hidden-mobile full hover:bg-blue-600">
              Create New Event
            </div>
          }
        >
          <Navigation.View>
            <PageHome />
            <PageFavourites />
            <PageBookings />
            <PageNotifications />
          </Navigation.View>
        </Scaffold>
      </Navigation.Controller>
    </FirebaseIntegration.Provider>
  );
}
