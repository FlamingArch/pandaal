import { IconProps } from "./icons";

type ButtonProps = {
  children?: React.ReactNode;
  label?: string;
  Icon?: React.FunctionComponent<IconProps>;
  buttonStyle?: ButtonStyles;
} & Omit<React.ComponentProps<"button">, "children">;

type ButtonStyles =
  | "action"
  | "primary"
  | "secondary"
  | "emphasis"
  | "emphasisSecondary"
  | "emphasisAction"
  | "badge"
  | "card"
  | "cardSecondary"
  | "cardSecondaryReverse";

// TODO: Add disabled button styles
const buttonStyles = {
  emphasis: {
    button:
      "transition disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed flex p-3 rounded-2xl bg-primary-500 text-white gap-3 justify-center items-center font-medium hover:bg-primary-600 shadow-lg hover:shadow-xl shadow-primary-300 hover:shadow-primary-400",
    icon: "fill-white w-6 h-6",
  },
  emphasisSecondary: {
    button:
      "transition disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed flex p-3 rounded-2xl bg-white text-black hover:text-primary-500 gap-3 justify-center items-center font-medium hover:bg-gray-100 shadow-lg hover:shadow-xl fill-black hover:fill-primary-500",
    icon: "w-6 h-6",
  },
  primary: {
    button:
      "transition disabled:opacity-50 disabled:cursor-not-allowed flex p-3 rounded-2xl bg-primary-500 text-white gap-3 justify-center items-center font-medium hover:bg-primary-600 fill-white",
    icon: "w-6 h-6",
  },
  secondary: {
    button:
      "transition disabled:opacity-50 disabled:cursor-not-allowed flex p-3 rounded-2xl bg-gray-100 text-black gap-3 justify-center items-center font-medium hover:bg-gray-200 hover:text-primary-500 hover:fill-primary-500",
    icon: "w-6 h-6",
  },
  action: {
    button:
      "transition disabled:opacity-50 disabled:cursor-not-allowed flex p-3 rounded-xl bg-primary-50 bg-opacity-80 backdrop-blur backdrop-saturate-200 text-primary-500 gap-3 justify-center items-center font-medium hover:bg-primary-100 fill-primary-500",
    icon: "w-6 h-6",
  },
  emphasisAction: {
    button:
      "transition disabled:opacity-50 disabled:cursor-not-allowed flex p-3 rounded-xl bg-primary-500 text-white gap-3 justify-center items-center font-medium hover:bg-primary-600 fill-white",
    icon: "w-6 h-6",
  },
  badge: {
    button:
      "transition disabled:opacity-50 disabled:cursor-not-allowed flex rounded-xl bg-primary-50 bg-opacity-80 text-primary-500 justify-center items-center font-medium relative overflow-hidden hover:shadow-xl fill-primary-500",
    icon: "w-6 h-6 m-4 -z-20 absolute",
  },
  card: {
    button:
      "transition disabled:opacity-50 disabled:cursor-not-allowed rounded-full bg-primary-500 hover:bg-primary-600 text-white p-1 fill-primary-500 hover:fill-primary-700 flex flex-row-reverse justify-between items-center pl-4",
    icon: "bg-white rounded-full p-3",
  },
  cardSecondary: {
    button:
      "transition disabled:opacity-50 disabled:cursor-not-allowed rounded-full bg-primary-50 bg-opacity-80 backdrop-blur backdrop-saturate-200 hover:bg-primary-100 text-black p-1 fill-primary-500 hover:fill-primary-700 flex flex-row-reverse justify-between items-center pl-4",
    icon: "bg-white rounded-full p-3",
  },
  cardSecondaryReverse: {
    button:
      "transition disabled:opacity-50 disabled:cursor-not-allowed rounded-full bg-primary-50 bg-opacity-80 backdrop-blur backdrop-saturate-200 hover:bg-primary-100 text-black p-1 fill-primary-500 hover:fill-primary-700 flex flex-row gap-4 items-center pr-4",
    icon: "bg-white rounded-full p-3",
  },
};

function getButtonStyles(style: ButtonStyles) {
  switch (style) {
    case "emphasis":
      return buttonStyles.emphasis;
    case "emphasisSecondary":
      return buttonStyles.emphasisSecondary;
    case "emphasisAction":
      return buttonStyles.emphasisAction;
    case "primary":
      return buttonStyles.primary;
    case "secondary":
    default:
      return buttonStyles.secondary;
    case "action":
      return buttonStyles.action;
    case "badge":
      return buttonStyles.badge;
    case "card":
      return buttonStyles.card;
    case "cardSecondary":
      return buttonStyles.cardSecondary;
    case "cardSecondaryReverse":
      return buttonStyles.cardSecondaryReverse;
  }
}

export default function Button({
  children,
  buttonStyle,
  className,
  Icon,
  label,
  ...rest
}: ButtonProps) {
  const styles = getButtonStyles(buttonStyle ?? "secondary");
  return (
    <button {...rest} className={styles.button + ` ${className}`}>
      {Icon && <Icon className={styles.icon}></Icon>}
      {label}
      {children}
    </button>
  );
}
