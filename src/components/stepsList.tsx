export default function StepsList({
  activeIndex,
  elements,
}: {
  activeIndex: number;
  elements: string[];
}) {
  return (
    <ul className="steps responsive stick top-0">
      {elements.map((e, i) => {
        let className =
          activeIndex == i ? "active" : i < activeIndex ? "complete" : "";

        return <li className={className}>{e}</li>;
      })}
    </ul>
  );
}
