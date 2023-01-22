import { getDayFromNumber, getMonthFromNumber } from ".";

export default function getLongDate(val: string) {
  const year = val.slice(0, 4);
  const month = val.slice(4, 6);
  const day = val.slice(6, 8);

  const dateObject = new Date(Number(year), Number(month) - 1, Number(day));

  return `${getDayFromNumber(dateObject.getDay())} ${getMonthFromNumber(
    dateObject.getMonth()
  )} ${day}, ${year}`;
}
