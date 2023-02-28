import HideOnScroll from "@/components/hideOnScroll";
import BookingNavigationTabs from "./bookingNavigationTabs";

type PageLayoutBookingsProps = {
  children: React.ReactNode;
};

export default function PageLayoutBookings(props: PageLayoutBookingsProps) {
  return (
    <>
      <header className="px-6 flex flex-col gap-8 top-6 sticky pb-6">
        <HideOnScroll scrollDistance={64}>
          <h1 className="text-3xl font-bold z-20 mb-1">Bookings</h1>
        </HideOnScroll>
        <BookingNavigationTabs />
      </header>
      {props.children}
    </>
  );
}
