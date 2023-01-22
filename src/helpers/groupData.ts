export default function groupData(events, key) {
  let categorised = {};
  events.forEach((item) => {
    if (categorised[item[key]]) {
      categorised[item[key]] = [...categorised[item[key]], item];
    } else {
      categorised[item[key]] = [item];
    }
  });
  return categorised;
}
