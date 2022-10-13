import React from "react";
import _ from "lodash";

const LimitedParagraph = ({ children, heading, limit }) => {
  const [descriptionExpanded, setDescriptionExpanded] = React.useState(false);
  return (
    <div>
      <div className="text-2xl">{heading || "Event Description"}</div>
      <p>
        {descriptionExpanded
          ? children
          : _.truncate(children, { length: limit || 300 })}
      </p>
      <button
        className="text-primary font-bold uppercase hover:text-primarylight transition-colors"
        onClick={() => setDescriptionExpanded(!descriptionExpanded)}
      >
        Read {descriptionExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default LimitedParagraph;
