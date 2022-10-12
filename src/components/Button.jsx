import React from "react";

const Button = ({ type, leading, trailing, children, onClick }) => {
  return (
    <div
      className="flex flex-row p-4 bg-primary rounded-2xl text-white font-bold hover:shadow-2xl hover:shadow-primary transition-shadow"
      onClick={onClick}
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
