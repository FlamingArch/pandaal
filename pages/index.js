import { Tab, Page } from "../components";
import { AppSidebar, AppHead } from "../fragments";
import PageBookings from "./bookings";
import PageFavourites from "./favourites";
import PageNotifications from "./notifications";
import PageHome from "./_home";

export default function Home() {
  return (
    <Tab.Controller>
      <AppHead />
      <Page appBar={<AppSidebar />}>
        <Tab.View>
          <PageHome />
          <PageFavourites />
          <PageBookings />
          <PageNotifications />
        </Tab.View>
      </Page>
    </Tab.Controller>
  );
}
