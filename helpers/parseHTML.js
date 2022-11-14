import { Parser } from "html-to-react";

const parser = new Parser();

export default function (html) {
  // console.log(`PARSING HTML: ${html}`);
  return parser.parse(html);
}
