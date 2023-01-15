import { Parser } from "html-to-react";

const parser = new Parser();

export default function (html) {
  return parser.parse(html);
}
