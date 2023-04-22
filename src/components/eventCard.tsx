import _ from "lodash";

function convertToTextDate(date: string) {
  const year = date.slice(0, 4);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][Number.parseInt(date.slice(4, 6)) - 1].slice(0, 3);
  const day = date.slice(6, 8);
  return `${month} ${day}, ${year}`;
}

export default function EventCard({ event }: { event: any }) {
  return (
    <div
      key={event.id}
      className="flex flex-col hover:bg-primary-50 rounded-3xl cursor-pointer w-40"
    >
      <img
        src={event.bannerURL}
        className="aspect-[9/12] object-cover rounded-3xl"
      />
      <div key={event.id} className="p-4 flex flex-col gap-1">
        <p style={{ maxLines: 2 }} className="font-medium text-lg">
          {event.Title}
        </p>
        <p className="font-medium">
          {event.offlineLocationAddress || event.onlinePlatform}
        </p>
        <p className="">{convertToTextDate(event.startDate)}</p>
      </div>
    </div>
  );
}
