import React from "react";

const AppBar = ({ leading, title, children }) => {
  return (
    <div className="flex flex-col gap-4 sticky top-0">
      {leading}
      {title}
      {children}
    </div>
  );
};

export default AppBar;
