import React from "react";

const Input = ({
  children,
  value,
  onChange,
  placeholder,
  leading,
  trailing,
  type,
  className,
}: {
  children?: React.ReactNode;
  value?: any;
  onChange: any;
  placeholder?: string;
  leading?: any;
  trailing?: any;
  type?: string;
  className?: string;
}) => {
  const getType = (type: string) => {
    return (
      {
        choiceAnswer: "select",
        longAnswer: "text",
        shortAnswer: "text",
        fileUpload: "file",
      }[type] || type
    );
  };

  if (getType(type ?? "") == "select") {
    return (
      <div
        className={`bg-white overflow-hidden border-2 rounded-2xl focus-within:hover:shadow-[#3F4882AA] hover:shadow-2xl border-primary-400 flex gap-2 focus-within:shadow-2xl focus-within:shadow-[#3F4882AA] transition-all ${className}`}
      >
        {leading && <div className="p-4 pr-0">{leading}</div>}
        <select
          className="outline-none flex-grow bg-white mr-4"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
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
        `bg-white overflow-hidden border-2 rounded-2xl focus-within:hover:shadow-[#3F4882AA] hover:shadow-2xl border-primary-400 flex gap-2 focus-within:shadow-2xl focus-within:shadow-[#3F4882AA] transition-all ${className} ` +
        (getType(type ?? "") == "file" ? "flex place-items-center" : "")
      }
    >
      {leading && <div className="p-4 pr-0">{leading}</div>}
      <input
        className="outline-none flex-grow p-4 w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={getType(type ?? "text") || "text"}
      />
      {trailing && <div className="p-4">{trailing}</div>}
    </div>
  );
};

export default Input;
