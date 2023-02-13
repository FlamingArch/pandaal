import { IconFavouriteFill, IconHomeFill, IconNotificationsFill, IconTicketFill, IconUser } from "@/components/icons";
import { Poppins } from "@next/font/google";
import Link from "next/link";

const font = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={font.className}>
      <header className="flex items-center justify-between p-6 backdrop-blur-xl backdrop-saturate-200 bg-white bg-opacity-60 sticky top-0">
        <Link
          href="/"
          className="text-primary-500 hover:text-primary-700 font-bold text-xl cursor-pointer transition-colors"
        >
          pandaal
        </Link>
        <Link
          href="/signin"
          className="bg-primary-500 fill-white text-white p-3 rounded-xl flex gap-2 hover:bg-primary-600 transition-colors"
        >
          <IconUser className="w-6 h-6" />
          <p>Sign In</p>
        </Link>
      </header>
      <div className="flex">
        <nav className="m-6 mx-12 md:ml-6 md:m-0 p-4 flex md:flex-col rounded-full md:rounded-3xl bg-primary-50 fixed bottom-0 left-0 right-0 md:static gap-4 justify-around md:justify-start h-fit md:gap-0 md:w-[192px]">
          <Link href={"/home"} className="flex gap-3 p-2 items-center">
            <IconHomeFill className="w-8 h-8" />
            <p className="hidden md:flex">Events</p>
          </Link>
          <Link href={"/bookings"} className="flex gap-3 p-2 items-center">
            <IconTicketFill className="w-8 h-8" />
            <p className="hidden md:flex">Bookings</p>
          </Link>
          <Link href={"/favourites"} className="flex gap-3 p-2 items-center">
            <IconFavouriteFill className="w-8 h-8" />
            <p className="hidden md:flex">Favourites</p>
          </Link>
          <Link href={"/notifications"} className="flex gap-3 p-2 items-center">
            <IconNotificationsFill className="w-8 h-8" />
            <p className="hidden md:flex">Notifications</p>
          </Link>
        </nav>
        <div className="flex-grow pb-24 md:pb-0">{children}</div>
      </div>
    </div>
  );
}
