type SpacerProps = {
  minHeight?: number;
};

export default function Spacer(props: SpacerProps) {
  return (
    <div
      style={{
        minHeight: `${(props.minHeight ?? 0) / 4}rem`,
      }}
      className="flex-grow"
    >
      <div />
    </div>
  );
}
