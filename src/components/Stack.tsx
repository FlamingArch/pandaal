type StackProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "vertical" | "horizontal";
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  padding?:
    | number
    | { top?: number; bottom?: number; left?: number; right?: number };
  margin?:
    | number
    | { top?: number; bottom?: number; left?: number; right?: number };
  gap?: number;
};

export default function Stack(props: StackProps) {
  return (
    <div
      style={{
        padding:
          typeof props.padding == "number"
            ? `${(props.padding ?? 0) / 4}rem`
            : `${(props.padding?.top ?? 0) / 4}rem ${
                (props.padding?.right ?? 0) / 4
              }rem ${(props.padding?.bottom ?? 0) / 4}rem ${
                (props.padding?.left ?? 0) / 4
              }rem`,
        margin:
          typeof props.margin == "number"
            ? `${(props.margin ?? 0) / 4}rem`
            : `${(props.margin?.top ?? 0) / 4}rem ${
                (props.margin?.right ?? 0) / 4
              }rem ${(props.margin?.bottom ?? 0) / 4}rem ${
                (props.margin?.left ?? 0) / 4
              }rem`,
        gap: `${(props.gap ?? 0) / 4}rem`,
        ...props.style,
      }}
      className={`flex ${
        props.direction === "horizontal" ? "flex-row" : "flex-col"
      } ${props.className}`}
    >
      {props.children}
    </div>
  );
}
