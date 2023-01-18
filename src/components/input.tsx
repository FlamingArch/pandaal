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
      <div className={"flex items-center border-2 rounded-2xl border-primary-500 shadow-[#0000] hover:shadow-2xl focus-within:shadow-xl hover:shadow-gray-400 focus-within:hover:shadow-primary-500 focus-within:shadow-primary-200 focus-within:hover:shadow-2xl transition-shadow " + className}>
        {leading}
        <select
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="outline-none p-3 bg-transparent"
        >
          {children}
        </select>
        {trailing}
      </div>
    );
  }

  return (
    <div className={"flex items-center border-2 rounded-2xl border-primary-500 shadow-[#0000] hover:shadow-2xl focus-within:shadow-xl hover:shadow-gray-400 focus-within:hover:shadow-primary-500 focus-within:shadow-primary-200 focus-within:hover:shadow-2xl transition-shadow " + className}>
      {leading}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none p-3 bg-transparent"
      />
      {trailing}
    </div>
  );
};

export default Input;
