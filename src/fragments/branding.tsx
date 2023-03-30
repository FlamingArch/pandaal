import { Text } from "../components";

type BrandingProps = {
  color?: string;
  padding?:
    | number
    | { top?: number; bottom?: number; left?: number; right?: number };
  className?: string;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
};

export default function Branding(props: BrandingProps) {
  return (
    <Text
      style={{
        padding:
          typeof props.padding == "number"
            ? `${(props.padding ?? 6) / 4}rem`
            : `${(props.padding?.top ?? 6) / 4}rem ${
                (props.padding?.right ?? 6) / 4
              }rem ${(props.padding?.bottom ?? 6) / 4}rem ${
                (props.padding?.left ?? 6) / 4
              }rem`,
        ...props.style,
      }}
      accented={props.color ?? true}
      bold
      headingLevel={4}
      className={"grid place-content-center " + props.className}
    >
      pandaal
    </Text>
  );
}
