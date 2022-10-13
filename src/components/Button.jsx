import React from "react";

const Button = ({ type, leading, trailing, children, onClick, disabled }) => {
  return (
    <div
      className={`cursor-pointer flex flex-row p-4 bg-primary-400 rounded-2xl text-white font-bold hover:shadow-2xl hover:shadow-primary-400 transition-shadow ${
        disabled ? "opacity-50 cursor-default" : ""
      }`}
      onClick={!disabled && onClick}
    >
      {leading}
      <div className="flex-grow flex justify-center items-center">
        {children}
      </div>
      {trailing}
    </div>
  );
};

export default Button;
