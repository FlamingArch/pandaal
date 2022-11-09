import React from "react";

const Text = ({
  children,
  bold,
  headingLevel,
  accented,
  dimmed,
}: {
  children: React.ReactNode;
  bold?: boolean;
  headingLevel?: number;
  accented?: boolean;
  dimmed?: boolean;
}) => {
  function getTextSize() {
    switch (headingLevel) {
      case 1:
        return "3rem";
      case 2:
        return "2.25rem";
      case 3:
        return "1.75rem";
      case 4:
        return "1.5rem";
      case 5:
        return "1.25rem";
      case 6:
        return "1.125rem";
      default:
        return "1rem";
    }
  }

  function getFontWeight() {
    if (bold) {
      return 700;
    }
    switch (headingLevel) {
      case 1:
        return 100;
      case 2:
        return 200;
      case 3:
        return 300;
      case 4:
        return 300;
      case 5:
        return 300;
      case 6:
        return 400;
      default:
        return 400;
    }
  }

  return (
    <p
      style={{
        fontSize: getTextSize(),
        fontWeight: getFontWeight(),
        // TODO: Add support for accented and dimmed
        // color: accented && "#3F4882",
        // opacity: dimmed && "0.64",
      }}
    >
      {children}
    </p>
  );
};

export default Text;
