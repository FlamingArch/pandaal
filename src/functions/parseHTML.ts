import ReactHTMLParser from "react-html-parser";

export default function parseHTML(html: string) {
  return ReactHTMLParser(html);
}
