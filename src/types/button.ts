import { IconProps } from "./icon";

export type ButtonProps = {
  children?: React.ReactNode;
  label?: string | React.ReactNode;
  Icon?: React.FunctionComponent<IconProps>;
  buttonStyle?: ButtonStyles;
} & Omit<React.ComponentProps<"button">, "children">;

export type ButtonStyles =
  | "primary"
  | "emphasis"
  | "secondary"
  | "action"
  | "actionEmphasis"
  | "actionSecondary"
  | "actionSecondaryInvert"
  | "actionSecondaryBlack"
  | "actionSecondaryWhite"
  | "actionSecondaryTransparent"
  | "actionSecondaryTransparentInvert"
  | "actionSecondaryTransparentBlack"
  | "actionSecondaryTransparentWhite"
  | "card"
  | "cardSecondary"
  | "cardReverse"
  | "cardSecondaryReverse"
  | "cardBig"
  | "cardBigSecondary"
  | "cardBigReverse"
  | "cardBigSecondaryReverse"
  | "cardSquare"
  | "cardSquareSecondary"
  | "badge";
