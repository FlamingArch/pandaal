type StepsListProps = {
  activeIndex: number;
  elements: string[];
  className?: string;
  responsive?: boolean;
};

export default function StepsList({
  activeIndex,
  elements,
  className,
  responsive,
}: StepsListProps) {
  return (
    <ul
      className={
        "steps max-w-[90vw] overflow-scroll " +
        (responsive ? "responsive " : "") +
        className
      }
    >
      {elements.map((e, i) => {
        let className =
          activeIndex == i ? "active" : i < activeIndex ? "complete" : "";

        return (
          <li key={i} className={className}>
            {e}
          </li>
        );
      })}
    </ul>
  );
}
