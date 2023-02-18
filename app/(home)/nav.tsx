"use client";

import Link from "next/link";
import {
  IconFavouriteFill,
  IconHomeFill,
  IconNotificationsFill,
  IconTicketFill,
} from "@/components/icons";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="m-6 backdrop-blur-xl backdrop-saturate-200 bg-opacity-80 mx-12 md:ml-6 md:m-0 p-4 flex md:flex-col rounded-full md:rounded-3xl bg-primary-50 fixed md:sticky md:top-[6rem] bottom-0 left-0 right-0 gap-4 justify-around md:justify-start h-fit md:gap-0 md:w-[192px]">
      <Link
        href={"/home"}
        className={
          "flex gap-3 p-2 items-center " +
          (pathname == "/home"
            ? "text-primary-500 fill-primary-500 animate-jump"
            : "text-gray-700 fill-gray-700")
        }
      >
        <IconHomeFill className="w-8 h-8" />
        <p className="hidden md:flex">Events</p>
      </Link>
      <Link
        href={"/bookings"}
        className={
          "flex gap-3 p-2 items-center " +
          (pathname == "/bookings"
            ? "text-primary-500 fill-primary-500 animate-jump"
            : "text-gray-700 fill-gray-700")
        }
      >
        <IconTicketFill className="w-8 h-8" />
        <p className="hidden md:flex">Bookings</p>
      </Link>
      <Link
        href={"/favourites"}
        className={
          "flex gap-3 p-2 items-center " +
          (pathname == "/favourites"
            ? "text-primary-500 fill-primary-500 animate-jump"
            : "text-gray-700 fill-gray-700")
        }
      >
        <IconFavouriteFill className="w-8 h-8" />
        <p className="hidden md:flex">Favourites</p>
      </Link>
      <Link
        href={"/notifications"}
        className={
          "flex gap-3 p-2 items-center " +
          (pathname == "/notifications"
            ? "text-primary-500 fill-primary-500 animate-jump"
            : "text-gray-700 fill-gray-700")
        }
      >
        <IconNotificationsFill className="w-8 h-8" />
        <p className="hidden md:flex">Notifications</p>
      </Link>
    </nav>
  );
}
