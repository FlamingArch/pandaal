import {
  IconBookings,
  IconFavorites,
  IconHome,
  IconNotifications,
} from "../components/Icons";
import Tab from "../components/Tab";

export default function Home() {
  return (
    <Tab.Controller>
      <Tab.Bar
        items={[
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
        ]}
      />
      <Tab.View>
        <h1>Home</h1>
        <h1>Favourites</h1>
        <h1>Bookings</h1>
        <h1>Notifications</h1>
      </Tab.View>
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
