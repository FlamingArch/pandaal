import { getLongDate } from ".";

export default function (event: any) {
  return `
        ${event?.startDate ? getLongDate(event?.startDate) : ""}
        ${event?.startTime ? event?.startTime : ""}
        ${event?.endDate || (event?.endTime && "to")}
        ${event?.endDate ? getLongDate(event?.endDate) : ""}
        ${event?.endTime ? event?.endTime : ""}
        `;
}
