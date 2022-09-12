import Image from "next/image";
import { List } from "../components";
import nonotif from "../res/no-notif.svg";

const PageNotificationsEmptyBanner = () => {
  return (
    <section className="flex flex-col-reverse p-6 pt-[20vh] text-center">
      <p className="text-xl font-bold">You Have No New Notifications</p>
      <Image src={nonotif} alt="" className="h-[50vh] scale-75 aspect-square" />
    </section>
  );
};

const PageNotifications = () => {
  return (
    <List.View>
      <List.Heading>Notifications</List.Heading>
      <PageNotificationsEmptyBanner />
    </List.View>
  );
};

export default PageNotifications;
