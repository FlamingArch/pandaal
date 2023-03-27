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
    <div
      className="flex items-center rounded-xl overflow-hidden border-2
     border-gray-700 hover:shadow-xl focus-within:shadow-primary-300 focus-within:hover:shadow-primary-300 focus-within:border-primary-500 focus-within:shadow-xl focus-within:hover:border-primary-500 transition-all fill-gray-700 focus-within:fill-primary-500 focus-within:hover:fill-primary-500 focus-within:text-primary-500 focus-within:hover:text-primary-500 text-gray-700"
    >
      {props.leading}
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
