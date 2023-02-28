type InputProps = {
  children?: React.ReactNode;
  value: React.InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
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
     border-gray-400 hover:shadow-xl focus-within:shadow-primary-300 focus-within:hover:shadow-primary-300 focus-within:border-primary-500 focus-within:hover:border-primary-500 transition-all"
    >
      {props.leading}
      {getType(props.type ?? "text") == "select" ? (
        <select className="flex-grow outline-none bg-transparent p-3 mr-3">
          {props.children}
        </select>
      ) : (
        <input
          className="flex-grow outline-none bg-transparent p-3"
          value={props.value}
          onChange={props.onChange}
        />
      )}
      {props.trailing}
    </div>
  );
}
