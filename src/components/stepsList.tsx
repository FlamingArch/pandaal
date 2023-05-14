type StepsListProps = {
  activeIndex: number;
  elements: string[];
  className?: string;
};

export default function StepsList({
  activeIndex,
  elements,
  className,
}: StepsListProps) {
  return (
    <ul className={"steps responsive stick top-0 overflow-scroll " + className}>
      {elements.map((e, i) => {
        let className =
          activeIndex == i ? "active" : i < activeIndex ? "complete" : "";

        return <li className={className}>{e}</li>;
      })}
    </ul>
  );
}
