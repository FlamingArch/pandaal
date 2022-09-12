import { Navigation, ion, Page } from "../components";
import { AppSidebar, AppHead } from "../fragments";
import PageBookings from "./bookings";
import PageFavourites from "./favourites";
import PageNotifications from "./notifications";
import PageHome from "./_home";

export default function Home() {
  return (
    <Navigation.Controller>
      <AppHead />
      <Page appBar={<AppSidebar />}>
        <Navigation.View>
          <PageHome />
          <PageFavourites />
          <PageBookings />
          <PageNotifications />
        </Navigation.View>
      </Page>
    </Navigation.Controller>
  );
}
