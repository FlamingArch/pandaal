import React from "react";
import _ from "lodash";
import Text from "./text";
import { parseHTML } from "../helpers";

const LimitedParagraph = ({
  children,
  heading,
  limit = 100,
}) => {
  const [descriptionExpanded, setDescriptionExpanded] = React.useState(false);
  return (
    <div>
      {heading && <Text headingLevel={4}>{heading}</Text>}
      <div className="h-4"></div>
      <p>
        {descriptionExpanded
          ? parseHTML(children)
          : parseHTML(_.truncate(children, { length: limit ?? 300 }))}
      </p>
      {parseHTML(children).length >= limit && (
        <button
          className="text-primary-400 font-medium uppercase hover:text-primary-300 transition-colors"
          onClick={() => setDescriptionExpanded(!descriptionExpanded)}
        >
          Read {descriptionExpanded ? "Less" : "More"}
        </button>
      )}
    </div>
  );
};

export default LimitedParagraph;
