const Input = ({
  children,
  value,
  onChange,
  placeholder,
  leading,
  trailing,
  type,
}) => {
  const getType = (type) => {
    return (
      {
        choiceAnswer: "select",
        longAnswer: "text",
        shortAnswer: "text",
        fileUpload: "file",
      }[type] || type
    );
  };

  if (getType(type) == "select") {
    return (
      <div className="bg-white overflow-hidden border-2 rounded-2xl focus-within:hover:shadow-[#3F4882AA] hover:shadow-2xl border-primary-400 flex gap-2 focus-within:shadow-2xl transition-shadow focus-within:shadow-[#3F4882AA]">
        {leading && <div className="p-4">{leading}</div>}
        <select
          className="outline-none flex-grow bg-transparent mr-4"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={getType(type) || "text"}
        >
          <option value="">Select</option>
          {children}
        </select>
        {trailing && <div className="p-4">{trailing}</div>}
      </div>
    );
  }

  return (
    <div
      className={
        "bg-white overflow-hidden border-2 rounded-2xl focus-within:hover:shadow-[#3F4882AA] hover:shadow-2xl border-primary-400 flex gap-2 focus-within:shadow-2xl transition-shadow focus-within:shadow-[#3F4882AA] " +
        (getType(type) == "file" ? "flex place-items-center" : "")
      }
    >
      {leading && <div className="p-4">{leading}</div>}
      <input
        className="outline-none flex-grow bg-transparent p-4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={getType(type) || "text"}
      />
      {trailing && <div className="p-4">{trailing}</div>}
    </div>
  );
};

export default Input;
