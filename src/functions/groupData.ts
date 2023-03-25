export default function groupData(events: any, key: any) {
  let grouped: any = {};
  events.forEach((item: any) => {
    if (grouped[item[key]]) {
      grouped[item[key]] = [...grouped[item[key]], item];
    } else {
      grouped[item[key]] = [item];
    }
  });
  return grouped;
}
