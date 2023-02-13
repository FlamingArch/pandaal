export default function groupData(events, key) {
  let grouped = {};
  events.forEach((item) => {
    if (grouped[item[key]]) {
      grouped[item[key]] = [...grouped[item[key]], item];
    } else {
      grouped[item[key]] = [item];
    }
  });
  return grouped;
}
