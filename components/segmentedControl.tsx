type SegmentedControlProps = {
  values: string[];
  selected: string;
  onChange: (value: string) => void;
};

type SegmentedControlElementProps = {
  value: string;
  selected: boolean;
  onClick: (value: string) => void;
};

function SegmentedControlElement(props: SegmentedControlElementProps) {
  return (
    <div
      className={
        "flex-grow grid place-content-center rounded-xl transition-all  " +
        (props.selected
          ? "bg-white shadow-lg p-2 px-12"
          : "m-2 px-10 cursor-pointer")
      }
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </div>
  );
}

export default function SegmentedControl(props: SegmentedControlProps) {
  return (
    <div className="bg-primary-50 bg-opacity-60 backdrop-blur-xl backdrop-saturate-200 p-1 gap-2 flex rounded-2xl items-center">
      {props.values.map((value) => (
        <SegmentedControlElement
          value={value}
          selected={value === props.selected}
          onClick={props.onChange}
          key={value}
        />
      ))}
    </div>
  );
}
