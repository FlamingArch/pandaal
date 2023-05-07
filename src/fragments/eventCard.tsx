import { useNavigate } from "@tanstack/router";
import _ from "lodash";
import { convertToTextDate } from "../functions";

export default function EventCard({ event }: { event: any }) {
  const navigate = useNavigate({ from: "/" });

  return (
    <div
      key={event.id}
      onClick={() =>
        navigate({
          to: `$eventId`,
          params: {
            eventId: event.id,
          },
        })
      }
      className="flex flex-col hover:bg-primary-50 rounded-3xl cursor-pointer w-40 hover:scale-105 transition"
    >
      <img
        src={event.bannerURL}
        className="aspect-[9/12] object-cover rounded-3xl"
      />
      <div key={event.id} className="p-4 flex flex-col gap-1">
        <p
          // TODO: FIX: Limit lines to 2
          style={{
            lineClamp: 2,
            WebkitLineClamp: 2,
            textOverflow: "ellipsis",
            WebkitBoxOrient: "vertical",
            boxOrient: "vertical",
            maxLines: 2,
          }}
          className="font-medium text-lg overflow-hidden"
        >
          {event.Title}
        </p>
        <p className="font-medium text-sm">
          {event.offlineLocationAddress || event.onlinePlatform}
        </p>
        <p className="text-sm">{convertToTextDate(event.startDate)}</p>
        <p className="text-sm font-bold text-primary-500">
          {event.price == 0 ? "Free" : "Rs. " + event.price}
        </p>
      </div>
    </div>
  );
}
