import { Parser } from "html-to-react";

export default function (html) {
  return Parser().parse(html);
}
