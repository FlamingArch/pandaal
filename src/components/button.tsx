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
  | "badge";

const buttonStyles = {
  emphasis: {
    button:
      "transition-all flex p-4 rounded-2xl bg-primary-500 text-white gap-3 justify-center items-center font-medium hover:bg-primary-600 shadow-lg hover:shadow-xl shadow-primary-300 hover:shadow-primary-400",
    icon: "fill-white w-6 h-6",
  },
  emphasisSecondary: {
    button:
      "transition-all flex p-4 rounded-2xl bg-white text-black hover:text-primary-500 gap-3 justify-center items-center font-medium hover:bg-gray-100 shadow-lg hover:shadow-xl fill-black hover:fill-primary-500",
    icon: "w-6 h-6",
  },
  primary: {
    button:
      "transition-all flex p-4 rounded-2xl bg-primary-500 text-white gap-3 justify-center items-center font-medium hover:bg-primary-600 fill-white",
    icon: "w-6 h-6",
  },
  secondary: {
    button:
      "transition-all flex p-4 rounded-2xl bg-gray-100 text-black gap-3 justify-center items-center font-medium hover:bg-gray-200 hover:text-primary-500 hover:fill-primary-500",
    icon: "w-6 h-6",
  },
  action: {
    button:
      "transition-all flex p-4 rounded-xl bg-primary-50 bg-opacity-80 backdrop-blur text-primary-500 gap-3 justify-center items-center font-medium hover:bg-primary-100 fill-primary-500",
    icon: "w-6 h-6",
  },
  emphasisAction: {
    button:
      "transition-all flex p-4 rounded-xl bg-primary-500 text-white gap-3 justify-center items-center font-medium hover:bg-primary-600 fill-white",
    icon: "w-6 h-6",
  },
  badge: {
    button:
      "transition-all flex rounded-xl bg-primary-50 bg-opacity-80 text-primary-500 justify-center items-center font-medium relative overflow-hidden hover:shadow-xl fill-primary-500",
    icon: "w-6 h-6 m-4 -z-20 absolute",
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
