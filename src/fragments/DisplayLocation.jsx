import { IconStreaming } from "../components/Icons";

const LocationDisplay = ({ event }) => {
  return (
    <div className="flex flex-row gap-1">
      {event.onOff == 1 ? (
        <IconStreaming className="fill-primary w-6 h-6" />
      ) : (
        <IconLocation className="fill-primary w-6 h-6" />
      )}
      <div className="text-slate-700">
        {event.onOff == 1 ? event.onlinePlatform : event.offlineLocationAddress}
      </div>
      <div className="text-primary">{event.location}</div>
    </div>
  );
};

export default LocationDisplay;
