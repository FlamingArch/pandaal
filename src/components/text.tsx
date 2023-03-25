type TextProps = {
  children: React.ReactNode;
  headingLevel?: 0 | 0.25 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
  accented?: boolean | string;
  dimmed?: boolean | number;
  className?: string;
};

function getTextSize(headingLevel: number | undefined) {
  if (headingLevel === undefined) {
    return null;
  }
  const level = `${headingLevel}`;
  return {
    "1": "text-6xl",
    "2": "text-5xl",
    "3": "text-4xl",
    "4": "text-3xl",
    "5": "text-2xl",
    "6": "text-xl",
    "0.5": "text-lg",
    "0.25": "text-base",
    "0": "text-sm",
  }[level];
}

function getAccentColor(accented: boolean | string | undefined) {
  if (typeof accented === "string") {
    return accented;
  }
  if (accented === true) {
    return "#3f4882";
  }
  return undefined;
}

function getDimmedValue(dimmed: boolean | number | undefined) {
  if (typeof dimmed === "number") {
    return dimmed;
  }
  if (dimmed === true) {
    return 0.75;
  }
  return undefined;
}

export default function Text(props: TextProps) {
  return (
    <div
      style={{
        color: getAccentColor(props.accented),
        opacity: getDimmedValue(props.dimmed),
      }}
      className={`${props.bold ? "font-bold" : null} ${getTextSize(
        props.headingLevel
      )} ${props.className}`}
    >
      {props.children}
    </div>
  );
}
