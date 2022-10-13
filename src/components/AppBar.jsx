import React from "react";

const AppBar = ({ leading, title, children }) => {
  return (
    <div className="flex flex-col p-6 gap-4 sticky top-0 backdrop-blur-2xl backdrop-filter">
      {leading}
      {title}
      {children}
    </div>
  );
};

export default AppBar;
