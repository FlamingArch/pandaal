import {
  IconBookings,
  IconFavorites,
  IconHome,
  IconNotifications,
} from "../components/Icons";
import { Tab, Page } from "../components";
import { AppSidebar } from "../fragments";

export default function Home() {
  return (
    <Tab.Controller>
      <Page appBar={<AppSidebar />}>
        <Tab.View>
          <h1>Home</h1>
          <h1>Favourites</h1>
          <h1>Bookings</h1>
          <h1>Notifications</h1>
        </Tab.View>
      </Page>
    </Tab.Controller>
  );
}

// <>
//   <AppHead />
//   <div
//     className="grid w-screen h-screen overflow-hidden"
//     style={{ gridTemplateColumns: "auto 1fr" }}
//   >
//     <AppSidebar />
//     <PageHome />
//   </div>
// </>;
