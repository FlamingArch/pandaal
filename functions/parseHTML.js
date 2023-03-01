import { Parser } from "html-to-react";

export default function parseHTML(html) {
  return Parser().parse(html);
}
