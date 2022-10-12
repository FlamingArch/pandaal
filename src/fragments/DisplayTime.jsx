import { IconClock } from "../components/Icons";
import { intToDay, intToDateObject, intToMonth } from "../helpers";

const TimeDisplay = ({ event }) => {
  const dateObjectStart = event.startDate
    ? intToDateObject(event.startDate)
    : undefined;

  const dateObjectEnd = event.endDate
    ? intToDateObject(event.endDate)
    : undefined;

  return (
    <div className="flex gap-2 items-center">
      <IconClock className="w-6 h-6 fill-primary" />
      <div className="flex flex-col">
        <p className="text-slate-700">Start Time</p>
        <p className="text-red-800 uppercase">{`${
          dateObjectStart &&
          `${intToDay(
            dateObjectStart.getDay()
          )} ${dateObjectStart.getDate()} ${intToMonth(
            dateObjectStart.getMonth()
          )} ${dateObjectStart.getFullYear()}
        `
        } ${event.startTime && event.startTime} ${
          event.endDate || event.endTime ? "to" : ""
        }  ${
          dateObjectEnd
            ? `${intToDay(
                dateObjectEnd.getDay()
              )} ${dateObjectEnd.getDate()} ${intToMonth(
                dateObjectEnd.getMonth()
              )} ${dateObjectEnd.getFullYear()}
        `
            : ""
        } ${event.endTime ? event.endTime : ""}`}</p>
      </div>
    </div>
  );
};

export default TimeDisplay;
