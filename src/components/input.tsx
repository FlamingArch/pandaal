import styles from "../tailwind/input";

type InputProps = {
  children?: React.ReactNode;
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: (
    value:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  placeholder?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  type?:
    | React.HTMLInputTypeAttribute
    | "choiceAnswer"
    | "longAnswer"
    | "textAnswer"
    | "shortAnswer"
    | "fileUpload"
    | "select";
  className?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

const getType = (type: string) =>
  ({
    choiceAnswer: "select",
    longAnswer: "text",
    shortAnswer: "text",
    textAnswer: "text",
    fileUpload: "file",
  }[type] || type);

export default function Input(props: InputProps) {
  return (
    <div className={styles.getAllStyles()}>
      <div className="flex items-center">{props.leading}</div>
      {getType(props.type ?? "text") == "select" ? (
        <select
          className="flex-grow outline-none bg-transparent p-3 mr-3 text-black"
          value={props.value}
          onChange={props.onChange}
        >
          {props.children}
        </select>
      ) : (
        <input
          inputMode={props.inputMode ?? "text"}
          className="flex-grow outline-none bg-transparent p-3 text-black"
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      )}
      {props.trailing}
    </div>
  );
}
