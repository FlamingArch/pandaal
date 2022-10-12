import _ from "lodash";

export default function (str) {
  const year = _.toInteger(`${str.slice(0, 4)}`);
  const month = _.toInteger(`${str.slice(4, 6)}`) - 1;
  const date = _.toInteger(`${str.slice(6, 8)}`);
  return new Date(year, month, date);
}
