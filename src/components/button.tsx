type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
  style?: "action" | "primary" | "emphasis";
  className?: string;
};

function getButtonStyles(style: "action" | "primary" | "emphasis") {
  switch (style) {
    case "action":
      return "p-3 rounded-xl bg-primary-50 transition bg-opacity-80 text-base hover:bg-primary-100 backdrop-blur-xl w-fit h-fit fill-black hover:fill-primary-500";
    case "primary":
      return "p-3 rounded-2xl text-white bg-primary-500 text-base hover:bg-primary-600 transition";
    case "emphasis":
      return "p-3 rounded-2xl text-white bg-primary-500 text-base shadow-lg shadow-primary-300 hover:shadow-primary-400 hover:bg-primary-600 hover:shadow-xl transition";
  }
}

export default function Button(props: ButtonProps) {
  return (
    <button
      disabled={props.disabled}
      className={
        getButtonStyles(props.style ?? "primary") + ` ${props.className}`
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
