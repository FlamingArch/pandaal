export default function convertToTextDate(date: string) {
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
