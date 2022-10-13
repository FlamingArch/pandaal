import React from "react";
import _ from "lodash";
import Text from "./Text";
import { parseHTML } from "../helpers";

const LimitedParagraph = ({ children, heading, limit }) => {
  const [descriptionExpanded, setDescriptionExpanded] = React.useState(false);
  return (
    <div>
      <Text headingLevel={4}>{heading || "Event Description"}</Text>
      <p>
        {descriptionExpanded
          ? parseHTML(children)
          : parseHTML(_.truncate(children, { length: limit || 300 }))}
      </p>
      <button
        className="text-primary-400 font-bold uppercase hover:text-primary-300 transition-colors"
        onClick={() => setDescriptionExpanded(!descriptionExpanded)}
      >
        Read {descriptionExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default LimitedParagraph;
