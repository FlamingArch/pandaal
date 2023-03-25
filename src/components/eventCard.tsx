import Text from "./text";

export default function EventCard({ event }: { event: any }) {
  return (
    <div
      key={event.id}
      className="flex flex-col hover:bg-primary-50 rounded-3xl w-fit cursor-pointer"
    >
      <img src={event.bannerURL} className="w-40 rounded-2xl" />
      <div key={event.id} className="p-4 flex flex-col w-32 gap-1">
        <Text headingLevel={0.5}>{event.Title}</Text>
        <p>{event.offlineLocationAddress || event.onlinePlatform}</p>
      </div>
    </div>
  );
}
